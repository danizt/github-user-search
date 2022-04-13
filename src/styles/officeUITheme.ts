const palette = {
  themePrimary: '#0078d4',
  themeLighterAlt: '#eff6fc',
  themeLighter: '#deecf9',
  themeLight: '#c7e0f4',
  themeTertiary: '#71afe5',
  themeSecondary: '#2b88d8',
  themeDarkAlt: '#106ebe',
  themeDark: '#005a9e',
  themeDarker: '#004578',
  neutralLighterAlt: '#faf9f8',
  neutralLighter: '#f3f2f1',
  neutralLight: '#edebe9',
  neutralQuaternaryAlt: '#e1dfdd',
  neutralQuaternary: '#d0d0d0',
  neutralTertiaryAlt: '#c8c6c4',
  neutralTertiary: '#a19f9d',
  neutralSecondary: '#605e5c',
  neutralPrimaryAlt: '#3b3a39',
  neutralPrimary: '#323130',
  neutralDark: '#201f1e',
  black: '#000000',
  white: '#ffffff',
}

const colors = {
  h1Foreground: palette.themeSecondary,
  contentContainerBackground: palette.neutralLight,
  searchContainerBackground: palette.neutralSecondary,
  cardShadow: palette.neutralPrimary,
}

const widths = {
  width50: '50%',
  width100: '100%',
  width100px: '100px',
  width800px: '800px',
}

const paddings = {
  padding10: '10px',
  padding20: '20px',
}

const borders = {
  test: '1px solid' + palette.black,
  radius20: '20px',
}

const fonts = {
  CascadiaRegular: 'Cascadia Code',
}

export const officeUITheme = {
  id: 'OFFICE-UI',
  name: 'Office UI',
  borders: borders,
  colors: colors,
  fonts: fonts,
  fontSizes: null,
  margins: null,
  paddings: paddings,
  widths: widths,
}
