import { MoveRight } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="py-16 px-8 md:px-12 w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-16">
      <GetInTouch />
      <Form />
    </div>
  );
}

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-[14vw] md:text-[10vw] leading-[0.8] font-semibold">
        Get in
        <br />
        <span className="inline-flex items-center gap-4">
          Touch
          <MoveRight className="hidden md:inline w-[0.6em] h-[0.6em] pt-2" />
        </span>
      </h1>
      <p className="mt-4 text-sm text-gray-400">© folio '25</p>
    </div>
  );
};

const Form = () => {
  return (
    <form className="w-full max-w-md flex flex-col gap-6 text-lg">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl text-gray-800 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="bg-transparent border-b border-gray-600 focus:border-white outline-none text-black py-2 transition-colors"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-xl text-gray-800 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          className="bg-transparent border-b border-gray-600 focus:border-white outline-none text-black py-2 transition-colors"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-xl text-gray-800 mb-2">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message..."
          rows={3}
          className="bg-transparent border-b border-gray-600 focus:border-white outline-none text-black py-2 transition-colors resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="self-start mt-4 border border-gray-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
      >
        Send
      </button>
    </form>
  );
};
