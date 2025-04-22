import BlogHero from "../blog/components/BlogHeroSection";
import BlogSidebar from "../blog/components/BlogSidebar";
import BlogPostCard from "../blog/components/BlogPostCard";
import { getPostHtml, getAllPosts } from "@/lib/blog";



export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-20 px-6 max-w-[1200px] mx-auto">
      <BlogHero />

      <div className="flex flex-col md:flex-row gap-12">
        <BlogSidebar />

        <main className="w-full md:w-3/4 space-y-8">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.metadata.title}
              excerpt={post.metadata.excerpt || "Contenido del artículo..."}
              author={post.metadata.author}
              date={post.metadata.date}
              slug={post.slug}
              image={post.metadata.mainImage}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
