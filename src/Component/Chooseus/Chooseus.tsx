/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const Chooseus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data array for the carousel items
  const carouselItems = [
    {
      title: "Best Prices",
      description:
        "We offer competitive pricing on all our products, ensuring you get the best value for your money.",
      iconColor: "bg-blue-100",
      iconPath:
        "M12 8c-2.21 0-4 1.79-4 4m8 0c0 2.21-1.79 4-4 4m-4-4c0-2.21 1.79-4 4-4m0 0c2.21 0 4 1.79 4 4m-4-4v-2m0 14v-2",
      iconStrokeColor: "text-blue-600",
    },
    {
      title: "Wide Selection",
      description:
        "Choose from a broad range of products, carefully curated to meet your needs.",
      iconColor: "bg-green-100",
      iconPath:
        "M20 21V7a2 2 0 00-2-2h-4l-3-3H6a2 2 0 00-2 2v16 M16 10a4 4 0 01-8 0m4 4v6m4-10h.01",
      iconStrokeColor: "text-green-600",
    },
    {
      title: "Excellent Customer Service",
      description:
        "Our team is dedicated to providing you with the best possible shopping experience.",
      iconColor: "bg-red-100",
      iconPath: "M4 8h16v2H4zM4 16h16v2H4z M12 12h8m0 0l-4-4m4 4l-4 4",
      iconStrokeColor: "text-red-600",
    },
    {
      title: "Fast Shipping",
      description:
        "We ensure your products are delivered to you as quickly as possible.",
      iconColor: "bg-yellow-100",
      iconPath:
        "M3 3h18M9 13l-3 3m0 0l3 3m-3-3h12m-9 0V3M12 21V3m6 0v18m0 0l-3-3m3 3l3-3",
      iconStrokeColor: "text-yellow-600",
    },
    // Add more items if needed
  ];

  // Number of items to show at once
  const itemsToShow = 3;

  // Calculate the indices of items to show
  const visibleItems = carouselItems.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  // Function to handle navigation
  const navigate = (direction: any) => {
    if (direction === "prev") {
      setCurrentIndex(
        currentIndex === 0
          ? carouselItems.length - itemsToShow
          : currentIndex - 1
      );
    } else {
      setCurrentIndex(
        currentIndex + itemsToShow >= carouselItems.length
          ? 0
          : currentIndex + 1
      );
    }
  };

  return (
    <div>
      <section className="pt-16">
        <div className="mx-auto px-6 text-center">
          <h2 className="text-4xl italic font-bold text-[#00A2E2] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-[#00A2E2] mb-12">
            Discover the reasons why our customers love shopping with us.
          </p>

          <div className="relative">
            <div className="flex justify-center items-center">
              <button
                onClick={() => navigate("prev")}
                className="absolute left-0 text-white bg-[#00A2E2] hover:bg-blue-600 px-4 py-2 rounded-full"
              >
                &#8592; {/* Left Arrow */}
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {visibleItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white py-6 px-12 rounded-lg shadow-lg w-full max-w-sm"
                  >
                    <div
                      className={`flex items-center justify-center w-16 h-16 ${item.iconColor} rounded-full mx-auto mb-4`}
                    >
                      <svg
                        className={`w-8 h-8 ${item.iconStrokeColor}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.iconPath}
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("next")}
                className="absolute right-0 text-white bg-[#00A2E2] hover:bg-blue-600 px-4 py-2 rounded-full"
              >
                &#8594; {/* Right Arrow */}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chooseus;
