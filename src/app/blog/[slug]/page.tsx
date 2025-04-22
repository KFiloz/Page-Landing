import { getPostHtml, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamic = "auto"; // o "force-static" si estás seguro que no cambia

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // ⚠️ Aquí accedemos directamente al parámetro dentro del mismo scope async
  const post = await getPostHtml(params.slug);

  if (!post) return notFound();

  const { metadata, contentHtml } = post;

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      {metadata.mainImage && (
        <Image
          src={metadata.mainImage}
          alt={metadata.title}
          width={800}
          height={400}
          className="w-full rounded-lg mb-6 object-cover"
        />
      )}

      <h1 className="text-3xl font-bold text-[#0D47A1] mb-2">
        {metadata.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        {metadata.author} · {metadata.date}
      </p>

      <div
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
