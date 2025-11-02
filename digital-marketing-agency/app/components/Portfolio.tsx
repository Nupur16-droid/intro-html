export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Growth",
      category: "SEO & PPC",
      result: "300% Revenue Increase",
      description: "Transformed an online retailer's digital presence with comprehensive SEO and targeted PPC campaigns.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Brand Awareness Campaign",
      category: "Social Media",
      result: "2M+ Impressions",
      description: "Built a thriving social media community that generated massive brand awareness and engagement.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Lead Generation",
      category: "Content Marketing",
      result: "500+ Qualified Leads",
      description: "Created a content strategy that attracted and converted high-quality leads consistently.",
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Local Business Domination",
      category: "Local SEO",
      result: "#1 Local Rankings",
      description: "Helped a local business dominate their market with strategic local SEO optimization.",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped our clients achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white/80 text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-white text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <div className={`inline-block bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent text-xl font-bold mb-4`}>
                  {project.result}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
