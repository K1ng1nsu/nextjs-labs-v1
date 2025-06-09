import React from 'react';
import LikeButton from './LikeButton';
type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await res.json();

  const a = posts.slice(0, 10).map((post) => {
    return { id: post.id.toString() };
  });

  console.log(a);

  return a;
}

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'force-cache',
  });
  const post: Post = await res.json();

  return (
    <div>
      <h2>PostDetailPage (id: {id})</h2>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <LikeButton initialLikes={0} />
      </div>
    </div>
  );
}
