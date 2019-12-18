import React from 'react';
import Page from '../../../layouts/pages';
export default class Post extends React.Component {
    static async getInitialProps({ query }) {
        const { slug } = query;
        const blogPost =
        await import(`../../../content/blog/${slug}.md`)
        .catch(error => null);

        return blogPost;
    }

    render() {
        if (!this.props.default) {
            return (
                <Page>
                    <div>not found</div>
                </Page>
            )
        }
        const {
            html,
            attributes: { thumbnail, title },
        } = this.props.default;
        return (
            <>
            <Page>
                <article>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
                <style jsx>{`
                    article {
                        margin: 0 auto;
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