'use client';

import Button from '@mui/material/Button';
import { ShoppingCartRounded } from '@mui/icons-material';

export default function CustomButton({
  label,
  icon,
  onclick,
}: {
  label: string;
  icon?: string;
  onclick?: Function;
}) {
  return (
    <>
      <Button variant="text" startIcon={<img src={icon} alt={label} />}>
        {label}
      </Button>
    </>
  );
}
