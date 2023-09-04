import { createTheme } from "@mui/material";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
  })

export const theme = createTheme({
  typography: {
    //fontFamily: 'inherit',
    fontFamily: manrope.style.fontFamily
  },
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
            background: "none"
          },
          "&:hover": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
            background: "none"
          },
          "&.Mui-selected.Mui-focusVisible": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
            background: "none"
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#FFF",
            borderRadius: "28px",
            background: "none"
          },
          "&Mui-focused": {
            background: "none"
          }
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          borderLeft: "2px solid #000AFF",
          borderRight: "2px solid #000AFF",
          borderBottom: "2px solid #000AFF",
          //borderTop: "1px solid #000AFF",
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
