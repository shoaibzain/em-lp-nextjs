"use client";

import { useState } from 'react';
import CustomCursor from './CustomCursor';

const Footer = ({ title, subtitle, content }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

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
      setStatus({ message: 'Message sent successfully!', isError: false });
      // Reset form
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setServices('');
      setBudget('');
      setMessage('');
    } else {
      setStatus({ message: 'Please fill all required fields. Please try again.', isError: true });
    }
  };

  // Function to handle input focus
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  // Function to handle input blur
  const handleBlur = () => {
    setFocusedField(null);
  };

  // Generate input class based on focus state
  const getInputClass = (fieldName) => `
    p-2 text-white bg-transparent border-b-2 
    ${focusedField === fieldName ? 'border-secondary' : 'border-zinc-600'} 
    placeholder:text-zinc-500 focus:outline-none focus:border-secondary
    transition-all duration-300 ease-in-out
  `;

  return (
    <footer id="contact" className="bg-black pt-36 pb-20 px-0 text-white relative">
      <CustomCursor />
      <div className="lg:flex mx-auto w-full container px-4">
        {/* Left Column - Text */}
        <div className="lg:w-1/2 flex flex-col justify-center px-0 sm:px-5 pb-10 lg:pb-0 lg:pr-20">
          <div className="text-xl mb-5">{subtitle}</div>
          <h2 className="text-5xl font-bold mb-5">{title}</h2>
          <p className="text-gray-400">{content}</p>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 px-0 sm:px-5 text-gray-500">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1 - Name and Company */}
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required 
                  className={getInputClass('name')}
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
                  onFocus={() => handleFocus('company')}
                  onBlur={handleBlur}
                  className={getInputClass('company')}
                />
              </div>
            </div>

            {/* Row 2 - Email and Phone */}
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required 
                  className={getInputClass('email')}
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
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  required 
                  className={getInputClass('phone')}
                />
              </div>
            </div>

            {/* Row 3 - Services and Budget */}
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="services">Services</label>
                <select
                  id="services"
                  name="services"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  onFocus={() => handleFocus('services')}
                  onBlur={handleBlur}
                  required 
                  className={getInputClass('services')}
                >
                  <option value="" className="text-black">Select a service</option>
                  <option value="Branding & Design" className="text-black">Branding & Design</option>
                  <option value="Web Design" className="text-black">Web Design</option>
                  <option value="SEO Services" className="text-black">SEO Services</option>
                  <option value="Social Media Marketing" className="text-black">Social Media Marketing</option>
                  <option value="Google Ads Management" className="text-black">Google Ads Management</option>
                  <option value="Email Marketing" className="text-black">Email Marketing</option>
                  <option value="Full-Suite Marketing" className="text-black">Full-Suite Marketing</option>
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
                  onFocus={() => handleFocus('budget')}
                  onBlur={handleBlur}
                  className={getInputClass('budget')}
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
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                className={getInputClass('message')}
              />
            </div>

            {status && (
              <p className={status.isError ? 'text-red-700' : 'text-green-700'}>
                {status.message}
              </p>
            )}
            
            <button
              type="submit"
              className="bg-transparent hover:bg-transparent text-white py-2 px-4 underline text-left w-40 hover:text-secondary transition-colors cursor-pointer"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
