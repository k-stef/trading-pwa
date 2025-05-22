import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f06621",
            light: "#dc004e",
            dark: "#f06621",
        },
        secondary: {
            main: "#2b0b5a",
            light: "#1976d2",
            dark: "#2b0b5a",
        },
        error: {
            main: "#d32f2f",
            light: "#ef5350",
            dark: "#c62828",
        },
        warning: {
            main: "#ed6c02",
            light: "#ff9800",
            dark: "#e65100",
        },
        info: {
            main: "#0288d1",
            light: "#03a9f4",
            dark: "#01579b",
        },
        success: {
            main: "#2e7d32",
            light: "#4caf50",
            dark: "#1b5e20",
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161",
        },
        background: {
            default: "#181818",
            paper: "#181818",
        },
        text: {
            primary: "#ffffff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
        action: {
            active: "rgba(255, 255, 255, 0.7)",
            hover: "rgba(255, 255, 255, 0.08)",
            selected: "rgba(255, 255, 255, 0.16)",
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            focus: "rgba(0, 0, 0, 0.12)",
        },
    },
    typography: {
        fontFamily: '"Bebas Neue", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: "1.1rem",
            fontWeight: 400,
        },
        body1: {
            fontSize: "1.1rem",
        },

    },
});

export default theme;
