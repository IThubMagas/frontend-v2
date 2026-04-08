'use client';

import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import Download from '../assets/download.svg';
import Plus from '../assets/plus.svg';

export type IconType = 'download' | 'plus';
export type ButtonVariant = 'text' | 'contained' | 'outlined';

interface CustomButtonProps {
  children: ReactNode;
  icon?: IconType;
  variant?: ButtonVariant;
  onClick: () => void;
  width?: string | number;
  height?: string | number;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  imgWidth?: number;
  imgHeight?: number;
}

export default function CustomButton({
  children,
  icon,
  variant = 'text',
  onClick,
  width = '100%',
  height = '100%',
  bgColor,
  textColor,
  hoverBgColor,
  borderColor,
  imgWidth = 20,
  imgHeight = 20,
}: CustomButtonProps) {

  const getIcon = (icon: IconType): ReactNode => {
    switch (icon) {
      case 'download':
        return <img src={Download.src} alt="download" width={imgWidth} height={imgHeight} />;
      case 'plus':
        return <img src={Plus.src} alt="plus" width={imgWidth} height={imgHeight} />;
    }
  };

  const baseStyles = {
    textTransform: 'none',
    fontWeight: '700',
    fontSize: '16px',
    width,
    height,
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'contained':
        return {
          backgroundColor: bgColor ?? '#9747FF',
          color: textColor ?? '#FFFFFF',
          '&:hover': {
            backgroundColor: hoverBgColor ?? '#9747FFec',
          },
        };
      case 'outlined':
        return {
          borderColor: borderColor ?? '#D6D7FF',
          color: textColor ?? 'black',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: borderColor ? `${borderColor}dd` : '#dedeff',
          },
        };
      default:
        return {
          color: textColor ?? 'black',
        };
    }
  };

  return (
    <Button
      variant={variant}
      endIcon={icon ? getIcon(icon) : undefined}
      onClick={onClick}
      sx={{ ...baseStyles, ...getVariantStyles() }}
    >
      {children}
    </Button>
  );
}
