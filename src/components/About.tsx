const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-800">
                Turning Ideas Into Digital Reality
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Work Wizards Innovations, we are a next-gen tech startup dedicated to providing innovative digital solutions that empower businesses and professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans custom web development, mobile app creation, ongoing technical support, and launching our own branded digital platforms that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4 animate-slide-up">
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Our Mission</h4>
                <p className="text-muted-foreground">
                  To deliver cutting-edge digital solutions that drive innovation, efficiency, and growth for our clients and users.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be the leading force in digital transformation, creating products and services that shape the future of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
