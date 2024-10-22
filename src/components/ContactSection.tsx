import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Have questions or feedback? We'd love to hear from you. Reach out to us using the contact information below.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <Phone size={20} className="mr-3 text-indigo-600" />
                    <span>+91 7661081043</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Mail size={20} className="mr-3 text-indigo-600" />
                    <a href="mailto:aicraftalchemy@gmail.com" className="hover:text-indigo-600">aicraftalchemy@gmail.com</a>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <MapPin size={20} className="mr-3 text-indigo-600" />
                    <span>Avasaram Headquarters, Tech Hub, Bangalore, India</span>
                  </li>
                </ul>
              </div>
              <div>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;