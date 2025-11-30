import React from "react";
import {Link, useParams} from "react-router-dom";
import {Box, Button, Container, Typography} from "@mui/material";
import ReturnCalc from "./return-calc/ReturnCalc";
import {tools} from "../Overview";
import {ArrowBackIosNew} from "@mui/icons-material";
import RiskManager from "./risk-manager/RiskManager";

const ToolPage: React.FC = () => {
    const {toolId} = useParams<{ toolId: string }>();

    const renderToolContent = () => {
        switch (toolId) {
            case "1":
                return <ReturnCalc/>;
            case "2":
                return <RiskManager/>;
            default:
                return <div>Tool not found</div>;
        }
    };

    return (
        <Container sx={{p: 3}}>
            <Typography variant="h4" gutterBottom>
                {tools.find((tool) => tool.id.toString() === toolId)?.name ??
                    "Unknown Tool"}
            </Typography>
            <Box my={3}>{renderToolContent()}</Box>
            <Button
                variant="contained"
                component={Link}
                to="/"
                startIcon={<ArrowBackIosNew/>}
                sx={{mt: 2}}
            >
                Back to Tools
            </Button>
        </Container>
    );
};

export default ToolPage;
