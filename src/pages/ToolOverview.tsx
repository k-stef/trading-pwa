import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Grid } from "@mui/material";

type Tool = {
  id: number;
  name: string;
};

const tools: Tool[] = [
  { id: 1, name: "Tool 1" },
  { id: 2, name: "Tool 2" },
  { id: 3, name: "Tool 3" },
];

const ToolOverview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Trading Tools
      </Typography>
      <Grid container spacing={3} justifyContent="flex-start">
        {tools.map((tool) => (
          <Grid key={tool.id} size={{ xs: 6 }}>
            <Paper
              elevation={4}
              sx={{
                aspectRatio: "1/1",
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                cursor: "pointer",
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolOverview;
