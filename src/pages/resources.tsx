import React from 'react';
import Layout from '@/components/Layout';
const Resources = () => (
    <Layout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Legal Resources</h1>
      <ul className="list-disc ml-5 text-gray-700 space-y-2">
        <li><a href="https://legislative.gov.in" target="_blank" className="text-blue-600 underline">Official Indian Legislation Portal</a></li>
        <li><a href="https://indiacode.nic.in" target="_blank" className="text-blue-600 underline">India Code (Central Acts of Parliament)</a></li>
        <li><a href="https://nalsa.gov.in" target="_blank" className="text-blue-600 underline">National Legal Services Authority (NALSA)</a></li>
        <li><a href="https://ecourts.gov.in" target="_blank" className="text-blue-600 underline">eCourts Services</a></li>
        <li><a href="https://barcouncilofindia.org" target="_blank" className="text-blue-600 underline">Bar Council of India</a></li>
      </ul>
    </div>
    </Layout>
  );
  export default Resources;