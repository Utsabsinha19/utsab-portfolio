import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

/* =========================
   SEO METADATA (ASYNC SAFE)
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return { title: "Blog Not Found" };
  }

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return { title: "Blog Not Found" };
  }

  const file = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(file);

  return {
    title: data.title,
    description: data.description,
  };
}

/* =========================
   BLOG PAGE
========================= */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const file = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(file);

  const processed = await remark().use(html).process(content);

  return (
    <section className="section">
      <article
        dangerouslySetInnerHTML={{ __html: processed.toString() }}
      />
    </section>
  );
}
