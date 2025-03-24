const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-12">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} WorkFlo. All rights reserved.</p>
                <div className="flex flex-column justify-center space-y-8 mt-4">
                    <a href="/privacy" className="text-gray-400 hover:text-gray-100 transtion duration-400"> Privacy Policy</a>
                    <a href="/terms-and-conditions" className="text-gray-400 hover:text-gray-100 transtion duration-400">Terms of Service</a>
                    <a href="/contact-us" className="text-gray-400 hover:text-gray-100 transtion duration-400">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;