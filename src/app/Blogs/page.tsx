"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BlogsPage() {
  const pathname = usePathname();
  const blogs = [
    { id:1,
      date: "MAR 24, 2025",
      title: "The Art of Self-Care: A Guide for Modern Women",
      image: "/blog1.png",
      content:
        "Discover essential self-care practices that every modern woman should incorporate into their daily routine for better mental and physical well-being.",
    },
    { id:2,
      date: "MAR 22, 2025",
      title: "Career Growth Strategies for Women in Tech",
      image: "/blog1.png",
      content:
        "Explore effective strategies and insights for women looking to advance their careers in the technology industry while overcoming common challenges.",
    },
      {id:3,
      date: "MAR 20, 2025",
      title: "Financial Independence: Smart Money Tips for Women",
      image: "/blog1.png",
      content:
        "Learn practical financial advice and investment strategies specifically tailored for women who want to achieve and maintain financial independence.",
    },
  ];
  useEffect(() => {
    if (window.location.hash === "#blog-list") {
      const element = document.getElementById("blog-list");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <section className="container mx-auto px-6 py-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Girlie Blog</h2>

      <Link
        href="/Blogs/how-a-typical-vacation-of-a-single-girl-should-look-like"
        className="block mb-12 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:bg-pink-50 rounded-lg p-4"
      >
        <div>
          <div className="text-gray-500 mb-2">MAR 24, 2025</div>
          <h3 className="text-xl font-bold mb-4">
            How A Typical Vacation Of A Single Girl Should Look Like!
          </h3>
          <div className="bg-pink-100 rounded-lg overflow-hidden mb-4 w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[447px]">
            <Image
              src="/blog1.png"
              alt="Girl relaxing on a bean bag"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
          <p className="text-gray-700">
            We are able to provide these needs through the donations of
            individuals like you, able to provide these needs through the
            donations of individuals lable to provide these needs through the
            donations of individuals...
          </p>
        </div>
      </Link>

      <div className="space-y-8" id="blog-list">
        {blogs.map((blog, index) => (
          <Link
            href={`/Blogs/${blog.id}`}
            key={blog.title}
            className="hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] flex flex-col md:flex-row gap-4 md:gap-6 cursor-pointer hover:bg-gray-200 rounded-xl p-3 sm:p-4 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="md:w-1/4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={350}
                height={90}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/4">
              <div className="text-gray-500 mb-1">{blog.date}</div>
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-700">{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
