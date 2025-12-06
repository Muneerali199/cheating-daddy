import React, { useState } from 'react';
import StatusPill from '../ui/StatusPill';

interface TopBarProps {
    activeView: string;
    isConnected: boolean;
    onMenuClick?: () => void;
    isMobile?: boolean;
}

/**
 * TopBar Component
 * Top navigation bar with page title, search, status, and user avatar
 * Mobile responsive with hamburger menu
 */
function TopBar({ activeView, isConnected, onMenuClick, isMobile = false }: TopBarProps): React.ReactElement {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const topBarStyle: React.CSSProperties = {
        height: isMobile ? '60px' : '72px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 1rem' : '0 2rem',
        gap: isMobile ? '0.75rem' : '2rem'
    };

    const leftSectionStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '0.75rem' : '1rem',
        flex: 1,
        minWidth: 0
    };

    const hamburgerStyle: React.CSSProperties = {
        display: isMobile ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '4px',
        cursor: 'pointer',
        padding: '0.5rem',
        background: 'transparent',
        border: 'none'
    };

    const hamburgerLineStyle: React.CSSProperties = {
        width: '24px',
        height: '2px',
        background: 'var(--text-primary)',
        borderRadius: '2px',
        transition: 'var(--transition-fast)'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: isMobile ? '1.125rem' : '1.5rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    const searchContainerStyle: React.CSSProperties = {
        flex: 1,
        maxWidth: isMobile ? 'none' : '400px',
        display: isMobile ? 'none' : 'block'
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
        gap: isMobile ? '0.5rem' : '1rem'
    };

    const avatarStyle: React.CSSProperties = {
        width: isMobile ? '32px' : '36px',
        height: isMobile ? '32px' : '36px',
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
            <div style={leftSectionStyle}>
                {/* Hamburger Menu - Mobile Only */}
                <button 
                    style={hamburgerStyle} 
                    onClick={onMenuClick}
                    aria-label="Toggle menu"
                >
                    <div style={hamburgerLineStyle}></div>
                    <div style={hamburgerLineStyle}></div>
                    <div style={hamburgerLineStyle}></div>
                </button>

                <h1 style={titleStyle}>{activeView}</h1>
            </div>
            
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
                        if (!isMobile) {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isMobile) {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }
                    }}
                >
                    U
                </div>
            </div>
        </div>
    );
}

export default TopBar;
