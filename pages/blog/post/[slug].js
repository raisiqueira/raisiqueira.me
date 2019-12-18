import React from 'react';

export default class Post extends React.Component {
    static async getInitialProps({ query }) {
        const { slug } = query;
        const blogPost =
        await import(`../../../content/blog/${slug}.md`)
        .catch(error => null);

        return blogPost;
    }
}