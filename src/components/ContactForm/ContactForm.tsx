import { useState } from "react";
import emailjs from "emailjs-com";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import inputData from "@/data/inputData.json";
import { FormStyled, InputWrapper, TextareaStyled } from "./ContactForm.styles";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Error sending message."));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {inputData.map(({ type, name, label, placeholder }) => (
        <Input
          key={name}
          type={type}
          label={label}
          name={name}
          placeholder={placeholder}
          value={formData[name as keyof typeof formData]}
          onChange={handleChange}
        />
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
      </InputWrapper>
      <Button type="submit" className="has-button">
        Send
      </Button>
      {status && <p>{status}</p>}
    </FormStyled>
  );
};
