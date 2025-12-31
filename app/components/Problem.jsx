"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

const Problems = () => {
    const containerRef = useRef(null);

    const text =
        "We know what stands in your way. That’s why we help you turn challenges into real digital results.";
    const words = text.split(" ");

    const pills = [
        { text: "Growth limited by tech", top: "12%", left: "6%" },
        { text: "Performance holding you back", top: "18%", right: "6%" },
        { text: "Scattered brand presence", bottom: "22%", left: "8%" },
        { text: "Looks good. Performs poorly", bottom: "16%", right: "6%" },
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section className="bg-white">
            <div
                ref={containerRef}
                className="relative h-[280vh] sm:h-[300vh] w-full"
            >
                <div
                    className="
            sticky top-0 h-[100svh] w-full
            flex flex-col items-center justify-center
            overflow-hidden
            px-4 sm:px-6 lg:px-10
          "
                >
                    {pills.map((pill, index) => (
                        <Pill
                            key={index}
                            data={pill}
                            index={index}
                            total={pills.length}
                            progress={scrollYProgress}
                        />
                    ))}

                    <h2
                        className="
              max-w-5xl text-center font-bold tracking-tight text-black z-10
              text-[clamp(22px,5.5vw,36px)]
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
                </div>
            </div>
        </section>
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

const Pill = ({ data, index, total, progress }) => {
    const startTrigger = (index / total) * 0.75;
    const endTrigger = startTrigger + 0.12;

    const opacity = useTransform(progress, [startTrigger, endTrigger], [0, 1]);
    const scale = useTransform(progress, [startTrigger, endTrigger], [0.8, 1]);
    const y = useTransform(progress, [startTrigger, endTrigger], [32, 0]);

    return (
        <motion.div
            style={{
                position: "absolute",
                top: data.top,
                left: data.left,
                right: data.right,
                bottom: data.bottom,
                opacity,
                scale,
                y,
            }}
            className="
        bg-[#F3F4F6] border border-gray-200
        px-4 py-2 sm:px-5 sm:py-2.5
        rounded-full
        text-xs sm:text-sm md:text-base
        font-semibold text-gray-800
        shadow-md whitespace-nowrap
        z-0
        max-w-[85vw] sm:max-w-none
        flex items-center gap-2
      "
        >
            <FiAlertTriangle className="text-gray-700" size={16} />
            {data.text}
        </motion.div>
    );
};

export default Problems;
