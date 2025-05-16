import { Paper, Typography } from "@mui/material";
import { Tool } from "./Overview";

export const Tile: React.FC<{
  tool: Tool;
  onClick: () => void;
}> = ({ tool, onClick }) => (
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
    onClick={onClick}
  >
    <Typography variant="h6">{tool.name}</Typography>
  </Paper>
);
