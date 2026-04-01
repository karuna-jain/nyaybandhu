// src/pages/about/History.tsx
import React from 'react';
import Layout from '@/components/Layout';

const History = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">History of the Department</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
              <img
                src="https://dbmcrj.ac.in/media/media/departments/img/Department_of-History.jpg"
                alt="Historical Image"
                className="mx-auto h-48 object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                The Department of Justice has a rich and impactful history. Established in the early days of India's independence, it has continuously worked to ensure justice delivery across the country.
              </p>
              <p className="mb-4">
                In its initial years, the department focused on shaping India's legal infrastructure and ensuring that the newly formed Constitution was followed diligently across the courts.
              </p>
              <p className="mb-4">
                Over the decades, the department has played a vital role in judicial reforms, ensuring access to justice for all, and overseeing the establishment of laws that shape the country’s legal landscape.
              </p>
              <p>
                The department also pioneered several initiatives to digitize the judiciary, making justice more accessible through eCourts and other projects. It remains committed to its mission of ensuring justice for every citizen.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Milestones</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Foundation of the Department post-independence in 1947.</li>
              <li>Establishment of legal services authorities for marginalized communities.</li>
              <li>Launch of National Legal Services Authority in 1987.</li>
              <li>Introduction of judicial reforms, including the computerization of courts in the 1990s.</li>
              <li>Implementation of the eCourts project for court digitization.</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Key Events</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Launch of the NYAYBANDHU legal assistance portal.</li>
              <li>Implementation of the National Judicial Data Grid (NJDG) for case monitoring.</li>
              <li>Strengthening the legal framework through various reforms in the judiciary.</li>
              <li>Expansion of legal aid to ensure access to justice for all citizens.</li>
              <li>Setting up of the Legal Services Authorities at both national and state levels.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
