import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = ({ backgroundClassName = "bg-green-50" }) => {
  const services = [
    {
      id: "landscape-design",
      title: "Landscape Design",
      description:
        "Professional landscape design services tailored to your style and space requirements.",
      imagePath: "/images/services/landscape-design.jpg",
    },
    {
      id: "garden-installation",
      title: "Garden Installation",
      description:
        "Expert installation of plants, hardscapes, and garden features with attention to detail.",
      imagePath: "/images/services/garden-installation.jpg",
    },
    {
      id: "lawn-care",
      title: "Lawn Care & Maintenance",
      description:
        "Regular maintenance services to keep your garden looking beautiful year-round.",
      imagePath: "/images/services/lawn-care.jpg",
    },
  ];

  return (
    <section
      className={`${backgroundClassName} py-40 relative overflow-hidden`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 mb-16">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Garden landscaping{" "}
              <span className="font-light text-green-700">services for every need</span>
            </h2>
          </div>

          <div className="w-full">
            <p className="text-gray-700 text-lg">
              Enhance your outdoor space with our professional garden
              landscaping services, customized to suit every need and
              preference. From design to installation, we create beautiful,
              functional gardens that reflect your style.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl overflow-hidden bg-green-900 transition-transform hover:scale-[1.02] duration-300 cursor-pointer"
            >
              <div className="relative h-72 w-full bg-green-800 flex items-center justify-center text-green-700 text-lg font-medium" style={{
                backgroundImage: `url("https://www.bhg.com/thmb/0O-WkgNsA-OQjugI6ISOOZ7ioY4=/1244x0/filters:no_upscale():strip_icc()/paperbark-maple-1ef9c3eb-27e89387cea048a3a9360fabc3fd412c.jpg")`,
                backgroundSize: 'cover'
              }}>
              </div>

              <div className="p-6 !z-10">
                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <div className="h-0.5 w-8 bg-green-600 mb-4"></div>
                <p className="text-gray-300 hidden">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
