import React, { useState } from 'react';
import StatusPill from '../ui/StatusPill';

interface TopBarProps {
    activeView: string;
    isConnected: boolean;
}

/**
 * TopBar Component
 * Top navigation bar with page title, search, status, and user avatar
 */
function TopBar({ activeView, isConnected }: TopBarProps): React.ReactElement {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const topBarStyle: React.CSSProperties = {
        height: '72px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        gap: '2rem'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        textTransform: 'capitalize',
        minWidth: '150px'
    };

    const searchContainerStyle: React.CSSProperties = {
        flex: 1,
        maxWidth: '400px'
    };

    const searchInputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.625rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.875rem',
        transition: 'var(--transition-fast)'
    };

    const rightSectionStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    };

    const avatarStyle: React.CSSProperties = {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'var(--transition-fast)'
    };

    return (
        <div style={topBarStyle}>
            <h1 style={titleStyle}>{activeView}</h1>
            
            <div style={searchContainerStyle}>
                <input
                    type="text"
                    placeholder="Search sessions or prompts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={searchInputStyle}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-blue)';
                        e.currentTarget.style.background = 'var(--bg-primary)';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.background = 'var(--bg-tertiary)';
                    }}
                />
            </div>
            
            <div style={rightSectionStyle}>
                <StatusPill isConnected={isConnected} />
                <div 
                    style={avatarStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    U
                </div>
            </div>
        </div>
    );
}

export default TopBar;
