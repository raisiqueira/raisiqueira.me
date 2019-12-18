import React from 'react';
import Page from '../../../layouts/pages';

export default class Post extends React.Component {
    static async getInitialProps({ query }) {
        const { slug } = query;
        const blogpost = await import(`../../../content/blog/${slug}.md`).catch(error => null);
    
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
            attributes: { title },
        } = this.props.blogpost;
        return (
            <>
            <Page>
                <article>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
                <style jsx>{`
                    article {
                        display: flex;
                        justify-content: center;
                        align-itens: center;
                        min-height: 100vh;
                        padding: 100px;
                    }
                    h1 {
                        text-align: center;
                    }
        `}</style>
            </Page>
            </>
        )
    }
}