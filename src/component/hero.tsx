"use client";
import Image from "next/image";

import { Calculator } from "./calculate";
import { useCalculator } from "../context/CalculatorContext";
import { useState } from "react";

export default function Hero() {
  const blogs = [
    {
      date: "MAR 24, 2025",
      title: "How to Build a Successful Career in Tech as a Woman",
      image: "/blog1.png",
      description:
        "Discover proven strategies and insights from successful women in technology. Learn how to overcome challenges, build your network, and advance your career in the tech industry.",
    },
    {
      date: "MAR 22, 2025",
      title: "Self-Care Tips for the Modern Woman",
      image: "/blog1.png",
      description:
        "Explore essential self-care practices that help maintain work-life balance. From mindfulness techniques to practical wellness routines, find what works best for your lifestyle.",
    },
    {
      date: "MAR 20, 2025",
      title: "Financial Independence: A Guide for Women",
      image: "/blog1.png",
      description:
        "Take control of your financial future with this comprehensive guide. Learn about investing, budgeting, and building long-term wealth while avoiding common financial pitfalls.",
    },
  ];
  const { showCalculator, setShowCalculator } = useCalculator();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="w-full md:max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Best <span className="text-pink-600">Girlish-Website</span> I Wish
            You Would Know!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Filled with plenty of information and tools, Girly is the platform
            where you can find every details useful to women and girls.
          </p>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="w-full sm:w-auto bg-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors inline-block"
          >
            Calculator
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto lg:max-w-md mt-8 md:mt-0">
          <Image
            src="/girl.png"
            alt="Girl illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {showCalculator && (
        <div
          id="calculator"
          className="mt-8 sm:mt-12 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
        >
          <Calculator />
        </div>
      )}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Girlie Blog</h2>

        {/* Featured Blog Post */}
        <div className="mb-8 sm:mb-12">
          <div className="text-gray-500 mb-2">{blogs[0].date}</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {blogs[0].title}
          </h3>
          <div className="bg-pink-100 rounded-lg overflow-hidden mb-4 w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[447px]">
            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="text-gray-700 text-base sm:text-lg">
            {blogs[0].description}
          </p>
        </div>

        {/* <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {blogs.slice(1).map((post, index) => {
            return (
              <div key={index}>
                <div
                  className="flex flex-col md:flex-row gap-4 md:gap-6 cursor-pointer hover:bg-gray-200 rounded-xl p-3 sm:p-4"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <div className="w-full md:w-2/5 h-[200px] sm:h-[250px] md:h-[200px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-full md:w-3/5">
                    <div className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-2">{post.date}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{post.title}</h3>
                    <p className="text-gray-700 text-base sm:text-lg line-clamp-3">{post.description}</p>
                  </div>
                </div>

                {isDialogOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="p-4 sm:p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="pr-8">
                            <p className="text-gray-500 text-sm sm:text-base">{post.date}</p>
                            <h2 className="text-xl sm:text-2xl font-bold mt-2">
                              {post.title}
                            </h2>
                          </div>
                          <button
                            onClick={() => setIsDialogOpen(false)}
                            className="text-gray-500 hover:text-gray-700 p-1"
                          >
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="mb-6">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {post.description}
                          </p>
                          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div> */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {blogs.map((post, index) => {
            return (
              <div key={index}>
                <div
                  className="flex flex-col md:flex-row gap-4 md:gap-6 cursor-pointer hover:bg-gray-200 rounded-xl p-3 sm:p-4"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <div className="w-full md:w-2/5 h-[200px] sm:h-[250px] md:h-[200px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-full md:w-3/5">
                    <div className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-2">{post.date}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{post.title}</h3>
                    <p className="text-gray-700 text-base sm:text-lg line-clamp-3">{post.description}</p>
                  </div>
                </div>

                {isDialogOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                      <div className="p-4 sm:p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="pr-8">
                            <p className="text-gray-500 text-sm sm:text-base">{post.date}</p>
                            <h2 className="text-xl sm:text-2xl font-bold mt-2">
                              {post.title}
                            </h2>
                          </div>
                          <button
                            onClick={() => setIsDialogOpen(false)}
                            className="text-gray-500 hover:text-gray-700 p-1"
                          >
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="mb-6">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {post.description}
                          </p>
                          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
