'use client';
import React, { useEffect, useState } from 'react';

type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

function PostsClientPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('network error');

        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error: {error.message}</p>;

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

export default PostsClientPage;
