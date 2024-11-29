import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function BlogPage() {
  // Read the JSON file
  const filePath = path.join(process.cwd(), "src", "data", "blogData.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const blogPosts = JSON.parse(jsonData);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {blogPosts.map((post: any) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-80 transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link href={`/blog/${post.slug}`}>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
