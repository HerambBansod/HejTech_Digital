"use client";

export default function Footer() {
    return (
        <footer className="bg-black px-4 sm:px-8 lg:px-20 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a1a1a] via-black to-[#0f172a] p-8 sm:p-12 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                            Experience superior <br /> digital solutions
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Strategy, design, and development focused on real business growth.
                        </p>

                        <button className="bg-white text-black px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition">
                            Get started
                        </button>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div className="w-64 h-64 rounded-full border border-gray-700 opacity-40" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-gray-400">
                    <div />

                    <div className="text-sm space-y-4 md:text-right">
                        <div>
                            <p className="text-gray-500">Phone</p>
                            <p className="text-white font-medium">+91 7448009200</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Email</p>
                            <p className="text-white font-medium">
                                hejtechdigital@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-500 mt-16">
                    © {new Date().getFullYear()} HejTech Digital. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
