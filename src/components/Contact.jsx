import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for submission logic
        alert("Merci pour votre message. Nous vous contacterons bientôt.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };


    return (
        <section className="py-24 px-[5%] lg:px-[10%] bg-primary relative overflow-hidden" id="contact">

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="font-heading font-bold text-white/80 tracking-[3px] uppercase text-sm mb-4 block">
                        Contactez-nous
                    </span>
                    <h2 className="font-heading text-4xl lg:text-5xl text-white font-bold leading-tight">
                        Nous sommes à votre <span className="text-secondary bg-white px-2">écoute</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <div className="flex-1 space-y-10">
                        <div className="p-8 border border-white/20 bg-white/10 backdrop-blur-md rounded-xl">
                            <h3 className="font-heading text-xl text-white font-bold mb-6">Nos Coordonnées</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-200 font-body mb-1">Email</p>
                                        <a href="mailto:grapheasso@gmail.com" className="text-white font-bold hover:text-accent transition-colors font-body">grapheasso@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-200 font-body mb-1">Téléphone</p>
                                        <p className="text-white font-bold font-body">+228 90 09 43 83 / 98 30 64 09</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-200 font-body mb-1">Adresse</p>
                                        <p className="text-white font-bold font-body">Lomé, Togo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="flex-[1.5]">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-gray-600 font-body font-bold uppercase tracking-wider">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-600 font-body font-bold uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-gray-600 font-body font-bold uppercase tracking-wider">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                    placeholder="L'objet de votre message"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-600 font-body font-bold uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Votre message..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="px-8 py-4 bg-primary text-white font-heading font-bold uppercase tracking-widest hover:bg-green-900 transition-all duration-300 rounded-lg shadow-lg">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
