"use client";

import { motion } from "framer-motion";

const topServices = [
    {
        title: "Web\nDesign",
        desc:
            "We create visually appealing, user-centric designs that enhance usability, reflect your brand, and guide users toward meaningful actions.",
    },
    {
        title: "Web\nDevelopment",
        desc:
            "We build fast, secure, and scalable websites using clean code and modern technologies to ensure reliable performance and long-term growth.",
    },
];

const bottomServices = [
    {
        title: "SEO",
        desc:
            "We improve your search visibility to drive organic traffic and attract the right audience.",
    },
    {
        title: "SMM",
        desc:
            "We grow your brand on social platforms through strategic content and engagement.",
    },
    {
        title: "Digital\nMarketing",
        desc:
            "We create data-driven strategies that grow reach, leads, and conversions.",
    },
];

export default function Services() {
    return (
        <section className="bg-black px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-28">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="max-w-4xl mb-12 sm:mb-16"
            >
                <span className="inline-block bg-white text-black px-4 py-2 rounded-xl font-medium mb-5 sm:mb-6">
                    Our Services
                </span>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    We offer end-to-end digital services focused on design, performance,
                    and scalability. From building modern websites to optimizing user
                    experience, we help brands create digital platforms that deliver real
                    results.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {topServices.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-200 p-6 sm:p-8 lg:p-10 rounded-xl transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <h3 className="text-black text-xl sm:text-2xl font-semibold whitespace-pre-line mb-3 sm:mb-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {bottomServices.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-200 p-6 sm:p-8 lg:p-10 rounded-xl transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <h3 className="text-black text-xl sm:text-2xl font-semibold whitespace-pre-line mb-3 sm:mb-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
