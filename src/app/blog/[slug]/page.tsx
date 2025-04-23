import { getPostHtml, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
// Import PageProps for correct typing of component props in App Router
// Using type-only import for PageProps from "next"
import type { PageProps } from "next";

// Definimos un tipo local para las props del componente, incluyendo los parámetros de ruta.
// Eliminamos la definición de tipo 'Props' local anterior, ya que volveremos a usar PageProps.
// type Props = {
//   params: {
//     slug: string;
//   };
// };

export async function generateStaticParams() {
  const posts = getAllPosts();
  // Map posts to an array of objects with the slug parameter
  return posts.map((post) => ({ slug: post.slug }));
}

// Define the BlogPostPage component using the standard PageProps type for dynamic routes
// PageProps is generic, specify the shape of the params using a more general type
export default async function BlogPostPage({
  params, // params will have the shape { slug: string } based on the route and generateStaticParams
}: PageProps<{ [param: string]: string | string[] }>) { // Usamos el tipo PageProps estándar para params dinámicos
  // We know from generateStaticParams and the route structure that 'params.slug' will be a string
  const slug = params.slug as string; // Cast to string for explicit type safety in usage

  // Fetch the blog post content based on the slug from the URL params
  const post = await getPostHtml(slug);

  // If the post is not found, render the Next.js notFound page (404)
  if (!post) {
    return notFound();
  }

  // Destructure the fetched post to get metadata and HTML content
  const { metadata, contentHtml } = post;

  // Render the blog post content
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      {/* Conditionally render the main image if it exists in the metadata */}
      {metadata.mainImage && (
        <Image
          src={metadata.mainImage} // Source URL of the image
          alt={metadata.title} // Alt text for accessibility, using the post title
          width={800} // Desired width for the image
          height={400} // Desired height for the image
          // Tailwind CSS classes for styling: full width, rounded corners, margin-bottom, cover object fit
          className="w-full rounded-lg mb-6 object-cover"
        />
      )}
      {/* Display the post title */}
      <h1 className="text-3xl font-bold text-[#0D47A1] mb-2">{metadata.title}</h1>
      {/* Display the author and date */}
      <p className="text-sm text-gray-500 mb-6">
        {metadata.author} · {metadata.date}
      </p>
      {/* Render the HTML content of the post */}
      {/* Using dangerouslySetInnerHTML to inject raw HTML content */}
      {/* Apply Tailwind Typography classes for styling the HTML content */}
      <div
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
