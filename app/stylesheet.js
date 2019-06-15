import { css } from 'styled-components';

const palette = {
  darkGrey: '#21272B',
  lightGrey: '#FAFAFA',
  yellow: '#ccac55',
  blue: 'steelblue',
  green: 'mediumseagreen',
  red: 'crimson',
  brown: '#69551f',
  transparentWhite: 'rgba(250, 250, 250, 0.75)'
};

export const colorUsages = {
  contentBackground: 'rgba(24, 28, 31, 0.8)',
  contentShadow: 'rgba(24, 28, 31, 0.2)',
  navbarActiveTab: palette.yellow,
  ribbonBackground: palette.yellow,
  ribbonBorder: palette.brown,
  text: palette.lightGrey,
  tableBorder: palette.lightGrey,
  footer: palette.darkGrey,
  footerBackground: palette.transparentWhite,
  link: palette.blue,
  linkHover: palette.yellow
};

export const thresholds = {
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export const fonts = {
  main: css`
    font-family: 'Noto Sans', sans-serif;
  `,
  special: css`
    font-family: 'BrandonThin', sans-serif;
    font-weight: 100;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  `
};

export const fontSizes = {
  base: '14px'
};
