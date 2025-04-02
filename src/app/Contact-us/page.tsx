"use client";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Image  from "next/image";
import { useState } from "react";



export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <main className="relative">
        <section className="container mx-auto px-4 py-8 relative">
          <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-14 -mb-24 mt-3">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                We are thrilled to maximizing our participation in supporting
                women wellness.
              </p>
            </div>

            <div className="md:w-2/3 gap-6 relative">
              <div className="hidden md:block absolute -top-10 -right-10 w-32 h-32 mr-40 bg-red-700 rounded-full z-0"></div>
              <div className="bg-white p-4 md:p-8 w-full md:w-[600px] rounded-lg shadow-md z-10 relative mx-auto md:ml-40">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
                  Need To Connect With Us?
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Names..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-violet-400 text-white py-3 rounded-lg hover:bg-violet-500 transition text-base md:text-lg"
                    suppressHydrationWarning
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        
        <section className="bg-gradient-to-br from-red-800 to-red-900 py-12 md:py-20 relative overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="relative w-full md:max-w-2xl mb-8 md:mb-0">
              <Image
                src="/person1.png"
                alt="Woman meditating illustration"
                width={456}
                height={456}
                className="w-full h-auto md:w-[456px] object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="hidden md:block absolute -top-4 md:-top-10 -right-4 md:-right-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-80"></div>
          <div className="hidden md:block absolute -top-8 md:-top-20 -left-8 md:-left-20 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-80"></div>
        </section>

        
        <section className="bg-pink-50 py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">
              Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50 flex items-start gap-6">
                <div className="text-red-800 text-4xl group-hover:text-red-900">
                  <MapPin size={40} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-lg mb-2">Location</h3>
                  <p className="text-gray-700">
                    337 Sun Valley Road,
                    <br />
                    Spokane, WA
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50 flex items-start gap-6">
                <div className="text-red-800 text-4xl group-hover:text-red-900">
                  <Phone size={40} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-lg mb-2">Phone</h3>
                  <p className="text-gray-700">+ 250 787 790 001</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50 flex items-start gap-6">
                <div className="text-red-800 text-4xl group-hover:text-red-900">
                  <Mail size={40} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-lg mb-2">Email</h3>
                  <p className="text-gray-700">support@girly.com</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-50 flex items-start gap-6">
                <div className="text-red-800 text-4xl group-hover:text-red-900">
                  <MessageSquare size={40} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-lg mb-2">
                    Simple and easy from
                  </h3>
                  <p className="text-gray-700">Live Chat</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
