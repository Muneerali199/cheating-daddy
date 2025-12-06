import React, { useState } from 'react';
import { Profile } from '../../App';

interface ProfilePanelProps {
    profiles: Profile[];
    selectedProfile: Profile | null;
    onSelectProfile: (profile: Profile) => void;
}

/**
 * ProfilePanel Component
 * Collapsible side panel showing available AI profiles/presets
 */
function ProfilePanel({ profiles, selectedProfile, onSelectProfile }: ProfilePanelProps): React.ReactElement {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const panelStyle: React.CSSProperties = {
        width: isCollapsed ? '60px' : '320px',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'var(--transition-smooth)',
        display: 'flex',
        flexDirection: 'column'
    };

    const headerStyle: React.CSSProperties = {
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--bg-secondary)'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        opacity: isCollapsed ? 0 : 1,
        transition: 'var(--transition-fast)',
        whiteSpace: 'nowrap'
    };

    const toggleButtonStyle: React.CSSProperties = {
        width: '32px',
        height: '32px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        transition: 'var(--transition-fast)'
    };

    const profilesListStyle: React.CSSProperties = {
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    };

    const profileCardStyle = (isSelected: boolean): React.CSSProperties => ({
        padding: isCollapsed ? '1rem' : '1.25rem',
        background: isSelected ? 'var(--bg-active)' : 'var(--bg-tertiary)',
        border: `1px solid ${isSelected ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    });

    const profileHeaderStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
    };

    const profileIconStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        flexShrink: 0
    };

    const profileInfoStyle: React.CSSProperties = {
        flex: 1,
        opacity: isCollapsed ? 0 : 1,
        transition: 'var(--transition-fast)',
        minWidth: 0
    };

    const profileNameStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.25rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    const profileDescStyle: React.CSSProperties = {
        fontSize: '0.813rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.4'
    };

    const profileMetaStyle: React.CSSProperties = {
        display: 'flex',
        gap: '0.5rem',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        opacity: isCollapsed ? 0 : 1,
        transition: 'var(--transition-fast)'
    };

    const metaTagStyle: React.CSSProperties = {
        padding: '0.25rem 0.5rem',
        background: 'var(--bg-primary)',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)'
    };

    return (
        <div style={panelStyle}>
            <div style={headerStyle}>
                <h2 style={titleStyle}>Profiles</h2>
                <button
                    style={toggleButtonStyle}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bg-hover)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--bg-tertiary)';
                    }}
                >
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>

            <div style={profilesListStyle}>
                {profiles.map((profile) => {
                    const isSelected = selectedProfile?.id === profile.id;
                    return (
                        <div
                            key={profile.id}
                            style={profileCardStyle(isSelected)}
                            onClick={() => onSelectProfile(profile)}
                            onMouseEnter={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = 'var(--bg-hover)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }
                            }}
                        >
                            <div style={profileHeaderStyle}>
                                <span style={profileIconStyle}>{profile.icon}</span>
                                {!isCollapsed && (
                                    <div style={profileInfoStyle}>
                                        <div style={profileNameStyle}>{profile.name}</div>
                                        <div style={profileDescStyle}>{profile.description}</div>
                                    </div>
                                )}
                            </div>
                            {!isCollapsed && (
                                <div style={profileMetaStyle}>
                                    <span style={metaTagStyle}>{profile.model}</span>
                                    <span style={metaTagStyle}>{profile.language}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProfilePanel;
