"use client";

import { useState } from 'react';

const Footer = ({ title, subtitle, content }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, company, email, phone, services, budget, message }),
    });

    const data = await response.json();
    if (data.success) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('Error sending message. Please try again.');
    }

    // Reset the form
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setServices('');
    setBudget('');
    setMessage('');
  };
  return (
    <footer id="contact" className="bg-black py-10 px-4 sm:px-0 lg:px-0 text-white">
      <div className="flex mx-auto w-full container px-4">
        {/* Left Column - Text */}
        <div className="w-1/2 flex flex-col justify-center px-5 pr-20">
          <h4 className="text-xl mb-5">{subtitle}</h4>
          <h2 className="text-5xl font-bold mb-5">{title}</h2>
          <p className="text-zinc-600">{content}</p>
        </div>

        {/* Right Column - Form */}
        <div className="w-1/2 px-5 text-gray-500">

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1 - Name and Company */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
              </div>
            </div>

            {/* Row 2 - Email and Phone */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
              </div>
            </div>

            {/* Row 3 - Services and Budget */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="services">Services</label>
                <select
                  id="services"
                  name="services"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  className="p-3  bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                >
                  <option value="Branding & Design">Branding & Design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Google Ads Management">Google Ads Management</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Full-Suite Marketing">Full-Suite Marketing</option>
                </select>
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="budget">Budget</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-white" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Details of services you require...."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700 h-24"
              />
            </div>

            <button
              type="submit"
              className="bg-transparent hover:bg-transparent text-white py-2 px-4 underline text-left w-40 hover:text-pink-700 transition-colors"
            >
              Submit Enquiry
            </button>
            {status && <p>{status}</p>}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
