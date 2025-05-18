import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md font-sans">
            <h2 className="text-center mb-6 text-gray-800 text-xl font-semibold">Contact Us</h2>
            {submitted ? (
                <div className="text-green-600 bg-green-50 p-4 rounded-md text-center font-medium">
                    Thank you for reaching out! We'll get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col font-medium text-gray-700 text-sm">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="mt-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </label>
                    <label className="flex flex-col font-medium text-gray-700 text-sm">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="mt-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </label>
                    <label className="flex flex-col font-medium text-gray-700 text-sm">
                        Message
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="mt-1 px-3 py-2 border border-slate-300 rounded-md text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="How can we help you?"
                            rows={5}
                        />
                    </label>
                    <button
                        type="submit"
                        className="mt-2 py-2 bg-blue-600 text-white rounded-md font-semibold text-base hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="py-2 bg-gray-400 text-white rounded-md font-semibold text-base hover:bg-gray-500 transition"
                    >
                        Back
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
