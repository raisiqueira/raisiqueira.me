/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Link } from 'gatsby'
import styled, { Box } from '@xstyled/styled-components'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Location } from '@reach/router'
import { Container } from '../components/Container'
import { useLangKey, toEnglish, toPortuguese } from '../components/I18nContext'

const Copyright = styled.div`
  color: light400;
  font-size: 12;
  font-family: monospace;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: -2;
  display: flex;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44;
  width: 44;
  color: lighter;
  transition: base;

  &:hover,
  &:focus {
    outline: none;
    color: accent;
  }
`

const currentYear = new Date().getFullYear()

const locales = {
  en: {
    twitter: 'My Twitter profile',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    email: 'Send me an email',
  },
  pt: {
    twitter: 'Perfil no Twitter',
    github: 'Perfil no GitHub',
    linkedin: 'Perfil no LinkedIn',
    email: 'Me envie um e-mail',
  },
}

export function AppFooter() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Container display="flex" alignItems="center" mt={4} pb={4}>
      <Copyright>Raí Siqueira © {currentYear}</Copyright>
      <Socials>
        <Location>
          {({ location }) => (
            <>
              {langKey === 'en' && (
                <SocialLink title="Portuguese" as={Link} to={toPortuguese(location)}>
                  <Box as="span" fontSize={20} role="img" aria-label="French">
                    🇧🇷
                  </Box>
                </SocialLink>
              )}
              {langKey === 'pt' && (
                <SocialLink title="English" as={Link} to={toEnglish(location)}>
                  <Box as="span" fontSize={20} role="img" aria-label="Anglais">
                    🇬🇧
                  </Box>
                </SocialLink>
              )}
            </>
          )}
        </Location>
        <SocialLink title={t.twitter} href="https://twitter.com/rai_siqueira">
          <FaTwitter />
        </SocialLink>
        <SocialLink title={t.github} href="https://github.com/raisiqueira">
          <FaGithub />
        </SocialLink>
        <SocialLink
          title={t.linkedin}
          href="https://www.linkedin.com/in/raisiqueira"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink title={t.email} href="mailto:me@raisiqueira.dev">
          <FaEnvelope />
        </SocialLink>
      </Socials>
    </Container>
  )
}
