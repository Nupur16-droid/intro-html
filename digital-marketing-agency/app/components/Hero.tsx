export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Digital Presence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your brand with data-driven digital marketing strategies that deliver real results. 
              We help businesses grow through SEO, social media, and targeted advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="#services"
                className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-white text-6xl font-bold mb-4">📈</div>
                <div className="text-white text-2xl font-semibold">Growth Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
