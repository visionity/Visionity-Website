// import Image from "next/image";
import Image from "next/image";
const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? "bg-[#000000] text-white" : "bg-gray-100 text-[#161616]"}`}>
      <div className="container mx-auto px-4">
        {/* Main footer content - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
            <div className="h-10 w-10 relative mr-2">
  <Image
    src={darkMode ? "/images/darklogo.png" : "/images/lightlogo.png"}
    alt="Profile"
    layout="fill"
    objectFit="cover"
  />
</div>;

              <span className="text-xl font-bold">Visionity</span>
            </div>
            <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Leveraging cutting-edge AI to transform business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Solutions', 'About Us', 'Contact', 'Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Our Solutions</h3>
            <ul className="space-y-2">
              {['Computer Vision', 'NLP', 'Predictive Analytics', 'AI Automation'].map((solution) => (
                <li key={solution}>
                  <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>{solution}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>info@visionity.com</p>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>+123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
