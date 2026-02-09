"use client";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import Loader from "@/components/Common/Loader";
import Logo from "@/components/Layout/Header/Logo";
//import { registerUser } from "@/lib/apiMock";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const authDialog = useContext(AuthDialogContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData(e.currentTarget);
        const body = Object.fromEntries(data.entries());

        try {
            const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

            const result = await res.json();

        if (!res.ok) {
            throw new Error(result.message);
        }

        toast.success("Successfully registered");
        const name = body.name as string;
        const email = body.email as string;

        localStorage.setItem(
        "user",
        JSON.stringify({
            firstLetter: name.charAt(0).toUpperCase(),
            name,
            email,
        })
        );
        signUpOpen(false);
        router.refresh();
        } catch (err: any) {
            toast.error(err.message || "Registration failed");
        } finally {
            setLoading(false);
            authDialog?.setIsUserRegistered(true);
            setTimeout(() => authDialog?.setIsUserRegistered(false), 1100);
        }
};


    return (
        <>
            <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
                <Logo />
            </div>

            <SocialSignUp />

            <span className="z-1 relative my-4 block text-center">
                OR
            </span>

            <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="mb-9">
                    <button
                        type="submit"
                        className="flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:!bg-darkprimary dark:hover:!bg-darkprimary"
                    >
                        Sign Up {loading && <Loader />}
                    </button>
                </div>
            </form>

            <p className="text-body-secondary text-base">
                Already have an account?
                <Link
                    href="/"
                    className="pl-2 text-primary hover:bg-darkprimary hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </>
    );
};

export default SignUp;
