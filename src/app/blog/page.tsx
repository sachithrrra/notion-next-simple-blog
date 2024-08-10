import { fetchPages } from "@/lib/notion";
import Link from "next/link";

export default async function Blog() {
  const posts = await fetchPages();

  return (
    <>
      <section className="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
          Blog
        </h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <ul>
          {posts.results.map((post: any) => {
            return (
              <li className="flex p-4 border">
                <Link
                  href={`/blog/${post.properties.Slug.rich_text[0].plain_text}`}
                >
                  <article key={post.id}>
                    <h2 className="text-xl font-extrabold">
                      {post.properties.Title.title[0].plain_text}
                    </h2>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
