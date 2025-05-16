import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

interface ToolTileProps {
    toolName: string;
    toolIcon: React.ReactNode;
    toolPath: string;
}

const ToolTile: React.FC<ToolTileProps> = ({ toolName, toolIcon, toolPath }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(toolPath);
    };

    return (
        <Card onClick={handleClick} style={{ cursor: 'pointer', margin: '16px' }}>
            <CardContent>
                {toolIcon}
                <Typography variant="h6">{toolName}</Typography>
            </CardContent>
        </Card>
    );
};

export default ToolTile;