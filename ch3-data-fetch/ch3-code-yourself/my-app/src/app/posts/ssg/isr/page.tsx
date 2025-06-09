type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

async function PostsSSGPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10, // isr 간격 초 단위
    },
  });
  if (!response.ok) throw new Error('network error');
  const posts: Post[] = await response.json();

  const now = new Date().toLocaleString();

  return (
    <>
      <h2>client fetching</h2>
      <p>{now}</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <b>
                <p>{post.title}</p>
              </b>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PostsSSGPage;
