import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Session {
    id: string;
    name: string;
    profile: string;
    startTime: Date;
    duration: number;
    messageCount: number;
    status: 'active' | 'paused' | 'completed';
    tags: string[];
}

interface SessionsProps {
    sessions: Session[];
    onCreateSession: () => void;
}

/**
 * Sessions View
 * Manage and view all AI conversation sessions
 */
function Sessions({ sessions: initialSessions, onCreateSession }: SessionsProps): React.ReactElement {
    const [filter, setFilter] = useState<string>('all');
    
    // Mock sessions data
    const mockSessions: Session[] = [
        {
            id: '1',
            name: 'Interview Prep - React Developer',
            profile: 'Interview Copilot',
            startTime: new Date(Date.now() - 3600000),
            duration: 45,
            messageCount: 28,
            status: 'completed',
            tags: ['interview', 'react', 'frontend']
        },
        {
            id: '2',
            name: 'Team Meeting Notes',
            profile: 'Meeting Notes',
            startTime: new Date(Date.now() - 7200000),
            duration: 30,
            messageCount: 15,
            status: 'completed',
            tags: ['meeting', 'notes']
        },
        {
            id: '3',
            name: 'Code Review Session',
            profile: 'Coding Assistant',
            startTime: new Date(),
            duration: 12,
            messageCount: 8,
            status: 'active',
            tags: ['coding', 'review']
        },
        {
            id: '4',
            name: 'Research: AI Ethics',
            profile: 'Research Helper',
            startTime: new Date(Date.now() - 86400000),
            duration: 65,
            messageCount: 42,
            status: 'completed',
            tags: ['research', 'ethics', 'ai']
        }
    ];

    const sessions = initialSessions.length > 0 ? initialSessions : mockSessions;

    const containerStyle: React.CSSProperties = {
        padding: '2rem',
        maxWidth: '1400px',
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    const filterGroupStyle: React.CSSProperties = {
        display: 'flex',
        gap: '0.5rem'
    };

    const filterButtonStyle = (isActive: boolean): React.CSSProperties => ({
        padding: '0.625rem 1.25rem',
        background: isActive ? 'var(--accent-gradient)' : 'var(--bg-tertiary)',
        color: isActive ? 'white' : 'var(--text-secondary)',
        border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        fontSize: '0.875rem',
        fontWeight: '500',
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
        transition: 'var(--transition-fast)',
        boxShadow: 'var(--shadow-md)'
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem'
    };

    const cardStyle: React.CSSProperties = {
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)'
    };

    const cardHeaderStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem'
    };

    const sessionNameStyle: React.CSSProperties = {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem'
    };

    const profileNameStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        color: 'var(--text-secondary)'
    };

    const statusBadgeStyle = (status: string): React.CSSProperties => ({
        padding: '0.25rem 0.75rem',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        background: status === 'active' ? 'rgba(16, 185, 129, 0.2)' : status === 'paused' ? 'rgba(251, 191, 36, 0.2)' : 'rgba(107, 114, 128, 0.2)',
        color: status === 'active' ? '#10B981' : status === 'paused' ? '#FBF36' : '#6B7280',
        border: `1px solid ${status === 'active' ? '#10B981' : status === 'paused' ? '#FBBF24' : '#6B7280'}`
    });

    const statsStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        padding: '1rem 0',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '1rem'
    };

    const statItemStyle: React.CSSProperties = {
        textAlign: 'center'
    };

    const statValueStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        display: 'block'
    };

    const statLabelStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    const tagsStyle: React.CSSProperties = {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
    };

    const tagStyle: React.CSSProperties = {
        padding: '0.25rem 0.625rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)'
    };

    const filteredSessions = sessions.filter(session => {
        if (filter === 'all') return true;
        return session.status === filter;
    });

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div style={headerStyle}>
                <h1 style={titleStyle}>Sessions</h1>
                <p style={subtitleStyle}>
                    Manage and review your AI conversation sessions
                </p>
            </div>

            <div style={toolbarStyle}>
                <div style={filterGroupStyle}>
                    {['all', 'active', 'paused', 'completed'].map((filterType) => (
                        <button
                            key={filterType}
                            style={filterButtonStyle(filter === filterType)}
                            onClick={() => setFilter(filterType)}
                            onMouseEnter={(e) => {
                                if (filter !== filterType) {
                                    e.currentTarget.style.background = 'var(--bg-hover)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (filter !== filterType) {
                                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                                }
                            }}
                        >
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                        </button>
                    ))}
                </div>
                
                <button
                    style={createButtonStyle}
                    onClick={onCreateSession}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                >
                    + New Session
                </button>
            </div>

            <div style={gridStyle}>
                {filteredSessions.map((session, index) => (
                    <motion.div
                        key={session.id}
                        style={cardStyle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={cardHeaderStyle}>
                            <div style={{ flex: 1 }}>
                                <h3 style={sessionNameStyle}>{session.name}</h3>
                                <p style={profileNameStyle}>{session.profile}</p>
                            </div>
                            <div style={statusBadgeStyle(session.status)}>
                                {session.status}
                            </div>
                        </div>

                        <div style={statsStyle}>
                            <div style={statItemStyle}>
                                <span style={statValueStyle}>{session.duration}m</span>
                                <span style={statLabelStyle}>Duration</span>
                            </div>
                            <div style={statItemStyle}>
                                <span style={statValueStyle}>{session.messageCount}</span>
                                <span style={statLabelStyle}>Messages</span>
                            </div>
                            <div style={statItemStyle}>
                                <span style={statValueStyle}>{session.tags.length}</span>
                                <span style={statLabelStyle}>Tags</span>
                            </div>
                        </div>

                        <div style={tagsStyle}>
                            {session.tags.map((tag) => (
                                <span key={tag} style={tagStyle}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Sessions;
