import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          border: "2px solid #000AFF",
          borderRadius: "28px",
          width: "380px",
          hight: "48px",
          padding: "5px 16px",
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
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#FFF",
            background: "none",
          },
          "&:hover": {
            backgroundColor: "#FFF",
            background: "none",
          },
          "&.Mui-selected.Mui-focusVisible": {
            backgroundColor: "#FFF",
            background: "none",
          },
          "&.MuiSelect-outlined:hover": {
            backgroundColor: "#FFF",
            background: "none",
          },
          "&Mui-focused": {
            background: "none",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "28px",
          border: "2px solid #000AFF",
          marginTop: "-1px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});
