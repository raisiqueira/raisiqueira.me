import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { PageContainer } from '../components/Container'
import { LatestArticles } from '../containers/LatestArticles'
import { Seo } from '../containers/Seo'

export default function IndexPage({ data }) {
  const edges = data.en.edges.map(enEdge => {
    const brEdge = data.pt.edges.find(
      brEdge => brEdge.node.frontmatter.slug === enEdge.node.frontmatter.slug,
    )
    return brEdge || enEdge
  })
  return (
    <>
      <Seo title="Raí Siqueira — Blog" />
      <PageContainer>
        <SectionTitle>Blog</SectionTitle>
        <SectionDescription>
          Eu escrevo sobre React, Angular, JavaScript e como resolver problemas.
        </SectionDescription>
        <LatestArticles edges={edges} />
      </PageContainer>
    </>
  )
}

export const pageQuery = graphql`
  query($langKey: String!) {
    pt: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: $langKey } }
      }
    ) {
      ...ConnectionFields
    }

    en: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: "en" } }
      }
    ) {
      ...ConnectionFields
    }
  }

  fragment ConnectionFields on MdxConnection {
    edges {
      node {
        excerpt(pruneLength: 190)
        id
        fields {
          link
        }
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
