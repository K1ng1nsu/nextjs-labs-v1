import React from 'react';
type Params = { id: string };
type Props = {
  params: Params;
};

async function PostDetail({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h2>detail page</h2>
      <p>id: {id}</p>
    </div>
  );
}

export default PostDetail;
