
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  image: string;
};

const BlogPostCard = ({ title, excerpt, author, date, slug, image }: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="p-6 border rounded-lg hover:shadow transition-all bg-white cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="rounded-lg mb-4 object-cover w-full h-48"
        />
        <h3 className="text-xl font-bold text-[#0D47A1] mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{excerpt}</p>
        <div className="text-sm text-gray-500">
          Publicado por {author} · {date}
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
