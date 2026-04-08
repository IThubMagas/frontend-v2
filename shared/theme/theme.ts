import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    h1Primary: {
      fontFamily: 'var(--font-tt-firs)',
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '100%',
    },
    formTitle: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '100%',
      color: '#0B0B0B',
    },
    sectionTitle: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '100%',
      color: '#191A1A',
    },
    smallTitle: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '100%',
      color: '#191A1A',
    },
  },
});