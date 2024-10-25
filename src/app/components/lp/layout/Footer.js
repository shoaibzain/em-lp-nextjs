"use client";

import { useState } from 'react';

const Footer = ({ title, subtitle, content }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: '',
    budget: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.services) newErrors.services = "Service selection is required.";
    if (!formData.budget) newErrors.budget = "Budget is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Example API call to Brevo (Sendinblue) can go here
    // If successful:
    setSuccessMessage("Form submitted successfully!");
    setErrorMessage("");
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      services: '',
      budget: '',
      message: '',
    });
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
          {/* Success & Error Messages */}
          {successMessage && <div role="alert" className="text-green-500 mb-4">{successMessage}</div>}
          {Object.values(errors).length > 0 && <div role="alert" className="text-red-500 mb-4">Please fix the highlighted errors</div>}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Row 1 - Name and Company */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
                {errors.name && (
                  <span className=" text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
                {errors.company && (
                  <span className=" text-red-500 text-sm">{errors.company}</span>
                )}
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
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
                {errors.email && (
                  <span className=" text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
                {errors.phone && (
                  <span className=" text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Row 3 - Services and Budget */}
            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="services">Services</label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
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
                {errors.services && (
                  <span className=" text-red-500 text-sm">{errors.services}</span>
                )}
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-sm mb-1 text-white" htmlFor="budget">Budget</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700"
                />
                {errors.budget && (
                  <span className=" text-red-500 text-sm">{errors.budget}</span>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-white" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Details of services you require...."
                value={formData.message}
                onChange={handleChange}
                className="p-2 text-white bg-transparent border-b-2 border-zinc-600 placeholder:text-zinc-500 focus:outline-none focus:border-pink-700 h-24"
              />
            </div>

            <button
              type="submit"
              className="bg-transparent hover:bg-transparent text-white py-2 px-4 underline text-left w-40 hover:text-pink-700 transition-colors"
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
