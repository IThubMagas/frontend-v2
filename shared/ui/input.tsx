import TextField from '@mui/material/TextField';

interface InputProps {
  type: 'outlined' | 'filled' | 'labeled';
  placeholder?: string;
  label?: string;
  errorText?: string;
}

export const Input = ({ type, placeholder, label, errorText }: InputProps) => {
  const styles = {
    outlined: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        fontSize: '20px',
        fontWeight: '500',
        border: '1px solid #D6D7FF',
        gap: '20px',
        color: '#000000',

        '& fieldset': {
          border: 'none',
          top: 0,
          legend: { display: 'none' },
        },

        '& input': {
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
        padding: 0,

        '& fieldset': {
          border: 'none',
        },

        '& input': {
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

        '&:before, &:after': {
          display: 'none',
        },

        '&.Mui-focused': {
          outline: 'none',
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

        '& input': {
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

        '&.Mui-focused': {
          outline: 'none',
          border: '1px solid #D6D7FF',
        },
      },
    },
  };

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
          InputProps={{
            disableUnderline: true,
          }}
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
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};
