import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';

const ToolPage: React.FC = () => {
    const { toolId } = useParams<{ toolId: string }>();

    // Placeholder for tool-specific content
    const renderToolContent = () => {
        switch (toolId) {
            case 'example':
                return <div>Example Tool Content</div>;
            // Add cases for other tools here
            default:
                return <div>Tool not found</div>;
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Tool: {toolId}
            </Typography>
            {renderToolContent()}
            <Button variant="contained" component={Link} to="/">
                Back to Tools
            </Button>
        </Container>
    );
};

export default ToolPage;