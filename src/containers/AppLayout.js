import React from 'react'
import { Helmet } from 'react-helmet'
import { Location } from '@reach/router'
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
} from '../components/Layout'
import { GlobalStyle } from '../components/GlobalStyle'
import { ThemeInitializer } from '../components/Theme'
import { I18nProvider, toEnglish, toPortuguese } from '../components/I18nContext'
import { AppNavbar } from './AppNavbar'
import { AppFooter } from './AppFooter'

export function AppLayout({ children, langKey }) {
  return (
    <I18nProvider langKey={langKey}>
      <ThemeInitializer>
        <Location>
          {({ location }) => (
            <Helmet>
              <html lang={langKey} />
              <link
                rel="alternate"
                hrefLang={langKey === 'pt' ? 'en' : 'pt'}
                href={`https://raisiqueira.dev${
                  langKey === 'pt' ? toEnglish(location) : toPortuguese(location)
                }`}
              />
            </Helmet>
          )}
        </Location>
        <Layout>
          <GlobalStyle />
          <LayoutHeader>
            <AppNavbar />
          </LayoutHeader>
          <LayoutMain>{children}</LayoutMain>
          <LayoutFooter>
            <AppFooter />
          </LayoutFooter>
        </Layout>
      </ThemeInitializer>
    </I18nProvider>
  )
}
