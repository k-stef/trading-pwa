import React from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";
import ReturnCalc from "./ReturnCalc";
import { tools } from "../Overview";
import { ArrowBackIosNew } from "@mui/icons-material";

const ToolPage: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();

  const renderToolContent = () => {
    switch (toolId) {
      case "1":
        return <ReturnCalc />;
      default:
        return <div>Tool not found</div>;
    }
  };

  return (
    <Container sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {tools.find((tool) => tool.id.toString() === toolId)?.name ||
          "Unknown Tool"}
      </Typography>
      <Box my={3}>{renderToolContent()}</Box>
      <Button
        variant="contained"
        component={Link}
        to="/"
        startIcon={<ArrowBackIosNew />}
      >
        Back to Tools
      </Button>
    </Container>
  );
};

export default ToolPage;
