import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SectionTitle, SectionDescription } from '../components/Section'
import { Container } from '../components/Container'
import { Seo } from '../containers/Seo'
import { AboutContainer, AboutText, AboutImage } from '../containers/About'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "me_2019-2020.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo title="Sobre Raí Siqueira" />
      <AboutContainer>
        <Container>
          <SectionTitle>Olá, me chamo Raí!</SectionTitle>
          <SectionDescription>
            Engenheiro de software morando em Recife - Brasil, e faço alguns
            projetos em JavaScript/TypeScript, mais frequentemente em Angular 2+ e React.
          </SectionDescription>
        </Container>
        <AboutImage img={data.photo.childImageSharp} />
        <AboutText>
          <p>
            Comecei desenvolvendo para web em meados de 2009 criando temas para
            WordPress, em 2014 comecei meus estudos em JavaScript para me
            aprofundar como que a web funcionava. Em 2015 criei meu primeiro
            projeto usando AngularJS (1.5.x), depois deste projeto decidi
            me dedicar 100% em JavaScript.
          </p>

          <p>
            Hoje trabalho <i>full time</i> como líder técnico front-end na
            {' '}<a href='https://justa.com.vc'>Justa Pagamentos</a>, uma fintech
            {' '}com escritórios em São Paulo e em Recife, atualmente em aplicações
            {' '}desenvolvidas usando Angular (versão 5.x e 8.x 😬).
          </p>

          <p>
            Através dos anos fui me apaixoando por open source, chega lá no meu
            {' '}<a href='https://github.com/raisiqueira'>GitHub</a> e no
            {' '}<a href='https://github.com/justapagamentos'>GitHub da Justa</a>
            {' '}para mais detalhes.
          </p>

          <p>
            Me envie um{' '}
            <a href="mailto:me@raisiqueira.dev">e-mail</a> ou manda um alô lá no{' '}
            <a href="https://twitter.com/rai_siqueira">Twitter</a>. Ficarei feliz
            em responder! Ah, e quem sabe a gente não tome um café (ou uma cerveja)!
          </p>
        </AboutText>
      </AboutContainer>
    </>
  )
}
