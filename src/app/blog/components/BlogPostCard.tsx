"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  date: string;
  author: string;
  mainImage?: string;
  excerpt?: string;
};

const BlogPostCard = ({ slug, title, date, author, mainImage, excerpt }: Props) => {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      {mainImage && (
        <Link href={`/blog/${slug}`}>
          <div className="relative h-56 w-full">
            <Image
              src={mainImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        <p className="text-xs text-gray-500 mb-1">
          {date} • Por {author}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-700 transition mb-2">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>

        {excerpt && (
          <p className="text-gray-600 mb-4">
            {excerpt}
          </p>
        )}

        <div className="text-right">
          <Link
            href={`/blog/${slug}`}
            className="text-sm text-blue-700 font-semibold hover:underline"
          >
            Leer artículo →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;

