export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About DigiBoost
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're a team of passionate digital marketing experts dedicated to helping businesses 
              thrive in the digital landscape. With over a decade of experience, we've mastered 
              the art of creating strategies that drive real, measurable results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach combines creativity with data-driven insights to deliver campaigns 
              that not only look great but perform exceptionally. We believe in transparency, 
              collaboration, and most importantly, your success.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Partner With Us
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-blue-200 transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
