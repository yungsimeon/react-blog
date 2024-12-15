import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogCommentBlogComment extends Schema.Component {
  collectionName: 'components_blog_comment_blog_comments';
  info: {
    displayName: 'blogComment';
    icon: 'discuss';
  };
  attributes: {
    commentText: Attribute.String;
    commentUser: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-comment.blog-comment': BlogCommentBlogComment;
    }
  }
}
