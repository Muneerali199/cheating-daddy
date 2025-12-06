import React from 'react';

interface MenuItem {
    id: string;
    label: string;
    icon: string;
}

interface SidebarProps {
    activeView: string;
    onNavigate: (view: string) => void;
}

/**
 * Sidebar Component
 * Left navigation panel with logo and menu items
 */
function Sidebar({ activeView, onNavigate }: SidebarProps): React.ReactElement {
    const sidebarStyle: React.CSSProperties = {
        width: '240px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 1rem',
        gap: '2rem'
    };

    const logoStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        padding: '0.5rem 1rem',
        letterSpacing: '-0.02em'
    };

    const logoAccentStyle: React.CSSProperties = {
        background: 'var(--accent-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    const navStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    };

    const menuItems: MenuItem[] = [
        { id: 'dashboard', label: 'Dashboard', icon: '◆' },
        { id: 'sessions', label: 'Sessions', icon: '◉' },
        { id: 'profiles', label: 'Profiles', icon: '◈' },
        { id: 'history', label: 'History', icon: '◐' },
        { id: 'settings', label: 'Settings', icon: '◎' }
    ];

    const getItemStyle = (isActive: boolean): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius-md)',
        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: isActive ? 'var(--bg-active)' : 'transparent',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        fontSize: '0.9rem',
        fontWeight: isActive ? '500' : '400',
        border: 'none',
        width: '100%',
        textAlign: 'left'
    });

    const iconStyle: React.CSSProperties = {
        fontSize: '1rem',
        opacity: 0.8
    };

    return (
        <div style={sidebarStyle}>
            <div style={logoStyle}>
                <span style={logoAccentStyle}>Cheating</span> Daddy
            </div>
            
            <nav style={navStyle}>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        style={getItemStyle(activeView === item.id)}
                        onClick={() => onNavigate(item.id)}
                        onMouseEnter={(e) => {
                            if (activeView !== item.id) {
                                e.currentTarget.style.background = 'var(--bg-hover)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeView !== item.id) {
                                e.currentTarget.style.background = 'transparent';
                            }
                        }}
                    >
                        <span style={iconStyle}>{item.icon}</span>
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
