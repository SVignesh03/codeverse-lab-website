"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Design",
    text: "Crafting visually stunning and user-friendly interfaces that elevate brand identity and user experience.",
    image: "special_services02.svg",
    delay: 0,
  },
  {
    title: "UI Design",
    text: "Designing intuitive, responsive layouts to ensure seamless interaction across all platforms.",
    image: "special_services03.svg",
    delay: 100,
  },
  {
    title: "Web Development",
    text: "Building scalable, performant websites and applications using modern web technologies.",
    image: "special_services04.svg",
    delay: 200,
  },
  {
    title: "Support",
    text: "Providing reliable, ongoing technical support to ensure systems run smoothly and issues are resolved quickly.",
    image: "special_services06.svg",
    delay: 300,
  },
  {
    title: "Automation",
    text: "Streamlining workflows with intelligent automation to boost efficiency and reduce manual effort.",
    image: "special_services01.svg", // reusing this unless you have a separate automation SVG
    delay: 400,
  },
  {
    title: "Data Engineering",
    text: "Designing robust data pipelines and infrastructure to support real-time analytics and decision-making.",
    image: "special_services05.svg", // reusing this unless you have a data-specific SVG
    delay: 500,
  },
];

export default function SpecialServices() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Special Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-md transition hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="relative w-full h-40 mb-4 flex items-center justify-center">
                <Image
                  src={`/assets/img/services/${service.image}`}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2">{service.title}</h5>
                <p className="text-sm text-gray-600">{service.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Mask (optional) */}
        <div className="absolute bottom-0 right-0 opacity-30 pointer-events-none">
          <Image
            src="/assets/img/mask/mask09.svg"
            alt="Mask Icon"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
