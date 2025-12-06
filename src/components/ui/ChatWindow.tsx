import React, { useEffect, useRef } from 'react';
import { Message } from '../../App';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
    messages: Message[];
}

/**
 * ChatWindow Component
 * Scrollable container for chat messages
 */
function ChatWindow({ messages }: ChatWindowProps): React.ReactElement {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const chatWindowStyle: React.CSSProperties = {
        flex: 1,
        overflowY: 'auto',
        padding: '1.5rem',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    };

    const emptyStateStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'var(--text-muted)',
        gap: '0.5rem'
    };

    const emptyIconStyle: React.CSSProperties = {
        fontSize: '3rem',
        opacity: 0.3
    };

    return (
        <div style={chatWindowStyle} ref={scrollRef}>
            {messages.length === 0 ? (
                <div style={emptyStateStyle}>
                    <div style={emptyIconStyle}>💬</div>
                    <p>No messages yet. Start a conversation!</p>
                </div>
            ) : (
                messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))
            )}
        </div>
    );
}

export default ChatWindow;
