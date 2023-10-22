import { client } from "@/utils/sanity/client";

const BlogPage = async () => {
  const posts = await client.fetch(`*[_type == 'blogPost']`);
  console.log({ posts });

  return (
    <div>
      <header>
        <h2>Blog post page</h2>
      </header>
      <main>
        <ul>
          {posts.map((post: unknown, index: string) => (
            <>
              <h4 key={`${post.name}-${index}`}>{post.title}</h4>
              <p>{post.text}</p>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BlogPage;
