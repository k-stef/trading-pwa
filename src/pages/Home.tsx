import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, GridLegacy } from "@mui/material";

const tools = [
  { id: 1, name: "Tool 1" },
  { id: 2, name: "Tool 2" },
  { id: 3, name: "Tool 3" },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Trading Tools
      </Typography>
      <GridLegacy container spacing={3} justifyContent="center">
        {tools.map((tool) => (
          <GridLegacy item xs={6} sm={4} key={tool.id}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                cursor: "pointer",
                minHeight: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#222",
                color: "#fff",
                "&:hover": { bgcolor: "#444" },
              }}
              onClick={() => navigate(`/tool/${tool.id}`)}
            >
              <Typography variant="h6">{tool.name}</Typography>
            </Paper>
          </GridLegacy>
        ))}
      </GridLegacy>
    </Box>
  );
};

export default Home;
