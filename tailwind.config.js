const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const customColors = {
  'dark-border': '#161528',
  'light-border': '#d6d6d6',
  'table-header-bg': '#f5f5f5',
  'nav-link-active-bg': '#d78dff',
  'nav-bar-bg': '#621ae1',
  'table-header-bg': '#b3efee'
}

module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false
  },
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    fontSize: {
      '14-px': '14px',
      '16-px': '16px',
      '24-px': '24px',
    },
    extend: {
      textColor: {
        ...customColors
      },
      colors: {
        ...customColors
      },
      borderRadius: {
        '4-px': '4px',
      },
      margin: {
        '16-px': '16px',
        '24-px': '24px'
      },
      padding: {
        '12-px': '12px',
        '24-px': '24px'
      },
      fontFamily: {
        'activ-grotisk': '"aktiv-grotesk", sans-serif'
      },
      fontWeight: {
        '600': '600'
      },
      height: {
        '40-px': '40px',
        '60-px': '60px'
      },
      width: {
        '200-px': '200px'
      }
    },
  },
  plugins: [],
}
