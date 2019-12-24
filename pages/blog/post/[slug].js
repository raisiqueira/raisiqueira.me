import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Page from '../../../layouts/pages';
import BlogHeader from '../../../components/BlogHeader';

export default class Post extends React.Component {
    static async getInitialProps({ query }) {
        const { slug } = query;
        const blogpost = await import(`../../../content/blog/${slug}.md`)
        .catch(error => null);
    
        return { blogpost };
    }

    render() {
        if (!this.props.blogpost) {
            return (
                <Page>
                    <div>not found</div>
                </Page>
            )
        }
        const {
            html,
            attributes: { title, date },
        } = this.props.blogpost;
        const postTitle = `${title} | Raí Siqueira`;
        return (
            <>
            <Page title={postTitle}>
            <main className='blog-content'>
            <article className="blog-post">
                <BlogHeader />
                    <header>
                        <h1>{title}</h1>
                        <p>{new Date(date).toLocaleDateString('en', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}</p>
                    </header>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: html }} />
                    <footer>
                    <div className="see-all">
                        <Link href="/blog" passHref prefetch>
                            <a>← see all posts</a>
                        </Link>
                    </div>
                    </footer>
                </article>
            </main>
            <style jsx>
                {
                    `
                    article h1 {
                        margin-bottom: 1.75rem;
                        font-size: 2.5rem;
                        line-height: 1.1;
                    }
                    article p {
                        font-size: 0.85rem;
                        line-height: 1.75rem;
                        display: block;
                        margin-bottom: 1.75rem;
                        margin-top: -1.4rem;
                    }
                    article footer {
                        border-top: 1px solid var(--primary-color);
                        padding: 15px 0;
                        margin-top: 30px;
                    }
                    `
                }
            </style>
            </Page>
            </>
        )
    }
}