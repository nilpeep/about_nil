import React, { useState } from "react";
import { sendEmail } from "../services/contactService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    sendEmail(formData)
      .then((result) => {
        setLoading(false);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <ToastContainer position="top-center" />

        <div>
          <h2 className="text-center text-3xl font-extrabold text-highlight">
            Send me a message!
          </h2>
          <p className="mt-2 text-center text-sm text-text">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="shadow-sm -space-y-px">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text"
              >
                Your Name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                autoComplete="name"
                required
                value={formData.from_name}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-text focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text"
              >
                Email Address
              </label>
              <input
                id="email"
                name="from_email"
                type="email"
                autoComplete="email"
                required
                value={formData.from_email}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-text focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-text focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`group rounded-lg relative w-full flex justify-center py-2 px-4 text-sm font-medium text-secondary ${
                loading ? "bg-none" : "bg-text"
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 000 8H4z"
                  ></path>
                </svg>
              ) : (
                "Shoot"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
