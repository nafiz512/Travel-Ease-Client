import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";

const Contact = () => {
    return (
        <div>
            <main class="flex-1 px-4 py-12 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-7xl">
                    <div class="flex flex-col items-center justify-center text-center">
                        <div class="flex min-w-72 flex-col gap-3">
                            <p class="text-base-content text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                                Get in Touch
                            </p>
                            <p class="text-[#93afc8] text-base font-normal leading-normal max-w-xl mx-auto">
                                We'd love to hear from you. Fill out the form
                                below, and our team will get back to you within
                                24 hours.
                            </p>
                        </div>
                    </div>
                    <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
                        <div class="lg:col-span-3">
                            <div class="rounded-xl shadow-xl border border-gray-200 p-6 sm:p-8">
                                <form
                                    action="#"
                                    class="space-y-6"
                                    method="POST"
                                >
                                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div class="relative">
                                            <input
                                                class="peer form-input block w-full resize-none overflow-hidden rounded-lg text-content focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300  focus:border-primary h-14 placeholder:text-transparent p-[15px] text-base font-normal leading-normal"
                                                id="full-name"
                                                name="full-name"
                                                placeholder="Enter your full name"
                                                type="text"
                                            />
                                            <label
                                                class="absolute left-4 top-3.5 text-[#93afc8] transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary  px-1"
                                                for="full-name"
                                            >
                                                Full Name
                                            </label>
                                        </div>
                                        <div class="relative">
                                            <input
                                                class="peer form-input block w-full resize-none overflow-hidden rounded-lg text-content focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300  focus:border-primary h-14 placeholder:text-transparent p-[15px] text-base font-normal leading-normal"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your email address"
                                                type="email"
                                            />
                                            <label
                                                class="absolute left-4 top-3.5 text-[#93afc8] transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary  px-1"
                                                for="email"
                                            >
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <input
                                            class="peer form-input block w-full resize-none overflow-hidden rounded-lg text-content focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300  focus:border-primary h-14 placeholder:text-transparent p-[15px] text-base font-normal leading-normal"
                                            id="subject"
                                            name="subject"
                                            placeholder="Enter the subject"
                                            type="text"
                                        />
                                        <label
                                            class="absolute left-4 top-3.5 text-content transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary  px-1"
                                            for="subject"
                                        >
                                            Subject
                                        </label>
                                    </div>
                                    <div class="relative">
                                        <textarea
                                            class="peer form-input block w-full resize-none overflow-hidden rounded-lg text-content focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300  focus:border-primary placeholder:text-transparent p-[15px] text-base font-normal leading-normal"
                                            id="message"
                                            name="message"
                                            placeholder="Write your message here..."
                                            rows="5"
                                        ></textarea>
                                        <label
                                            class="absolute left-4 top-3.5 text-[#93afc8] transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary  px-1"
                                            for="message"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-gradient-to-r from-sky-400 to-sky-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                                            type="submit"
                                        >
                                            <span class="truncate">
                                                Send Message
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="lg:col-span-2 space-y-8">
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                        <span class="text-3xl material-symbols-outlined">
                                            <IoMail />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-base-content">
                                            Email
                                        </h3>
                                        <p class="text-[#93afc8]">
                                            support@travelease.com
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                        <span class="text-3xl material-symbols-outlined">
                                            <FaPhoneSquareAlt />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-base-content">
                                            Phone
                                        </h3>
                                        <p class="text-[#93afc8]">
                                            (123) 456-7890
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                                        <span class="text-3xl material-symbols-outlined">
                                            <IoLocation />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-base-content">
                                            Office
                                        </h3>
                                        <p class="text-[#93afc8]">
                                            123 TravelEase St, Wanderlust City,
                                            90210
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="h-[200px] w-full overflow-hidden rounded-xl ">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fHww"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
