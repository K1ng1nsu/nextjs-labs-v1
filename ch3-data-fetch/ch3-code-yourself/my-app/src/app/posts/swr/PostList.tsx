'use client';
import useSWR from 'swr';
type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

const fetcher: <T>(url: string) => Promise<T> = (url: string) =>
  fetch(url).then((res) => res.json());

function PostList() {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher<Post[]>,
    {
      refreshInterval: 1000,
    }
  );

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: 'red' }}>에러 발생: {error.message}</p>;

  return (
    <ul>
      {data?.slice(0, 5).map((post) => (
        <li key={post.id}>
          <b>{post.title}</b>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
