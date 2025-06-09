type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

async function PostsSSRPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // 매 요청마다 서버에서 fetch
  });
  if (!response.ok) throw new Error('network error');
  const posts: Post[] = await response.json();

  return (
    <>
      <h2>client fetching</h2>
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

export default PostsSSRPage;
