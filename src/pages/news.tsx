import React from 'react';
import Layout from '@/components/Layout';
const News = () => (
    <Layout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Legal News & Updates</h1>
      <ul className="space-y-4 text-gray-700">
        <li>
          <strong>🚨 Supreme Court Upholds Constitutional Validity of GST Tribunal Act (2023)</strong><br />
          The Supreme Court has reaffirmed the powers and structure of the GST Appellate Tribunal.
        </li>
        <li>
          <strong>📢 Digital India Act Draft Released</strong><br />
          The Ministry of Electronics and IT unveils the new Digital India Act aiming to replace the IT Act, 2000.
        </li>
        <li>
          <strong>⚖️ High Court Emphasizes Speedy Justice in PILs</strong><br />
          Courts stress timely disposal of Public Interest Litigations (PILs) to uphold Article 21.
        </li>
      </ul>
  
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">External Legal News & Analysis</h2>
        <p className="text-blue-600 underline">
          <a href="https://www.indialaw.in/blog/" target="_blank" rel="noopener noreferrer">
            Visit IndiaLaw's Legal Blog for In-depth Articles
          </a>
        </p>
      </div>
    </div>
    </Layout>
  );
  export default News;