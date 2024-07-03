import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;

export const sendEmail = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
};
