"use client";

type Props = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

const BlogPostCard = ({ title, excerpt, author, date }: Props) => {
  return (
    <div className="p-6 border rounded-lg hover:shadow transition-all bg-white">
      <h3 className="text-xl font-bold text-[#0D47A1] mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{excerpt}</p>
      <div className="text-sm text-gray-500">
        Publicado por {author} · {date}
      </div>
    </div>
  );
};

export default BlogPostCard;
