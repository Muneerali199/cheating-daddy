import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Profile } from '../../App';

interface ProfilesProps {
    profiles: Profile[];
    selectedProfile: Profile | null;
    onSelectProfile: (profile: Profile) => void;
}

/**
 * Profiles View
 * Manage and customize AI assistant profiles
 */
function Profiles({ profiles, selectedProfile, onSelectProfile }: ProfilesProps): React.ReactElement {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const containerStyle: React.CSSProperties = {
        padding: '2rem',
        maxWidth: '1600px',
        margin: '0 auto'
    };

    const headerStyle: React.CSSProperties = {
        marginBottom: '2rem'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem'
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem'
    };

    const toolbarStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        alignItems: 'center',
        flexWrap: 'wrap'
    };

    const searchInputStyle: React.CSSProperties = {
        flex: 1,
        minWidth: '300px',
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem'
    };

    const viewToggleStyle: React.CSSProperties = {
        display: 'flex',
        gap: '0.5rem',
        padding: '0.25rem',
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)'
    };

    const viewButtonStyle = (isActive: boolean): React.CSSProperties => ({
        padding: '0.5rem 1rem',
        background: isActive ? 'var(--accent-blue)' : 'transparent',
        color: isActive ? 'white' : 'var(--text-secondary)',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'var(--transition-fast)'
    });

    const createButtonStyle: React.CSSProperties = {
        padding: '0.75rem 1.5rem',
        background: 'var(--accent-gradient)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.938rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        whiteSpace: 'nowrap'
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: view === 'grid' ? 'repeat(auto-fill, minmax(320px, 1fr))' : '1fr',
        gap: '1.5rem'
    };

    const profileCardStyle = (isSelected: boolean): React.CSSProperties => ({
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: `2px solid ${isSelected ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)',
        position: 'relative',
        overflow: 'hidden'
    });

    const profileIconStyle: React.CSSProperties = {
        width: '80px',
        height: '80px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-glow)'
    };

    const profileNameStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '0.75rem'
    };

    const profileDescStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '1.5rem'
    };

    const profileMetaStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border-subtle)'
    };

    const metaItemStyle: React.CSSProperties = {
        flex: 1
    };

    const metaLabelStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '0.25rem'
    };

    const metaValueStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        color: 'var(--text-primary)',
        fontWeight: '600'
    };

    const selectedBadgeStyle: React.CSSProperties = {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        padding: '0.5rem 1rem',
        background: 'var(--accent-blue)',
        color: 'white',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        boxShadow: 'var(--shadow-glow)'
    };

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div style={headerStyle}>
                <h1 style={titleStyle}>AI Profiles</h1>
                <p style={subtitleStyle}>
                    Customize and manage your AI assistant personalities
                </p>
            </div>

            <div style={toolbarStyle}>
                <input
                    type="text"
                    placeholder="Search profiles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={searchInputStyle}
                />
                
                <div style={viewToggleStyle}>
                    <button
                        style={viewButtonStyle(view === 'grid')}
                        onClick={() => setView('grid')}
                    >
                        Grid
                    </button>
                    <button
                        style={viewButtonStyle(view === 'list')}
                        onClick={() => setView('list')}
                    >
                        List
                    </button>
                </div>

                <button
                    style={createButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                >
                    + Create Profile
                </button>
            </div>

            <div style={gridStyle}>
                {filteredProfiles.map((profile, index) => {
                    const isSelected = selectedProfile?.id === profile.id;
                    return (
                        <motion.div
                            key={profile.id}
                            style={profileCardStyle(isSelected)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                            onClick={() => onSelectProfile(profile)}
                        >
                            {isSelected && <div style={selectedBadgeStyle}>Active</div>}
                            
                            <div style={profileIconStyle}>
                                {profile.icon}
                            </div>
                            
                            <h3 style={profileNameStyle}>{profile.name}</h3>
                            <p style={profileDescStyle}>{profile.description}</p>
                            
                            <div style={profileMetaStyle}>
                                <div style={metaItemStyle}>
                                    <div style={metaLabelStyle}>Model</div>
                                    <div style={metaValueStyle}>{profile.model}</div>
                                </div>
                                <div style={metaItemStyle}>
                                    <div style={metaLabelStyle}>Language</div>
                                    <div style={metaValueStyle}>{profile.language}</div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default Profiles;
