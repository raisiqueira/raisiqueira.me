import React from 'react';
import Link from 'next/link';
import Page from '../../layouts/pages';
import BlogHeader from '../../components/BlogHeader';

const importBlogPosts = async () => {
    const markdownFiles = require
    .context('../../content/blog', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
    return Promise.all(
    markdownFiles.map(async path => {
        const markdown = await import(`../../content/blog/${path}`);
        return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
    );
};

export default class Blog extends React.Component {
    static async getInitialProps() {
        const postsList = await importBlogPosts();
        return { postsList };
    }

    render() {
        const { postsList } = this.props;
        const postFiltered = postsList.sort((a, b) => {
                const firstDate = new Date(a.attributes.date).getTime();
                const secondDate = new Date(b.attributes.date).getTime();
                return firstDate < secondDate ? 1 : -1;
            });
        return (
            <>
                <Page>
                    <main className='blog-content'>
                    <BlogHeader />
                    {postFiltered.map(post => (
                        <Link
                            key={post.slug}
                            href={`blog/post/${post.slug}`}
                            passHref prefetch
                        >
                            <article className="blog-post">
                            <header>
                                <h3 style={{
                                    color: 'var(--primary-color)',
                                    cursor: 'pointer',
                                    }}>
                                    {post.attributes.title}
                                </h3>
                                <p>{new Date(
                                    post.attributes.date
                                    ).toLocaleDateString('en', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}</p>
                            </header>
                            </article>
                        </Link>
                    ))}
                    </main>
                </Page>
            </>
        )
    }
}
