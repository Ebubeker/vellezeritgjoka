import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

const Info = ({
  yearsExperience = 58,
  founderName = "Arlene McCoy",
  founderTitle = "CEO & Founder",
}) => {
  return (
    <section className="bg-white py-40 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="relative w-full lg:w-1/2 flex justify-end mt-[100px]">
            <div className="relative">
              <div className="relative w-fit h-fit">
                <div
                  className="absolute z-10 -top-[100px] -left-[150px] w-[320px] h-[192px] bg-green-900 rounded-full flex items-center justify-center border-[10px] border-white text-green-800/60 text-sm"
                  style={{
                    backgroundImage: `url("https://www.stewarts.co.uk/files/images/news/10-shade-loving-plants-1000x667-62e7e50f30adf_n.jpg")`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="absolute z-10 -top-[50px] right-0 text-3xl font-semibold text-green-500">
                  +150 Clients
                </p>
                <div
                  className="bg-green-900 rounded-[180px] overflow-hidden h-96 md:h-[500px] w-[374px] max-w-md mx-auto lg:mr-0"
                  style={{
                    backgroundImage: `url("https://www.provenwinners.com/sites/provenwinners.com/files/2019/articles/hosta_empress_06.jpg")`,
                    backgroundSize: "cover",
                  }}
                >
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Sowing dreams,{" "}
              <span className="text-green-700 font-normal">
                growing landscapes
              </span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              We transform your landscaping dreams into reality, crafting
              beautiful, tranquil outdoor spaces that reflect your vision and
              enhance your lifestyle. Let us grow beauty and joy in every
              garden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  We Are Experience Gardening
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  We Are Experience Gardening
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">We Adapt Your Need</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">We Adapt Your Need</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-4 bg-gray-50 rounded-lg">
                <div className="h-14 w-14 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Call Us Any Time</div>
                  <div className="font-semibold text-gray-900">
                    (+01) 789 987 645
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
