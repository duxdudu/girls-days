"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useCalculator } from "@/context/CalculatorContext";
import { useEffect } from 'react';

export default function Page() {
  const { setPageTitle } = useCalculator();

  useEffect(() => {
    setPageTitle('About Us | woomanly.blog');
  }, [setPageTitle]);

  return (
    <main className="flex-1">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-serif font-bold max-w-3xl mx-auto">
          Advancing <span className="text-[#c41d3e]">Woman</span> In Every
          Aspect
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Moving Resources To Expert Women&apos;s Organisations For Impactful
          Change.
        </p>
        <div className="mt-10">
          <Link
            href="/learn-more"
            className="bg-[#8a6bff] text-white px-8 py-3 rounded-full font-medium inline-block"
          >
            See How
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-16 rounded-2xl shadow-lg  bg-pink-50 hover:shadow-xl transition-shadow duration-300 mb-8"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800 border-b-2 border-pink-200 pb-3 inline-block">
            Company Overview
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
            Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
            Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-6 py-16 bg-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800 border-b-2 border-pink-300 pb-3 inline-block">
            Mission And Vision
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
            Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
            Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="px-6 py-16 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800 border-b-2 border-purple-300 pb-3 inline-block">
            Values And Culture
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
            Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
            Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="px-6 py-16 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800 border-b-2 border-pink-200 pb-3 inline-block">
            Testimonials And Success Stories
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
            Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
            Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
