import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { Hero, HeroIntro, HeroTitle, HeroTeaser } from '../containers/Hero'
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
      <Seo />
      <Hero>
        <HeroIntro>Olá, me chamo</HeroIntro>
        <HeroTitle>
          <strong>Raí Siqueira.</strong>
          <br />Engenheiro de software, front-end e amante de uma boa cerveja.
        </HeroTitle>
        <HeroTeaser>
          Engenheiro de software morando em Recife - Brazil. Atualmente desenvolvendo aplicações em JavaScript/TypeScript,
          boa parte delas em Angular 2+ ou React.
        </HeroTeaser>
      </Hero>
      <Container forwardedAs="section" pb={5}>
        <SectionTitle forwardedAs="h2">Blog</SectionTitle>
        <LatestArticles edges={edges} />
      </Container>
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
