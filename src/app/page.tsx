import Link from "next/link";

type Post = {
  id: number;
  title: string;
  slug: string;
};

const posts: Post[] = [
  { id: 1, title: "First Post", slug: "first-abcd" },
  { id: 2, title: "Second Post", slug: "second-post" },
];

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?blog,writing')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to BlogSpace
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover, learn, and explore unique perspectives through insightful
            blogs.
          </p>
          <a
            href="#about"
            className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-lg"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About BlogSpace</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            BlogSpace is a platform for readers and writers alike. Whether you
            want to immerse yourself in engaging stories, learn new skills, or
            share your own experiences, BlogSpace provides the perfect space to
            connect through words. Start your journey today and be inspired.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>
          © 2024 BlogSpace. All Rights Reserved. Built with ❤️ using Next.js and
          Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
