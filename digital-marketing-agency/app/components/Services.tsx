export default function Services() {
  const services = [
    {
      title: "Search Engine Optimization",
      description: "Boost your organic visibility and rank higher on search engines with our proven SEO strategies.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build a strong community across all major social media platforms.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Drive immediate results with targeted PPC campaigns that maximize your ROI.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that convert.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and transparent reporting.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform`}>
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
