'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

interface InputProps {
  type: 'outlined' | 'filled' | 'labeled';
  placeholder?: string;
  label?: string;
  errorText?: string;
  inputType?: 'text' | 'password' | 'email';
  withPasswordToggle?: boolean;
  multiline?: boolean;
  rows?: number;
}

export const Input = ({ 
  type, 
  placeholder, 
  label, 
  errorText,
  inputType = 'text',
  withPasswordToggle = false,
  multiline = false,
  rows = 4
}: InputProps) => {
  
  const [showPassword, setShowPassword] = useState(false);

  const getActualInputType = () => {
    if (withPasswordToggle && inputType === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return inputType;
  };

  const passwordToggleIcon = (
    <InputAdornment position="end" sx={{ marginRight: '12px' }}>
      <IconButton
        onClick={() => setShowPassword(!showPassword)}
        edge="end"
        sx={{ 
          padding: '8px',
          color: '#6C6D70',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
          {showPassword ? 'visibility' : 'visibility_off'}
        </span>
      </IconButton>
    </InputAdornment>
  );

  const styles = {
    outlined: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        fontSize: '20px',
        fontWeight: '500',
        border: '1px solid #D6D7FF',
        color: '#000000',

        '& fieldset': {
          border: 'none',
          top: 0,
          legend: { display: 'none' },
        },

        '& input, & textarea': {
          padding: '20px',
          margin: 0,
          fontSize: '20px',
          fontWeight: '500',

          '&::placeholder': {
            fontSize: '20px',
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.38)',
            opacity: 1,
          },
        },

        // 👇 РАСТЯГИВАНИЕ ДЛЯ TEXTAREA
        '& textarea': {
          resize: 'vertical', // можно растягивать по вертикали
          minHeight: '80px',  // минимальная высота
        },

        '&:hover fieldset': { border: 'none' },
        '&.Mui-focused fieldset': { border: 'none' },
        '&.Mui-focused': {
          outline: 'none',
          border: '1px solid #D6D7FF',
        },
      },

      '& .MuiInputLabel-root': {
        display: 'none',
      },
    },

    filled: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#F9F9F9',
        borderRadius: '12px',
        fontSize: '20px',
        fontWeight: '500',
        border: '1px solid transparent',
        color: '#000000',

        '& fieldset': {
          border: 'none',
        },

        '& input, & textarea': {
          padding: '20px',
          margin: 0,
          fontSize: '20px',
          fontWeight: '500',

          '&::placeholder': {
            fontSize: '20px',
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.38)',
            opacity: 1,
          },
        },

        // 👇 РАСТЯГИВАНИЕ ДЛЯ TEXTAREA
        '& textarea': {
          resize: 'vertical',
          minHeight: '80px',
        },

        '&:before, &:after': {
          display: 'none',
        },

        '&.Mui-focused': {
          outline: 'none',
          border: '1px solid #D6D7FF',
          backgroundColor: '#F9F9F9',
        },
      },

      '& .MuiInputLabel-root': {
        display: 'none',
      },
    },

    labeled: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        fontSize: '20px',
        fontWeight: '500',
        border: '1px solid #D6D7FF',
        color: '#000000',

        '& fieldset': {
          border: 'none',
        },

        '& input, & textarea': {
          padding: '20px',
          margin: 0,
          fontSize: '20px',
          fontWeight: '500',

          '&::placeholder': {
            fontSize: '20px',
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.38)',
            opacity: 1,
          },
        },

        // 👇 РАСТЯГИВАНИЕ ДЛЯ TEXTAREA
        '& textarea': {
          resize: 'vertical',
          minHeight: '80px',
        },

        '&.Mui-focused': {
          outline: 'none',
          border: '1px solid #D6D7FF',
        },
      },
    },
  };

  const inputProps: {
    endAdornment?: React.ReactNode;
  } = {};

  if (withPasswordToggle && inputType === 'password') {
    inputProps.endAdornment = passwordToggleIcon;
  }

  if (type === 'labeled') {
    return (
      <div style={{ width: '100%' }}>
        {label && (
          <label
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '100%',
              letterSpacing: '0%',
              marginBottom: '8px',
              display: 'block',
              color: '#191A1A',
            }}
          >
            {label}
          </label>
        )}
        <TextField
          sx={styles.labeled}
          placeholder={placeholder}
          error={!!errorText}
          helperText={errorText}
          variant="outlined"
          fullWidth
          type={getActualInputType()}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          InputProps={inputProps}
        />
      </div>
    );
  }

  return (
    <TextField
      sx={styles[type]}
      placeholder={placeholder}
      error={!!errorText}
      helperText={errorText}
      variant="outlined"
      fullWidth
      type={getActualInputType()}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      InputProps={inputProps}
    />
  );
};