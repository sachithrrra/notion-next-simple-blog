import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import bookmark from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljs from "@notion-render/hljs-plugin";

export default async function Pagge({ params }: { params: { slug: string } }) {
  const post = await fetchBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljs());
  renderer.use(bookmark());

  const html = await renderer.render(...blocks);

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}
