const VisionMission = () => (
  <div className="p-8 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl">
    <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-12">
      Our Vision & Mission
    </h1>

    <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <img
        src="https://img.freepik.com/premium-photo/business-man-holding-vision-virtual-screens_218381-7031.jpg?semt=ais_hybrid&w=740"
        alt="Vision Illustration"
        className="w-full md:w-1/2"
      />
      <div>
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
          🕊️ Vision
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          To build a future where every individual—regardless of background or circumstance—can access justice effortlessly.
          Our AI-driven legal assistant strives to bridge the gap between citizens and the legal system, guided by the enduring
          principles of the Indian Constitution: <span className="font-semibold">justice, liberty, equality</span>, and <span className="font-semibold">fraternity</span>.
        </p>
      </div>
    </section>

    <section className="flex flex-col-reverse md:flex-row items-center gap-8">
      <div>
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
          🎯 Mission
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Our mission is to empower individuals by simplifying legal processes through smart, accessible technology.
          We aim to raise legal awareness, enhance access to justice, and support citizens in navigating their rights—
          staying true to the values of the Preamble and the Directive Principles of State Policy.
        </p>
      </div>
      <img
        src="https://img.freepik.com/premium-photo/man-touching-mission-text-screen_218381-4228.jpg?semt=ais_hybrid&w=740"
        alt="Mission Illustration"
        className="w-full md:w-1/2"
      />
    </section>
  </div>
);

export default VisionMission;
