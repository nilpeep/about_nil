import React from "react";

const Contact: React.FC = () => {
  return (
    <div className=" flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-highlight">
            Send me a message!
          </h2>
          <p className="mt-2 text-center text-sm text-text">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" shadow-sm -space-y-px ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none  relative block w-full px-3 py-2   placeholder-gray-500 text-text  focus:outline-none focus:ring-indigo-500 focus:-indigo-500 focus:z-10 sm:text-sm"
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
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none  relative block w-full px-3 py-2   placeholder-gray-500 text-text  focus:outline-none focus:ring-indigo-500 focus:-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none  relative block w-full px-3 py-2   placeholder-gray-500 text-text  focus:outline-none focus:ring-indigo-500 focus:-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group rounded-lg relative w-full flex justify-center py-2 px-4  -transparent text-sm font-medium text-secondary bg-text hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Shoot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
