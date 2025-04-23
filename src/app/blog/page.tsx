// src/app/blog/page.tsx
import BlogPostCard from "./components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <BlogPostCard
          key={post.slug}
          slug={post.slug}
          title={post.metadata.title}
          date={post.metadata.date}
          author={post.metadata.author}
          mainImage={post.metadata.mainImage}
          excerpt={post.metadata.excerpt}
        />
      ))}
    </div>
  );
}
