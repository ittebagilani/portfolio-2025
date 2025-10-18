const navLinks = [
  { path: "/", label: "(home)" },
  // { path: "/work", label: "(work)" },
  { path: "/lab", label: "(lab)" },
  { path: "/contact", label: "(contact)" },
];

const Navbar = () => {
  return (
    <div className="w-full pt-10 relative z-[300]">
      <div className="max-w-5xl mx-auto flex justify-center md:gap-20 gap-10">
        {/* {navLinks.map((link) => (
          <a href={link.path} key={link.label}>
            {link.label}
          </a>
        ))} */}
        do you really need a navbar? just scroll
      </div>
    </div>
  );
};

export default Navbar;