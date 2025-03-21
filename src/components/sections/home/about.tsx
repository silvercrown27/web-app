const About = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About WorkFlo</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            WorkFlo is an intuitive and powerful workflow management solution designed to simplify your daily operations. 
            Our platform offers a seamless experience with features that help you track tasks, manage projects, and boost 
            productivity. Whether you’re working individually or with a team, WorkFlo adapts to your needs to deliver 
            optimal performance.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-semibold transition duration-300 hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  