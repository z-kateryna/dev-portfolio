import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";

const variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

export default function MainLayout() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && showHero) {
        setShowHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHero]);

  return (
    <div className="layout-container" style={{ overflow: "hidden", position: "relative", height: "100vh" }}>
      <AnimatePresence mode="wait">
        {showHero ? (
          <motion.div
            key="hero"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <Hero />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
