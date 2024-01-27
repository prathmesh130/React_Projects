import React from 'react'
import { useForm } from "react-hook-form"
function ContactPage() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        // <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center flex-col items-center gap-2'>
        //     <input {...register("firstName")} className='border-2 border-black rounded-lg p-1 focus:scale-105 focus:border-pink-300 ' />
        //     <select {...register("gender")}>
        //         <option value="female">female</option>
        //         <option value="male">male</option>
        //         <option value="other">other</option>
        //     </select>
        //     <input type="submit" className='px-4 bg-pink-400 rounded-lg py-2 cursor-pointer' />
        // </form>
        <section className="text-gray-600 body-font bg-yellow-100">
            <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
                id="contact-form">
                <div className="md:w-1/3 w-full">
                    <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
                    <p className="leading-relaxed text-xl text-gray-900">
                        We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
                        us.
                    </p>
                    <span className="inline-flex mt-6 justify-center sm:justify-start">
                    </span>
                </div>
                <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
                    <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="name" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                                <input {...register("name")} type="text" id="name" name="name" required=""
                                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                                <input {...register("email")} type="email" id="email" name="email" required=""
                                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                                <textarea {...register("message")} id="message" name="message" required=""
                                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type="submit"
                                className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                                Send Message ✉
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactPage