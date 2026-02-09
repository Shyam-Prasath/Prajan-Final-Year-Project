"use client";

import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

const ContactForm = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const data = {
        firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
        lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        role: (form.elements.namedItem("role") as HTMLSelectElement).value,
        purpose: (form.elements.namedItem("purpose") as HTMLSelectElement).value,
        contactTime: (form.elements.namedItem("contactTime") as HTMLInputElement).value,
        };

        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Request failed");

        toast.success("Message sent successfully 🚀");
        form.reset();
        } catch (error) {
        toast.error("Something went wrong. Please try again.");
        }
};

return (
    <>
        <Toaster position="top-center" />

        <section className="dark:bg-darkmode lg:pb-24 pb-16 pt-0">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-5">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-8 p-5">

                <Toaster position="top-center" />
                
                {/* LEFT : FORM */}
                <div className="col-span-6 p-5">
                <h2 className="max-w-md text-[40px] leading-[3.4rem] font-bold mb-6 text-secondary dark:text-white">
                    Help Us Improve Early Detection
                </h2>

                <p className="text-lg text-SlateBlueText dark:text-opacity-80 mb-10">
                    If you are a student, researcher, doctor, or someone who believes
                    technology can save lives — reach out.
                </p>

                <form
                    className="flex flex-wrap w-full justify-between"
                    onSubmit={handleSubmit}
                >
                    {/* NAME */}
                    <div className="sm:flex gap-3 w-full">
                    <div className="mx-0 my-2.5 flex-1">
                        <label className="pb-3 inline-block text-base text-SlateBlueText">
                        First Name*
                        </label>
                        <input
                        name="firstName"
                        required
                        className="w-full text-base px-4 rounded-lg py-2.5 border border-border dark:border-dark_border dark:text-white dark:bg-darkmode focus:border-primary focus:outline-0"
                        type="text"
                        placeholder="Your first name"
                        />
                    </div>

                    <div className="mx-0 my-2.5 flex-1">
                        <label className="pb-3 inline-block text-base text-SlateBlueText">
                        Last Name*
                        </label>
                        <input
                        name="lastName"
                        required
                        className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode focus:border-primary focus:outline-0"
                        type="text"
                        placeholder="Your last name"
                        />
                    </div>
                    </div>

                    {/* EMAIL + ROLE */}
                    <div className="sm:flex gap-3 w-full">
                    <div className="mx-0 my-2.5 flex-1">
                        <label className="pb-3 inline-block text-base text-SlateBlueText">
                        Email Address*
                        </label>
                        <input
                        name="email"
                        required
                        type="email"
                        className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode focus:border-primary focus:outline-0"
                        placeholder="example@email.com"
                        />
                    </div>

                    <div className="mx-0 my-2.5 flex-1">
                        <label className="pb-3 inline-block text-base text-SlateBlueText">
                        Your Role*
                        </label>
                        <select
                        name="role"
                        required
                        className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode focus:border-primary focus:outline-0"
                        >
                        <option value="">Select your role</option>
                        <option>Medical Professional</option>
                        <option>Researcher / Academic</option>
                        <option>Student</option>
                        <option>AI / ML Engineer</option>
                        <option>General Supporter</option>
                        </select>
                    </div>
                    </div>

                    {/* PURPOSE + TIME */}
                    <div className="sm:flex gap-3 w-full">
                    <div className="mx-0 my-2.5 flex-1">
                        <label className="pb-3 inline-block text-base text-SlateBlueText">
                        Purpose of Contact*
                        </label>
                        <select
                        name="purpose"
                        required
                        className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode focus:border-primary focus:outline-0"
                        >
                        <option value="">Choose one</option>
                        <option>Project Feedback</option>
                        <option>Dataset / Research Collaboration</option>
                        <option>Model Improvement Suggestions</option>
                        <option>Clinical Guidance</option>
                        <option>General Query</option>
                        </select>
                    </div>

                    <div className="mx-0 my-2.5 flex-1">
                        <label className="pb-3 inline-block text-base text-SlateBlueText">
                        Preferred Contact Time
                        </label>
                        <input
                        name="contactTime"
                        type="time"
                        className="w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:text-white dark:bg-darkmode focus:border-primary focus:outline-0"
                        />
                    </div>
                    </div>

                    {/* SUBMIT */}
                    <div className="mx-0 my-4 w-full">
                        <button
                            type="submit"
                            className="
                            group relative overflow-hidden rounded-lg px-6 py-3 font-semibold
                            border-2 border-blue-600
                            text-white
                            "
                        >
                            <span
                            className="
                                absolute inset-0 bg-blue-600
                                transition-transform duration-300 ease-in-out
                                group-hover:-translate-y-full
                            "
                            />

                            <span
                            className="
                                relative z-10
                                transition-colors duration-300
                                group-hover:text-blue-600
                            "
                            >
                            Send Message
                            </span>
                        </button>
                    </div>

                </form>
                </div>

                {/* RIGHT : IMAGE */}
                <div className="col-span-6 flex items-center justify-center">
                <Image
                    src="/images/meme2.png"
                    alt="AI & Healthcare"
                    width={1200}
                    height={800}
                    quality={100}
                    className="rounded-2xl shadow-xl object-contain"
                />
                </div>

            </div>
            </div>
        </section>
    </>
);
};

export default ContactForm;
