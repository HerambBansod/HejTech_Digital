"use client";

import { motion } from "framer-motion";
import Problem from "./components/Problem";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TransitionItem from "./components/TransitionItem";
import WhatWeDo from "./components/WhatWeDo";
import TransitionText from "./components/TransitionText";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
     <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeIn",
      }}
    >
      <Hero />
      <Problem />
      <Services />
      <TransitionItem />
      <WhatWeDo />
      <TransitionText />
      <Contact />
      <Footer />
    </motion.main>
  );
}
