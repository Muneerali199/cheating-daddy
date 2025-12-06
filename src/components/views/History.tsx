import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Message } from '../../App';

interface HistoryProps {
    messages: Message[];
}

/**
 * History View
 * Browse and search through all conversation history
 * Mobile responsive with adjusted layout
 */
function History({ messages }: HistoryProps): React.ReactElement {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filterType, setFilterType] = useState<'all' | 'user' | 'ai' | 'system'>('all');
    const [dateFilter, setDateFilter] = useState<string>('all');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mock extended history
    const mockHistory: Message[] = [
        ...messages,
        { id: 100, type: 'user', content: 'How do I implement authentication in React?', timestamp: new Date(Date.now() - 86400000) },
        { id: 101, type: 'ai', content: 'There are several ways to implement authentication in React...', timestamp: new Date(Date.now() - 86400000 + 1000) },
        { id: 102, type: 'user', content: 'What are React hooks?', timestamp: new Date(Date.now() - 172800000) },
        { id: 103, type: 'ai', content: 'React Hooks are functions that let you use state and other React features...', timestamp: new Date(Date.now() - 172800000 + 1000) },
    ];

    const containerStyle: React.CSSProperties = {
        padding: isMobile ? '1rem' : '2rem',
        maxWidth: '1200px',
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

    const timelineStyle: React.CSSProperties = {
        position: 'relative',
        paddingLeft: isMobile ? '1rem' : '2rem'
    };

    const timelineLineStyle: React.CSSProperties = {
        position: 'absolute',
        left: isMobile ? '0.5rem' : '1rem',
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'linear-gradient(180deg, var(--accent-blue) 0%, var(--accent-purple) 100%)'
    };

    const messageCardStyle = (type: string): React.CSSProperties => ({
        position: 'relative',
        marginBottom: '1.5rem',
        padding: '1.5rem',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        borderLeft: `4px solid ${type === 'user' ? 'var(--accent-blue)' : type === 'ai' ? 'var(--accent-purple)' : 'var(--text-muted)'}`
    });

    const messageHeaderStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.75rem'
    };

    const messageTypeStyle = (type: string): React.CSSProperties => ({
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        color: type === 'user' ? 'var(--accent-blue)' : type === 'ai' ? 'var(--accent-purple)' : 'var(--text-muted)',
        letterSpacing: '0.05em'
    });

    const messageTimeStyle: React.CSSProperties = {
        fontSize: '0.813rem',
        color: 'var(--text-muted)'
    };

    const messageContentStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        color: 'var(--text-primary)',
        lineHeight: '1.6'
    };

    const dotStyle = (type: string): React.CSSProperties => ({
        position: 'absolute',
        left: '-1.625rem',
        top: '1.5rem',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: type === 'user' ? 'var(--accent-blue)' : type === 'ai' ? 'var(--accent-purple)' : 'var(--text-muted)',
        border: '3px solid var(--bg-primary)',
        boxShadow: '0 0 0 3px var(--bg-secondary)'
    });

    const statsStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
    };

    const statCardStyle: React.CSSProperties = {
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        textAlign: 'center'
    };

    const statValueStyle: React.CSSProperties = {
        fontSize: '2.5rem',
        fontWeight: '700',
        background: 'var(--accent-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.5rem'
    };

    const statLabelStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        color: 'var(--text-secondary)'
    };

    const filteredMessages = mockHistory.filter(msg => {
        const matchesSearch = msg.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'all' || msg.type === filterType;
        return matchesSearch && matchesType;
    });

    const totalMessages = mockHistory.length;
    const userMessages = mockHistory.filter(m => m.type === 'user').length;
    const aiMessages = mockHistory.filter(m => m.type === 'ai').length;

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div style={headerStyle}>
                <h1 style={titleStyle}>Conversation History</h1>
                <p style={subtitleStyle}>
                    Browse and search through all your AI conversations
                </p>
            </div>

            <div style={statsStyle}>
                <div style={statCardStyle}>
                    <div style={statValueStyle}>{totalMessages}</div>
                    <div style={statLabelStyle}>Total Messages</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statValueStyle}>{userMessages}</div>
                    <div style={statLabelStyle}>Your Messages</div>
                </div>
                <div style={statCardStyle}>
                    <div style={statValueStyle}>{aiMessages}</div>
                    <div style={statLabelStyle}>AI Responses</div>
                </div>
            </div>

            <div style={toolbarStyle}>
                <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={searchInputStyle}
                />
                
                <div style={filterGroupStyle}>
                    {(['all', 'user', 'ai', 'system'] as const).map((type) => (
                        <button
                            key={type}
                            style={filterButtonStyle(filterType === type)}
                            onClick={() => setFilterType(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div style={timelineStyle}>
                <div style={timelineLineStyle} />
                
                {filteredMessages.map((message, index) => (
                    <motion.div
                        key={message.id}
                        style={messageCardStyle(message.type)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <div style={dotStyle(message.type)} />
                        
                        <div style={messageHeaderStyle}>
                            <span style={messageTypeStyle(message.type)}>
                                {message.type}
                            </span>
                            <span style={messageTimeStyle}>
                                {message.timestamp.toLocaleString()}
                            </span>
                        </div>
                        
                        <div style={messageContentStyle}>
                            {message.content}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default History;
