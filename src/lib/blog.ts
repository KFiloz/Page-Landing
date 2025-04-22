import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/app/blog/content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data,
    content,
  };
}

export async function getPostHtml(slug: string) {
  const { slug: postSlug, metadata, content } = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: postSlug,
    metadata,
    contentHtml,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => {
    const { slug: realSlug, metadata } = getPostBySlug(slug);
    return {
      slug: realSlug,
      metadata,
    };
  });
}
