import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

type TitleVariant = 'page' | 'form' | 'section' | 'small';

interface TitleProps {
  children: ReactNode;
  variant?: TitleVariant;
  component?: React.ElementType;
  sx?: SxProps<Theme>;
}

const variantMap = {
  page: 'h1Primary',
  form: 'formTitle',
  section: 'sectionTitle',
  small: 'smallTitle',
} as const;

export default function Title({
  children,
  variant = 'section',
  component,
  sx,
}: TitleProps) {
  return (
    <Typography
      variant={variantMap[variant]}
      sx={sx}
      {...(component && { component })}
    >
      {children}
    </Typography>
  );
}