import React from 'react';
import { Message } from '../../App';

interface ChatMessageProps {
    message: Message;
}

/**
 * ChatMessage Component
 * Individual message bubble with styling based on message type
 */
function ChatMessage({ message }: ChatMessageProps): React.ReactElement {
    const isUser = message.type === 'user';
    const isSystem = message.type === 'system';

    const messageContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '0.5rem'
    };

    const messageBubbleStyle: React.CSSProperties = {
        maxWidth: '70%',
        padding: isSystem ? '0.5rem 1rem' : '0.875rem 1.25rem',
        borderRadius: isSystem ? 'var(--radius-md)' : 'var(--radius-lg)',
        background: isSystem 
            ? 'transparent' 
            : isUser 
                ? 'var(--accent-gradient)' 
                : 'var(--bg-card)',
        border: isSystem ? '1px dashed var(--border-subtle)' : '1px solid var(--border-subtle)',
        color: isSystem ? 'var(--text-muted)' : 'var(--text-primary)',
        fontSize: isSystem ? '0.813rem' : '0.938rem',
        lineHeight: '1.6',
        boxShadow: isSystem ? 'none' : 'var(--shadow-sm)',
        fontStyle: isSystem ? 'italic' : 'normal',
        textAlign: isSystem ? 'center' : 'left'
    };

    const timestampStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        color: isUser ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-muted)',
        marginTop: '0.5rem',
        display: 'block'
    };

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    if (isSystem) {
        return (
            <div style={{ ...messageContainerStyle, justifyContent: 'center' }}>
                <div style={messageBubbleStyle}>
                    {message.content}
                </div>
            </div>
        );
    }

    return (
        <div style={messageContainerStyle}>
            <div style={messageBubbleStyle}>
                <div>{message.content}</div>
                <span style={timestampStyle}>
                    {formatTime(message.timestamp)}
                </span>
            </div>
        </div>
    );
}

export default ChatMessage;
