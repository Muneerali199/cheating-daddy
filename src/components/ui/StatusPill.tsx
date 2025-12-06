import React from 'react';

interface StatusPillProps {
    isConnected: boolean;
}

/**
 * StatusPill Component
 * Displays connection status with a colored indicator
 */
function StatusPill({ isConnected }: StatusPillProps): React.ReactElement {
    const pillStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.875rem',
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-lg)',
        fontSize: '0.813rem',
        fontWeight: '500',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border-subtle)'
    };

    const dotStyle: React.CSSProperties = {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: isConnected ? '#10B981' : '#EF4444',
        boxShadow: `0 0 8px ${isConnected ? '#10B981' : '#EF4444'}`,
        animation: isConnected ? 'pulse 2s infinite' : 'none'
    };

    return (
        <div style={pillStyle}>
            <div style={dotStyle} />
            <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
    );
}

export default StatusPill;
