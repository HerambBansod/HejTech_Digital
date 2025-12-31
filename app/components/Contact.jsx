"use client";

import { motion } from "framer-motion";
import {
    FiInstagram,
    FiPhone,
    FiMail,
    FiArrowUpRight,
    FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        services: [],
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (service) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                "https://sheetdb.io/api/v1/95xrfnwv4uuro",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        data: {
                            Name: formData.name,
                            Company: formData.company,
                            Email: formData.email,
                            Services: formData.services.join(", "),
                            Message: formData.message,
                        },
                    }),
                }
            );

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    services: [],
                    message: "",
                });
            }
        } catch (err) {
            console.error("SheetDB Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-white px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-28"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-black text-3xl sm:text-4xl font-semibold mb-4">
                        Get In Touch
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg max-w-md mb-8">
                        Have a project in mind? Let’s discuss your goals, scope, and budget
                        to build digital solutions that deliver real results.
                    </p>

                    <div className="flex items-center gap-3 text-black font-medium mb-6">
                        <FiPhone size={18} />
                        <span>+91 7448009200</span>
                        <FiMail size={18} className="ml-6" />
                        <span>hejtechdigital@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center" href="https://www.instagram.com/hejtech_/">
                            <FiInstagram size={18} />
                        </a>
                        <a
                            href="https://wa.me/917448009200"
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
                        >
                            <FaWhatsapp size={18} />
                        </a>
                        <a
                            href="mailto:hejtechdigital@gmail.com"
                            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
                        >
                            <FiMail size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black rounded-3xl p-6 sm:p-8 lg:p-10"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name*"
                            className="w-full h-12 rounded-full bg-gray-200 px-5 outline-none text-black"
                            required
                        />
                        <input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name*"
                            className="w-full h-12 rounded-full bg-gray-200 px-5 outline-none text-black"
                            required
                        />
                    </div>

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        className="w-full h-12 rounded-full bg-gray-200 px-5 outline-none text-black mb-6"
                        required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-white mb-6">
                        {[
                            "Web Design",
                            "Web Development",
                            "SEO",
                            "SMM",
                            "Digital Marketing",
                            "Other / Not Sure Yet",
                        ].map((item) => (
                            <label key={item} className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={formData.services.includes(item)}
                                    onChange={() => handleCheckbox(item)}
                                />
                                {item}
                            </label>
                        ))}
                    </div>

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full h-32 sm:h-40 rounded-3xl bg-gray-200 p-5 outline-none text-black resize-none mb-6"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl font-semibold"
                    >
                        {loading ? "Sending..." : "Submit"}
                        <span className="w-6 h-6 rounded-lg bg-teal-300 flex items-center justify-center">
                            <FiArrowUpRight size={16} />
                        </span>
                    </button>

                    {success && (
                        <div className="flex items-center gap-2 text-green-400 mt-4 text-sm">
                            <FiCheckCircle size={18} />
                            Message sent successfully
                        </div>
                    )}
                </motion.form>
            </div>
        </section>
    );
}
