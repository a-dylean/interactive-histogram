import { createTheme } from "@mui/material";
import { Noto_Sans } from 'next/font/google';
//import "./globals.css";

export const theme = createTheme({
//   typography: {
//     fontFamily: "Noto_Sans",
//   },
  components: {
    MuiList: {
      styleOverrides: {
        padding: {
          padding: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: "#000AFF",
        },
        root: {
          border: "2px solid #000AFF",
          borderRadius: "28px",
          padding: "3px",
          width: "380px",
          hight: "48px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "3px 5px",
        },
        notchedOutline: {
          border: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
          },
          "&:hover": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
          },
          "&.Mui-selected.Mui-focusVisible": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          border: "2px solid #000AFF",
          borderRadius: "28px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "28px",
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                boxShadow: "none"
            }
        }
    }
  },
});
