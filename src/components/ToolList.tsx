import React from 'react';
import ToolTile from './ToolTile';

const tools = [
    { id: 'example-tool', name: 'Example Tool', icon: '🔧' },
    // Add more tools here as needed
];

const ToolList: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {tools.map(tool => (
                <ToolTile key={tool.id} tool={tool} />
            ))}
        </div>
    );
};

export default ToolList;