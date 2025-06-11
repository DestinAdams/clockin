'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setErrorMsg('');

        emailjs
            .sendForm('service_nx5uosp', 'template_7hm4dvr', form.current, {
                publicKey: 'UT4aP9Zlamoku6BqS',
            })
            .then(() => {
                setSuccess('Your message has been sent successfully!');
                form.current.reset();
            })
            .catch((error) => {
                console.error('FAILED...', error.text);
                setErrorMsg('Failed to send message. Please try again.');
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className=" w-3xl p-6 bg-white shadow-lg rounded-2xl mt-10 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${loading && 'opacity-50 cursor-not-allowed'
                            }`}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                {success && (
                    <p className="text-green-600 text-center mt-2 font-medium">{success}</p>
                )}
                {errorMsg && (
                    <p className="text-red-600 text-center mt-2 font-medium">{errorMsg}</p>
                )}
            </form>
        </div>
    );
};
