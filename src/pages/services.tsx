import React from 'react';
import Layout from '@/components/Layout';

const Services = () => (
  <Layout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Legal Services</h1>
      <ul className="list-disc ml-5 text-gray-700 space-y-2">
        <li>Free Legal Aid for the underprivileged</li>
        <li>Online Consultation & Advice</li>
        <li>Legal Literacy & Awareness Programs</li>
        <li>Latest Legal News and Updates</li>
        <li>Access to Legal Documents and Forms</li>
      </ul>
    </div>
  </Layout>
);

export default Services;
