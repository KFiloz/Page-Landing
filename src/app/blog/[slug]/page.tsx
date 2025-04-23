// src/app/blog/[slug]/page.tsx
import { getPostHtml, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

// Actualiza la definición del tipo para reflejar que 'params' es una Promesa
type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Params) {
  // Espera el objeto params para obtener el slug
  const { slug } = await params;

  // Usa el slug esperado
  const post = await getPostHtml(slug);

  if (!post) return notFound();

  const { metadata, contentHtml } = post;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      {metadata.mainImage && (
        <Image
          src={metadata.mainImage}
          alt={metadata.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg object-cover mb-6"
        />
      )}
      <h1 className="text-3xl font-bold text-[#0D47A1] mb-2">{metadata.title}</h1>
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