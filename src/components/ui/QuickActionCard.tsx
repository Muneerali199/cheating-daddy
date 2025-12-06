import React from 'react';

interface QuickActionCardProps {
    title: string;
    description: string;
    icon: string;
    onClick: () => void;
}

/**
 * QuickActionCard Component
 * Individual card for quick actions with hover effects
 */
function QuickActionCard({ title, description, icon, onClick }: QuickActionCardProps): React.ReactElement {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardStyle: React.CSSProperties = {
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)',
        transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    };

    const iconStyle: React.CSSProperties = {
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        transition: 'var(--transition-fast)',
        transform: isHovered ? 'rotate(5deg)' : 'rotate(0deg)'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.25rem'
    };

    const descriptionStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.5'
    };

    const buttonStyle: React.CSSProperties = {
        marginTop: 'auto',
        padding: '0.625rem 1.25rem',
        background: isHovered ? 'var(--accent-blue)' : 'var(--bg-tertiary)',
        color: isHovered ? 'white' : 'var(--text-primary)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'var(--transition-fast)'
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div style={iconStyle}>{icon}</div>
            <div>
                <h3 style={titleStyle}>{title}</h3>
                <p style={descriptionStyle}>{description}</p>
            </div>
            <button style={buttonStyle}>
                {isHovered ? 'Start →' : 'Open'}
            </button>
        </div>
    );
}

export default QuickActionCard;
