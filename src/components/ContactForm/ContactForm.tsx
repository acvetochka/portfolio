import { useState } from "react";
import emailjs from "emailjs-com";
import { FormStyled, InputStyled, InputWrapper, TextareaStyled } from "./ContactForm.styles";
import { Button } from "../Button/Button";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <FormStyled onSubmit={handleSubmit} >
      <InputWrapper>
      <label>Full name
      <InputStyled type="text" id="name" name="name" placeholder="John Smith" required value={formData.name} onChange={handleChange} /></label>
      </InputWrapper>
      <InputWrapper>
      <label>Email
      <InputStyled type="email" name="email" placeholder="email@mail.com" required value={formData.email} onChange={handleChange} /></label>
      </InputWrapper>
      <InputWrapper>
      <label>Message
      <TextareaStyled name="message" placeholder="" required value={formData.message} onChange={handleChange} /></label>
      </InputWrapper>
      <Button type="submit" className="has-button">Send</Button>
      {status && <p>{status}</p>}
    </FormStyled>
  );
};
