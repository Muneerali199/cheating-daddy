import React, { useState, KeyboardEvent } from 'react';

interface MessageInputProps {
    onSendMessage: (content: string) => void;
    disabled?: boolean;
}

/**
 * MessageInput Component
 * Text input area for composing and sending messages
 */
function MessageInput({ onSendMessage, disabled = false }: MessageInputProps): React.ReactElement {
    const [message, setMessage] = useState<string>('');

    const handleSend = () => {
        if (message.trim() && !disabled) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const inputContainerStyle: React.CSSProperties = {
        padding: '1.25rem 1.5rem',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-end'
    };

    const textareaStyle: React.CSSProperties = {
        flex: 1,
        minHeight: '44px',
        maxHeight: '120px',
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem',
        fontFamily: 'inherit',
        resize: 'none',
        transition: 'var(--transition-fast)',
        lineHeight: '1.5'
    };

    const buttonContainerStyle: React.CSSProperties = {
        display: 'flex',
        gap: '0.75rem'
    };

    const buttonStyle: React.CSSProperties = {
        padding: '0.75rem 1.5rem',
        background: 'var(--accent-gradient)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.875rem',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-fast)',
        opacity: disabled ? 0.5 : 1,
        boxShadow: 'var(--shadow-sm)',
        whiteSpace: 'nowrap'
    };

    const secondaryButtonStyle: React.CSSProperties = {
        ...buttonStyle,
        background: 'var(--bg-tertiary)',
        color: 'var(--text-primary)'
    };

    const hintStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        padding: '0.5rem 1rem 0 1rem'
    };

    return (
        <div>
            <div style={inputContainerStyle}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={disabled ? "Disconnected..." : "Type a message or command..."}
                    disabled={disabled}
                    style={textareaStyle}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-blue)';
                        e.currentTarget.style.background = 'var(--bg-primary)';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.background = 'var(--bg-tertiary)';
                    }}
                />
                <div style={buttonContainerStyle}>
                    <button
                        onClick={handleSend}
                        disabled={disabled || !message.trim()}
                        style={buttonStyle}
                        onMouseEnter={(e) => {
                            if (!disabled && message.trim()) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                        }}
                    >
                        Send
                    </button>
                    <button
                        disabled={disabled}
                        style={secondaryButtonStyle}
                        onMouseEnter={(e) => {
                            if (!disabled) {
                                e.currentTarget.style.background = 'var(--bg-hover)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-tertiary)';
                        }}
                    >
                        Run Automation
                    </button>
                </div>
            </div>
            <div style={hintStyle}>
                Press <strong>Enter</strong> to send • <strong>Shift+Enter</strong> for new line
            </div>
        </div>
    );
}

export default MessageInput;
