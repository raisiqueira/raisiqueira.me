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
      <Seo title="About Raí Siqueira" />
      <AboutContainer>
        <Container>
          <SectionTitle>Hi I&#39;m Raí!</SectionTitle>
          <SectionDescription>
            I&#39;m a software engineer based in Recife,
            i make some apps in JavaScript/TypeScript, most frequently with
            Angular 2+ and React.
          </SectionDescription>
        </Container>
        <AboutImage img={data.photo.childImageSharp} />
        <AboutText>
          <p>
            I started developing to the web on 2009 making some WordPress templates{' '},
            in 2014 i started to learn JavaScript to understand how web work`s. In 2015
            i made my first project with AngularJS (1.5.x), after this project
            i decide to work full time on JavaScript applications.
          </p>

          <p>
            Today i work full time as tech lead at{' '}
            <a href="https://www.justa.com.vc">Justa Pagamentos</a>, a Brazilian
            fintech working on applications based on Angular (5.x and 8.x version 😬).
          </p>

          <p>
            Over the years, I’ve become passionate about open source software
            see <a href='https://github.com/raisiqueira'>my GitHub</a> and
            {' '}<a href='https://github.com/justapagamentos'>Justa`s GitHub</a>
            {' '}for more details.
          </p>

          <p>
            Send me an{' '}
            <a href="mailto:me@raisiqueira.dev">email</a> or say hello on{' '}
            <a href="https://twitter.com/rai_siqueira">Twitter</a>. I&apos;ll be
            happy to talk! And let`s drink a coffee (or a beer)!
          </p>
        </AboutText>
      </AboutContainer>
    </>
  )
}
