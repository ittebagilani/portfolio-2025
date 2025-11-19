// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 text-black py-6 lowercase mb-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Section */}
        <div className="flex flex-col">
          <a href="#" className="text-lg font-medium hover:underline">
            itteba gilani
          </a>
          <p className="text-sm">Portfolio 2025 v2</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col text-sm">
          <p>software developer</p>
          <p>Visual Designer</p>
          <p className="mt-2">All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col text-sm">
          <p className="text-neutral-400">Let&apos;s chat</p>
          <a
            href="mailto:subject=Hello"
            className="text-lg font-medium hover:underline text-emerald-800"
          >
            say hi
          </a>
          <a
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 font-medium hover:underline"
          >
            Resume
          </a>{" "}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/itteba-gilani/"
              className="hover:underline"
            >
              Linkedin
            </a>
            <a href="https://x.com/iittebagilanii" className="hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
