import React from 'react';
import Page from '../../../layouts/pages';
import { formatPostDate } from '../../../utils/settings'

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
        return (
            <>
            <Page>
            <main className='blog-content'>
            <article className="blog-post">
                    <header>
                        <h1>{title}</h1>
                        <p>{formatPostDate(date)}</p>
                    </header>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
            </main>
            <style jsx>
                {
                    `
                    article h1 {
                        margin-bottom: 1.75rem;
                        font-size: 2.5rem;
                        line-height: 1.1;
                        text-rendering: optimizeLegibility;
                    }
                    article p {
                        font-size: 0.83255rem;
                        line-height: 1.75rem;
                        display: block;
                        margin-bottom: 1.75rem;
                        margin-top: -1.4rem;
                    }
                    `
                }
            </style>
            </Page>
            </>
        )
    }
}