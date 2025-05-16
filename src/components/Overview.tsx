import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { Tile } from "./Tile";

export type Tool = {
  id: number;
  name: string;
};

const tools: Tool[] = [
  { id: 1, name: "Tool 1" },
  { id: 2, name: "Tool 2" },
  { id: 3, name: "Tool 3" },
];

const Overview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Trading Tools
      </Typography>
      <Grid container spacing={3} justifyContent="flex-start">
        {tools.map((tool) => (
          <Grid key={tool.id} size={{ xs: 6 }}>
            <Tile tool={tool} onClick={() => navigate(`/tool/${tool.id}`)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;
