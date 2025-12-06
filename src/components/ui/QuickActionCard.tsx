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
        backdropFilter: 'blur(20px)',
        border: isHovered ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)',
        transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 20px 40px -10px rgba(99, 102, 241, 0.3)' : 'var(--shadow-sm)',
        position: 'relative',
        overflow: 'hidden'
    };

    const iconStyle: React.CSSProperties = {
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius-lg)',
        background: isHovered ? 'var(--accent-gradient-vibrant)' : 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        transition: 'var(--transition-smooth)',
        transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
        boxShadow: isHovered ? 'var(--shadow-glow-purple)' : 'none'
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
