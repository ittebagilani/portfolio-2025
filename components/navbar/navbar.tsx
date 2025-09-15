const navLinks = [
  { path: "/", label: "(home)" },
  { path: "/work", label: "(work)" },
  { path: "/contact", label: "(contact)" },
];

const Navbar = () => {
  return (
    <div className="w-full pt-10">
      <div className="max-w-5xl mx-auto flex justify-center gap-20">
        {navLinks.map((link) => (
          <a href={link.path} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
