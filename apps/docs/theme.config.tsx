import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Preview from 'components/Preview'
import Overview from 'components/Overview'

const config: DocsThemeConfig = {
  logo: <span>@noqte/ui Documentations</span>,
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: 'light'
  },
  darkMode: false,
  docsRepositoryBase: 'https://github.com/noqte/ui/apps/docs',
  components: {
    Preview: Preview,
    Overview: Overview
  },
  project: {
    link: 'https://github.com/noqte/ui'
  },
  footer: {
    text: '@noqte/ui Documentations'
  }
}

export default config
