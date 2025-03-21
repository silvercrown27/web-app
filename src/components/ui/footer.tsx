const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} WorkFlo. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="/privacy" className="text-gray-400 hover:text-gray-100 transition duration-300">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-100 transition duration-300">Terms of Service</a>
            <a href="/contact" className="text-gray-400 hover:text-gray-100 transition duration-300">Contact Us</a>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500">Crafted with ❤️ by the WorkFlo Team</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  