"use client";

const BlogSidebar = () => {
  return (
    <aside className="w-full md:w-1/4 mb-8 md:mb-0">
      <h2 className="text-lg font-semibold mb-4">Temáticas</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-800 hover:underline">IoT Industrial</a></li>
        <li><a href="#" className="text-blue-800 hover:underline">Agricultura Inteligente</a></li>
        <li><a href="#" className="text-blue-800 hover:underline">Automatización</a></li>
        <li><a href="#" className="text-blue-800 hover:underline">Cloud & DevOps</a></li>
      </ul>
    </aside>
  );
};

export default BlogSidebar;
