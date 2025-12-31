"use client";

import { motion } from "framer-motion";
import {
    FiSearch,
    FiClipboard,
    FiMonitor,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const steps = [
    {
        title: "Discover",
        desc: "We understand your goals, challenges, and digital strategy.",
        step: "1",
        icon: <FiSearch className="text-blue-500" />,
    },
    {
        title: "Plan",
        desc: "We define scope, timelines, and the right digital approach.",
        step: "2",
        icon: <FiClipboard className="text-purple-500" />,
    },
    {
        title: "Build",
        desc: "We design and develop scalable, performance-focused solutions.",
        step: "3",
        icon: <FiMonitor className="text-emerald-500" />,
    },
    {
        title: "Launch & Optimize",
        desc: "We test, launch, and refine for real-world results.",
        step: "4",
        icon: <FaRocket className="text-orange-500" />,
    },
];

export default function HowWeWork() {
    return (
        <section className="bg-black px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-28">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mb-12 sm:mb-16"
            >
                <span className="inline-block bg-white text-black px-4 py-2 rounded-xl font-medium mb-5 sm:mb-6">
                    How We Work
                </span>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    We specialize in building scalable, performance-driven digital
                    solutions. By combining design, development, and user experience, we
                    create digital platforms that help brands grow with confidence.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
                {steps.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative bg-neutral-900 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-5 sm:mb-6 text-lg sm:text-xl">
                            {item.icon}
                        </div>

                        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg">
                            <h3 className="text-black text-base sm:text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-300 text-black font-semibold flex items-center justify-center text-sm">
                            {item.step}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white text-2xl sm:text-3xl font-semibold text-center mb-12 sm:mb-16"
            >
                Your Web Presence is in good hands
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-purple-300 p-6 sm:p-10 rounded-xl"
                >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-400 text-black font-semibold flex items-center justify-center mb-5 sm:mb-6">
                        1
                    </div>
                    <h4 className="text-black text-lg sm:text-xl font-semibold mb-3">
                        Experienced Designers
                    </h4>
                    <p className="text-black text-sm sm:text-base">
                        We craft refined visuals tailored to your brand style.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-lime-300 p-6 sm:p-10 rounded-xl"
                >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lime-400 text-black font-semibold flex items-center justify-center mb-5 sm:mb-6">
                        2
                    </div>
                    <h4 className="text-black text-lg sm:text-xl font-semibold mb-3">
                        Front-end Developer
                    </h4>
                    <p className="text-black text-sm sm:text-base">
                        Our frontend developers build custom features that elevate your
                        website.
                    </p>
                </motion.div>
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-teal-300 p-6 sm:p-10 rounded-xl"
            >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-400 text-black font-semibold flex items-center justify-center mb-5 sm:mb-6">
                    3
                </div>
                <h4 className="text-black text-lg sm:text-xl font-semibold mb-3">
                    Digital Marketing Experts
                </h4>
                <p className="text-black text-sm sm:text-base">
                    We drive growth through targeted, data-driven digital marketing.
                </p>
            </motion.div>
        </section>
    );
}
