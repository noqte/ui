import Preview from 'components/Preview'
import Overview from 'components/Overview'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>@noqte/ui Documentations</span>,
  docsRepositoryBase: 'https://github.com/noqte/ui/apps/docs',
  darkMode: false,
  components: {
    Preview: Preview,
    Overview: Overview
  },
  project: {
    link: 'https://github.com/noqte/ui'
  }
}

export default config
