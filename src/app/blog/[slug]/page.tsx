import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Read the JSON file
  const filePath = path.join(process.cwd(), 'src', 'data', 'blogData.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const blogPosts = JSON.parse(jsonData);

  // Await the params object and find the blog post by slug
  const post = blogPosts.find((post: any) => post.slug === params.slug);

  // If the blog post is not found, show a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}