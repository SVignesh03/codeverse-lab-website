"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mark Parker",
    image: "/assets/img/testimonial/ellipse1.png",
    role: "Envato Customer",
    rating: 4.8,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque arcu, at porttitor lacus. Integer iaculis quis magna a aliquam. Vestibulum iaculis.",
  },
  {
    name: "Mark Parker",
    image: "/assets/img/testimonial/ellipse2.png",
    role: "Envato Customer",
    rating: 4.8,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque arcu, at porttitor lacus. Integer iaculis quis magna a aliquam. Vestibulum iaculis.",
  },
  {
    name: "Mark Parker",
    image: "/assets/img/testimonial/ellipse3.png",
    role: "Envato Customer",
    rating: 4.8,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque arcu, at porttitor lacus. Integer iaculis quis magna a aliquam. Vestibulum iaculis.",
  },
  {
    name: "Mark Parker",
    image: "/assets/img/testimonial/ellipse1.png",
    role: "Envato Customer",
    rating: 4.8,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque arcu, at porttitor lacus. Integer iaculis quis magna a aliquam. Vestibulum iaculis.",
  },
];

const CustomPrevArrow = ({ onClick }: any) => (
  <div
    onClick={onClick}
    className="absolute -bottom-16 left-1/2 transform -translate-x-20 z-10"
  >
    <button className="w-10 h-10 bg-[#FF4C60] text-white rounded-full text-xl">
      ←
    </button>
  </div>
);

const CustomNextArrow = ({ onClick }: any) => (
  <div
    onClick={onClick}
    className="absolute -bottom-16 left-1/2 transform translate-x-20 z-10"
  >
    <button className="w-10 h-10 bg-[#FF4C60] text-white rounded-full text-xl">
      →
    </button>
  </div>
);

const TestimonialSection: React.FC = () => {
  const settings = {
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

  return (
    <section className="py-16 bg-[#fff5f6] text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1d0e41] mb-4">
          Thousands Of Clients Trust Us
        </h2>
        <p className="text-[#6f6f87] mb-12 max-w-3xl mx-auto">
          Sed sit amet suscipit diam, vel iaculis nunc. Mauris interdum
          sollicitudin ex. Sed sit amet felis id dolor blandit pellentesque.
          Praesent varius euismod velit, non tincidunt lacus.
        </p>

        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4">
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md h-full text-left">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-[#1d0e41]">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                    <div className="ml-auto text-[#FF4C60] font-semibold flex items-center">
                      <span className="text-xl mr-1">★</span>({item.rating})
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{item.message}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
