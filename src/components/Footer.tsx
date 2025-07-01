import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
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
                src="/logo.png"
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
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
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
                  href="mailto:vickypedrosa0@gmail.com"
                  className="text-gray-400 text-sm hover:text-orange-600 transition"
                >
                  vickypedrosa0@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <a
                  href="tel:+916369343481"
                  className="text-gray-400 text-sm hover:text-orange-600 transition"
                >
                  +91 63693 43481
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Codeverse Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
