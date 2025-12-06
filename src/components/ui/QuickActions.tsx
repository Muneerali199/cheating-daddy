import React from 'react';
import QuickActionCard from './QuickActionCard';

interface QuickAction {
    id: string;
    title: string;
    description: string;
    icon: string;
    action: () => void;
}

/**
 * QuickActions Component
 * Grid of quick action cards for common tasks
 */
function QuickActions(): React.ReactElement {
    const quickActionsStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginBottom: '0.5rem'
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    const actions: QuickAction[] = [
        {
            id: 'new-session',
            title: 'Start New Session',
            description: 'Begin a fresh AI conversation',
            icon: '▶',
            action: () => console.log('Start new session')
        },
        {
            id: 'create-prompt',
            title: 'Create Prompt Template',
            description: 'Design custom prompt presets',
            icon: '✎',
            action: () => console.log('Create prompt')
        },
        {
            id: 'import-config',
            title: 'Import Config',
            description: 'Load settings from file',
            icon: '⇓',
            action: () => console.log('Import config')
        },
        {
            id: 'view-logs',
            title: 'View Logs',
            description: 'Review conversation history',
            icon: '◉',
            action: () => console.log('View logs')
        }
    ];

    return (
        <div>
            <h2 style={sectionTitleStyle}>Quick Actions</h2>
            <div style={quickActionsStyle}>
                {actions.map((action) => (
                    <QuickActionCard
                        key={action.id}
                        title={action.title}
                        description={action.description}
                        icon={action.icon}
                        onClick={action.action}
                    />
                ))}
            </div>
        </div>
    );
}

export default QuickActions;
