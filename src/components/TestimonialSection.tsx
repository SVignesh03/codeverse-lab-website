"use client";
import React, { MouseEventHandler } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";

type ArrowProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CustomPrevArrow = ({ onClick }: ArrowProps) => (
  <div
    onClick={onClick}
    className="absolute -bottom-16 left-1/2 transform -translate-x-20 z-10"
  >
    <button className="w-10 h-10 bg-orange-500 text-white rounded-full text-xl shadow hover:bg-orange-600 transition">
      ←
    </button>
  </div>
);

const CustomNextArrow = ({ onClick }: ArrowProps) => (
  <div
    onClick={onClick}
    className="absolute -bottom-16 left-1/2 transform translate-x-20 z-10"
  >
    <button className="w-10 h-10 bg-orange-500 text-white rounded-full text-xl shadow hover:bg-orange-600 transition">
      →
    </button>
  </div>
);

const TestimonialSection: React.FC = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderTestimonial = (item: (typeof testimonials)[0]) => (
    <div className="px-4">
      <div className="p-6 bg-white border border-orange-100 rounded-2xl shadow-sm h-full text-left hover:shadow-md transition">
        <div className="flex items-center mb-4">
          <Image
            src="/assets/img/testimonial/default.png"
            alt="..."
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h4 className="text-lg font-semibold text-orange-900">
              {item.name}
            </h4>
            <p className="text-sm text-orange-500">{item.role}</p>
          </div>
          <div className="ml-auto text-orange-500 font-semibold flex items-center">
            <span className="text-xl mr-1">★</span>({item.rating})
          </div>
        </div>
        <p className="text-orange-900/80 text-sm">{item.message}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-orange-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Every Clients Trust Us
        </h2>
        <p className="text-orange-800/80 mb-12 max-w-3xl mx-auto">
          Some top reviews by the Clients
        </p>

        <div className="relative">
          {testimonials.length < 3 ? (
            <div className="max-w-md mx-auto">
              {renderTestimonial(testimonials[0])}
            </div>
          ) : (
            <Slider {...sliderSettings}>
              {testimonials.map((item, index) => (
                <div key={index}>{renderTestimonial(item)}</div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
