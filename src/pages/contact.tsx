import React from 'react';
import Layout from '@/components/Layout';
const ContactUs = () => (
    <Layout>
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">Feel free to reach out for any inquiries, feedback, or assistance related to legal services or the Constitution of India.</p>
  
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Name" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Email" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded" rows={4} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
    </Layout>
  );
  export default ContactUs;