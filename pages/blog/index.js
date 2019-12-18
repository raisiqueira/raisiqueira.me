import React from 'react';
import Link from 'next/link';
import Page from '../../layouts/pages';

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
        return (
            <>
                <Page>
                    <div className='blog-content'>
                    <h2 style={{textAlign: 'center', marginBottom: 10}}>
                        Blog 📝
                    </h2>
                    {postsList.map(post => (
                        <Link key={post.slug} href={`blog/post/${post.slug}`}>
                            <div className="blog-post">
                                <h3>{post.attributes.title}</h3>
                            </div>
                        </Link>
                    ))}
                        <style jsx>
                            {`
                                .blog-content {
                                    display: flex;
                                    flex-flow: column;
                                    justify-content: center;
                                    align-itens: center;
                                    min-height: 100vh;
                                    padding: 100px;
                                }
                                .blog-post {
                                    width: 100%;
                                    height: 10vh;
                                    padding: 10px;
                                    margin: 10px 0;
                                    border: 1px dashed var(--grey-1);
                                }
                            `}
                        </style>
                    </div>
                </Page>
            </>
        )
    }
}
