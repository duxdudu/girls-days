import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  date: string;
  title: string;
  image: string;
  content: string;
};

type BlogPosts = {
  [key: string]: BlogPost;
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  const blogPosts: BlogPosts = {
    "1": {
      date: "MAR 24, 2025",
      title: "How A Typical Vacation Of A Single Girl Should Look Like!",
      image: "/blog1.png",
      content:
        "We are able to provide these needs through the donations of individuals like you, able to provide these needs through the donations of individuals lable to provide these needs through the donations of individuals...",
    },
    "2": {
      date: "MAR 24, 2025",
      title: "The Art of Self-Care: A Guide for Modern Women",
      image: "/blog1.png",
      content:
        "Discover essential self-care practices that every modern woman should incorporate into their daily routine for better mental and physical well-being.",
    },
    "3": {
      date: "MAR 22, 2025",
      title: "Career Growth Strategies for Women in Tech",
      image: "/blog1.png",
      content:
        "Explore effective strategies and insights for women looking to advance their careers in the technology industry while overcoming common challenges.",
    },
    "4": {
      date: "MAR 20, 2025",
      title: "Financial Independence: Smart Money Tips for Women",
      image: "/blog1.png",
      content:
        "Learn practical financial advice and investment strategies specifically tailored for women who want to achieve and maintain financial independence.",
    },
  };

  // Get the blog post based on the slug from params
  const blogPost = slug ? blogPosts[slug] : null;

  // Handle case where blog post is not found
  if (!blogPost) {
    return (
      <div className="container mx-auto px-6 py-16 min-h-screen">
        <div className="max-w-3xl mx-auto space-y-8">
          <Link
            href="/Blogs"
            className="inline-flex items-center px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white border-2 border-pink-500 text-pink-600 mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blogs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Blog Post Not Found
          </h1>
          <p className="text-gray-700 text-lg">
            Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-6 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/Blogs"
          className="inline-flex items-center px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white border-2 border-pink-500 text-pink-600 mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blogs
        </Link>
        <div className="text-gray-500 text-sm font-medium tracking-wider">
          {blogPost.date}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {blogPost.title}
        </h1>
        <div className="bg-pink-100 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="prose prose-lg max-w-none">
          {blogPost.content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 text-lg leading-relaxed mb-6 first-letter:text-3xl first-letter:font-bold first-letter:text-pink-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
