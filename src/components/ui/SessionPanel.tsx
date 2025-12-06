import React from 'react';
import { Profile, Message } from '../../App';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

interface SessionPanelProps {
    selectedProfile: Profile | null;
    messages: Message[];
    onSendMessage: (content: string) => void;
    isConnected: boolean;
}

/**
 * SessionPanel Component
 * Main session container with profile info and chat interface
 */
function SessionPanel({ selectedProfile, messages, onSendMessage, isConnected }: SessionPanelProps): React.ReactElement {
    const panelStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
        minHeight: '500px'
    };

    const headerStyle: React.CSSProperties = {
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)'
    };

    const headerTitleStyle: React.CSSProperties = {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.75rem'
    };

    const sessionInfoStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginTop: '0.75rem'
    };

    const infoItemStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
    };

    const infoLabelStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    const infoValueStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        color: 'var(--text-primary)',
        fontWeight: '500'
    };

    const chatContainerStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
    };

    return (
        <div style={panelStyle}>
            <div style={headerStyle}>
                <h2 style={headerTitleStyle}>
                    {selectedProfile ? (
                        <>
                            <span style={{ marginRight: '0.5rem' }}>{selectedProfile.icon}</span>
                            {selectedProfile.name}
                        </>
                    ) : (
                        'Active Session'
                    )}
                </h2>
                
                {selectedProfile && (
                    <div style={sessionInfoStyle}>
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>Model</span>
                            <span style={infoValueStyle}>{selectedProfile.model}</span>
                        </div>
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>Language</span>
                            <span style={infoValueStyle}>{selectedProfile.language}</span>
                        </div>
                        <div style={infoItemStyle}>
                            <span style={infoLabelStyle}>API Status</span>
                            <span style={infoValueStyle}>{isConnected ? '✓ Active' : '✗ Inactive'}</span>
                        </div>
                    </div>
                )}
            </div>
            
            <div style={chatContainerStyle}>
                <ChatWindow messages={messages} />
                <MessageInput onSendMessage={onSendMessage} disabled={!isConnected} />
            </div>
        </div>
    );
}

export default SessionPanel;
