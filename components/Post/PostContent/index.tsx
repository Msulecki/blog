import React from 'react';

interface IPostContent {
  children: React.ReactNode;
}

function PostContent({ children }: IPostContent) {
  return <>{children}</>;
}

export default PostContent;
