import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1Primary: React.CSSProperties;
    h1Secondary: React.CSSProperties;
    formTitle: React.CSSProperties;
    sectionTitle: React.CSSProperties;
    sectionTitleBold: React.CSSProperties;
    smallTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Primary?: React.CSSProperties;
    h1Secondary?: React.CSSProperties;
    formTitle?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
    sectionTitleBold?: React.CSSProperties;
    smallTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Primary: true;
    h1Secondary: true;
    formTitle: true;
    sectionTitle: true;
    sectionTitleBold: true;
    smallTitle: true;
  }
}