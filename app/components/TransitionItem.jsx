"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TransitionItem = () => {
    const containerRef = useRef(null);
    const text =
        "We align strategy, scope, and budget to build digital solutions that work for your business.";
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "start 30%"],
    });

    return (
        <div className="bg-white w-full">
            <div className="h-[40vh] sm:h-[45vh]" />

            <div
                ref={containerRef}
                className="
          py-16 sm:py-20
          flex flex-col items-center justify-center
          px-4 sm:px-6 lg:px-10
        "
            >
                <h2
                    className="
            max-w-5xl text-center font-bold tracking-tight text-black
            text-[clamp(22px,5vw,36px)]
            leading-[1.25]
          "
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = (i + 1) / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </h2>

                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    className="
            mt-10 sm:mt-12
            flex items-center gap-3
            bg-[#E5E7EB] hover:bg-gray-300 transition-colors
            px-4 sm:px-5 py-2.5
            rounded-xl font-bold text-black
            text-sm sm:text-base cursor-pointer
          "
                    onClick={() => {
                        document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Contact Us
                    <span className="flex items-center justify-center bg-[#99F6E4] rounded-md p-1">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </span>
                </motion.button>
            </div>

            <div className="h-[40vh] sm:h-[45vh]" />
        </div>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="mx-1 inline-block">
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export default TransitionItem;
