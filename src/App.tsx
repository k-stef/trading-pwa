import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import ToolPage from "./components/tools/ToolPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/tool/:toolId" element={<ToolPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
