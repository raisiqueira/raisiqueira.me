import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBrandLink,
  NavbarSecondary,
  NavbarLink,
} from '../components/Navbar'
import { useLangKey, I18nLink } from '../components/I18nContext'

const locales = {
  en: {
    about: 'About',
    blog: 'Blog',
    projects: 'Projects',
  },
  pt: {
    about: 'Sobre',
    blog: 'Blog',
    projects: 'Projetos',
  },
}

export function AppNavbar() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Navbar>
      <NavbarBrandLink as={I18nLink} to="/">
        <NavbarBrand>Raí Siqueira</NavbarBrand>
      </NavbarBrandLink>
      <NavbarSecondary>
        <NavbarLink as={I18nLink} to="/about">
          {t.about}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/blog">
          {t.blog}
        </NavbarLink>
        <NavbarLink as={I18nLink} to="/projects">
          {t.projects}
        </NavbarLink>
      </NavbarSecondary>
    </Navbar>
  )
}
