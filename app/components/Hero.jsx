"use client";

import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section
            className="
        relative bg-black
        min-h-[60vh] sm:min-h-[55vh] lg:min-h-[50vh]
        px-4 xs:px-6 sm:px-10 lg:px-20
        py-10 sm:py-14 lg:py-16
        flex items-center
      "
        >
            <button
                onClick={() => {
                    document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
          absolute top-4 right-4
          sm:top-6 sm:right-6
          lg:top-8 lg:right-10
          flex items-center gap-2
          bg-gray-100 text-black
          px-3 py-2 sm:px-4
          rounded-xl font-semibold
          text-xs sm:text-sm lg:text-base
          cursor-pointer
        "
            >
                Contact Us
                <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-200 text-black">
                    <FiArrowUpRight size={16} />
                </span>
            </button>

            <div className="max-w-[900px]">
                <h1
                    className="
            text-white font-bold
            leading-[1.05]
            mb-5 sm:mb-6
            text-[clamp(28px,7vw,72px)]
          "
                >
                    We Build Digital Experiences
                    <br className="hidden sm:block" />
                    That Drive Growth
                </h1>

                <p
                    className="
            text-gray-300 leading-relaxed
            mb-7 sm:mb-8
            text-sm sm:text-base lg:text-lg
            max-w-full sm:max-w-[640px]
          "
                >
                    From strategy to execution, we create user-focused digital solutions
                    built to perform and scale.
                </p>

                <button
                    onClick={() => {
                        document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="
            inline-flex items-center gap-3
            bg-gray-100 text-black
            px-4 py-2.5 sm:px-5 sm:py-3
            rounded-2xl font-semibold
            text-sm sm:text-base cursor-pointer
          "
                >
                    Ask For Quote
                    <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-200 text-black">
                        <FiArrowUpRight size={16} />
                    </span>
                </button>
            </div>
        </section>
    );
}
