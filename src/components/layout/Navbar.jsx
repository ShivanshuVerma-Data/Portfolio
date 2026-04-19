import { motion } from "framer-motion";

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-8 py-4 flex justify-between items-center"
    >
      <h1
        className="text-lg font-semibold text-blue-400 cursor-pointer hover:scale-105 transition"
        onClick={() => scrollTo("hero")}
      >
        Portfolio
      </h1>

      <ul className="flex gap-6 text-gray-300">
        {["projects", "skills", "about", "contact"].map((item) => (
          <li
            key={item}
            onClick={() => scrollTo(item)}
            className="hover:text-white cursor-pointer transition hover:scale-105"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;