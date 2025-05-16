import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import ToolPage from "./components/tools/ToolPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box, CssBaseline } from "@mui/material";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          minWidth: "100vw",
          margin: 0,
          p: 0,
        }}
      >
        <div style={{ color: "white", fontSize: 32, textAlign: "center" }}>
          TEST RENDER
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/tool/:toolId" element={<ToolPage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
