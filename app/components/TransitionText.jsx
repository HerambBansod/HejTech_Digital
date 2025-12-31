"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TransitionText = () => {
    const containerRef = useRef(null);
    const text = "From clarity to execution, this is where ideas take shape.";
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "start 30%"],
    });

    return (
        <div
            ref={containerRef}
            className="
        relative w-full bg-black
        h-[45svh] sm:h-[55vh] lg:h-[60vh]
      "
        >
            <div className="sticky top-0 h-full flex items-center justify-center px-4 sm:px-6 lg:px-10">
                <h1
                    className="
            max-w-5xl text-center font-bold tracking-tight text-white
            flex flex-wrap justify-center
            text-[clamp(22px,5vw,36px)]
            leading-[1.2]
          "
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;

                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </h1>
            </div>
        </div>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="mx-[0.12em] inline-block">
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export default TransitionText;
