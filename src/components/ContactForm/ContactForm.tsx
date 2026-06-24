"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { ValidationError } from "yup";

import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import inputData from "@/data/inputData.json";
import { FormStyled, InputWrapper, TextareaStyled } from "./ContactForm.styles";
import { isSpamMessage } from "@/lib/checkSpamMessage";
import { schema } from "@/contstans/validateRules";
import { verifyEmailWithMailboxLayer } from "@/lib/fetchEmailValid";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    // 🔹 1. Валідація через Yup
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      // setLoading(false);
    } catch (err) {
      if (err instanceof ValidationError) {
        const newErrors: Record<string, string> = {};
        err.inner.forEach((e) => {
          if (e.path) {
            newErrors[e.path] = e.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error("Unexpected validation error:", err);
      }
      setLoading(false);
      return;
    }

    // 🔹 2. Перевірка на спам
    if (isSpamMessage(formData.message)) {
      setErrors({ message: "Your message looks like spam. Please rephrase." });
      setLoading(false);
      return;
    }

    // 🔹 3. Перевірка існування email через MailboxLayer
    const validEmail = await verifyEmailWithMailboxLayer(formData.email);
    if (!validEmail) {
      setErrors({ email: "This email address seems invalid or unreachable." });
      setLoading(false);
      return;
    }

    // 🔹 4. Відправка через EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Error sending message."));
    setLoading(false);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {inputData.map(({ type, name, label, placeholder }) => (
        <InputWrapper key={name}>
          <Input
            type={type}
            label={label}
            name={name}
            placeholder={placeholder}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
          />
          {errors[name] && <p style={{ color: "red" }}>{errors[name]}</p>}
        </InputWrapper>
      ))}

      <InputWrapper>
        <label>
          Message
          <TextareaStyled
            name="message"
            placeholder="Write here your message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </InputWrapper>

      <Button type="submit" className="has-button" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </Button>
      {status && <p>{status}</p>}
    </FormStyled>
  );
};
