import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dau24dmlo/image/upload/v1781356851/Untitled_design_2_ezhdne.png"
                alt="Codeverse Lab Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-orange-500"
              />
              <span className="text-xl font-bold">Codeverse Lab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing your ideas to life through thoughtful strategy, design,
              and development—crafted with care, from start to finish.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://www.youtube.com/@codeverselab"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/codeverse-lab/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/codeverse_lab"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://jsdl.in/DT-202X1WAN4MG"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Justdial"
              >
                <Image
                  src="https://res.cloudinary.com/dau24dmlo/image/upload/v1781355856/justdial-jd-logo-01_rimmyx.png"
                  alt="Justdial"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Design",
                "UI/UX Design",
                "Web Development",
                "Mobile Apps",
                "E-commerce",
                "SEO & Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <a
                  href="mailto:support@codeverselab.com"
                  className="text-gray-400 text-sm hover:text-orange-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support@codeverselab.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <a
                  href="tel:+916369343481"
                  className="text-gray-400 text-sm hover:text-orange-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 63693 43481
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4 fill-current text-orange-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.91 0c3.152.001 6.116 1.23 8.344 3.463 2.23 2.231 3.456 5.197 3.455 8.353-.003 6.56-5.339 11.907-11.849 11.907-2.012-.001-3.992-.513-5.744-1.487L0 24zm5.835-4.267l.37.22c1.554.922 3.39 1.41 5.27 1.412 5.399 0 9.792-4.393 9.795-9.794.002-2.617-1.018-5.078-2.873-6.935C16.58 2.78 14.12 1.76 11.5 1.76c-5.4 0-9.794 4.393-9.796 9.795-.001 1.957.513 3.865 1.488 5.56l.24.417-1.01 3.69 3.774-.99.42-.249zm12.35-5.908c-.329-.165-1.953-.965-2.251-1.074-.3-.11-.518-.165-.736.165-.218.33-.846 1.074-1.037 1.293-.191.218-.383.245-.712.08-1.548-.773-2.554-1.353-3.574-3.104-.266-.457.266-.425.762-1.418.083-.165.042-.31-.02-.444-.064-.135-.518-1.25-.71-1.71-.187-.45-.377-.389-.517-.396l-.44-.007c-.153 0-.4-.058-.61.173-.21.23-.803.784-.803 1.913 0 1.128.82 2.218.934 2.371.114.153 1.614 2.463 3.91 3.455.547.235.973.375 1.306.481.55.174 1.05.15 1.446.09.44-.067 1.953-.797 2.228-1.53.275-.733.275-1.363.192-1.493-.083-.131-.3-.211-.63-.376z" />
                </svg>
                <a
                  href="https://wa.me/+919677902003?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services."
                  className="text-gray-400 text-sm hover:text-orange-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 96779 02003
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400 text-sm">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Codeverse Lab. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1 text-center md:text-left">
                Govt. Recognized MSME | Udyam Reg No: UDYAM-TN-18-0101857
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
