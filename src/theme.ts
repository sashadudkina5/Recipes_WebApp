'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#ff642f",
          margin: 'auto',
        },
    }
  },
}});

export default theme;