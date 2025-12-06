import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SettingsProps {
    isConnected: boolean;
}

/**
 * Settings View
 * Configure application preferences and API settings
 */
function Settings({ isConnected }: SettingsProps): React.ReactElement {
    const [activeTab, setActiveTab] = useState<string>('general');
    const [apiKey, setApiKey] = useState<string>('');
    const [theme, setTheme] = useState<string>('dark');
    const [notifications, setNotifications] = useState<boolean>(true);
    const [autoSave, setAutoSave] = useState<boolean>(true);

    const containerStyle: React.CSSProperties = {
        padding: '2rem',
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

    const tabsStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '2px solid var(--border-subtle)',
        paddingBottom: '0'
    };

    const tabButtonStyle = (isActive: boolean): React.CSSProperties => ({
        padding: '1rem 1.5rem',
        background: 'transparent',
        color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
        border: 'none',
        borderBottom: `3px solid ${isActive ? 'var(--accent-blue)' : 'transparent'}`,
        fontSize: '0.938rem',
        fontWeight: isActive ? '600' : '500',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        marginBottom: '-2px'
    });

    const sectionStyle: React.CSSProperties = {
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        marginBottom: '2rem'
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-subtle)'
    };

    const settingRowStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 0',
        borderBottom: '1px solid var(--border-subtle)'
    };

    const settingInfoStyle: React.CSSProperties = {
        flex: 1
    };

    const settingLabelStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.25rem'
    };

    const settingDescStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.5'
    };

    const inputStyle: React.CSSProperties = {
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem',
        minWidth: '300px'
    };

    const toggleStyle = (isOn: boolean): React.CSSProperties => ({
        width: '56px',
        height: '32px',
        background: isOn ? 'var(--accent-blue)' : 'var(--bg-tertiary)',
        borderRadius: '16px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        border: `2px solid ${isOn ? 'var(--accent-blue)' : 'var(--border-subtle)'}`
    });

    const toggleKnobStyle = (isOn: boolean): React.CSSProperties => ({
        width: '24px',
        height: '24px',
        background: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: '2px',
        left: isOn ? '26px' : '2px',
        transition: 'var(--transition-fast)',
        boxShadow: 'var(--shadow-sm)'
    });

    const selectStyle: React.CSSProperties = {
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem',
        minWidth: '200px',
        cursor: 'pointer'
    };

    const buttonStyle: React.CSSProperties = {
        padding: '0.75rem 1.5rem',
        background: 'var(--accent-gradient)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.938rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        transition: 'var(--transition-fast)'
    };

    const dangerButtonStyle: React.CSSProperties = {
        ...buttonStyle,
        background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    };

    const connectionStatusStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        background: isConnected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
        border: `1px solid ${isConnected ? '#10B981' : '#EF4444'}`,
        borderRadius: 'var(--radius-md)',
        color: isConnected ? '#10B981' : '#EF4444',
        fontSize: '0.875rem',
        fontWeight: '600'
    };

    const tabs = [
        { id: 'general', label: 'General' },
        { id: 'api', label: 'API Keys' },
        { id: 'appearance', label: 'Appearance' },
        { id: 'advanced', label: 'Advanced' }
    ];

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div style={headerStyle}>
                <h1 style={titleStyle}>Settings</h1>
                <p style={subtitleStyle}>
                    Customize your AI assistant experience
                </p>
            </div>

            <div style={tabsStyle}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        style={tabButtonStyle(activeTab === tab.id)}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === 'general' && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={sectionStyle}>
                        <h2 style={sectionTitleStyle}>General Settings</h2>
                        
                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Enable Notifications</div>
                                <div style={settingDescStyle}>
                                    Receive notifications for important events and responses
                                </div>
                            </div>
                            <div
                                style={toggleStyle(notifications)}
                                onClick={() => setNotifications(!notifications)}
                            >
                                <div style={toggleKnobStyle(notifications)} />
                            </div>
                        </div>

                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Auto-Save Conversations</div>
                                <div style={settingDescStyle}>
                                    Automatically save all conversations to history
                                </div>
                            </div>
                            <div
                                style={toggleStyle(autoSave)}
                                onClick={() => setAutoSave(!autoSave)}
                            >
                                <div style={toggleKnobStyle(autoSave)} />
                            </div>
                        </div>

                        <div style={{...settingRowStyle, borderBottom: 'none'}}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Connection Status</div>
                                <div style={settingDescStyle}>
                                    Current API connection status
                                </div>
                            </div>
                            <div style={connectionStatusStyle}>
                                {isConnected ? '● Connected' : '○ Disconnected'}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'api' && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={sectionStyle}>
                        <h2 style={sectionTitleStyle}>API Configuration</h2>
                        
                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>OpenAI API Key</div>
                                <div style={settingDescStyle}>
                                    Enter your OpenAI API key for GPT-4 access
                                </div>
                            </div>
                            <input
                                type="password"
                                placeholder="sk-..."
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                style={inputStyle}
                            />
                        </div>

                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Claude API Key</div>
                                <div style={settingDescStyle}>
                                    Enter your Anthropic API key for Claude access
                                </div>
                            </div>
                            <input
                                type="password"
                                placeholder="sk-ant-..."
                                style={inputStyle}
                            />
                        </div>

                        <div style={{...settingRowStyle, borderBottom: 'none'}}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Gemini API Key</div>
                                <div style={settingDescStyle}>
                                    Enter your Google Gemini API key
                                </div>
                            </div>
                            <input
                                type="password"
                                placeholder="AIza..."
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <button
                                style={buttonStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                }}
                            >
                                Save API Keys
                            </button>
                            <button
                                style={{ ...buttonStyle, background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
                            >
                                Test Connection
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'appearance' && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={sectionStyle}>
                        <h2 style={sectionTitleStyle}>Appearance</h2>
                        
                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Theme</div>
                                <div style={settingDescStyle}>
                                    Choose your preferred color theme
                                </div>
                            </div>
                            <select
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                                style={selectStyle}
                            >
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>

                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Font Size</div>
                                <div style={settingDescStyle}>
                                    Adjust the interface font size
                                </div>
                            </div>
                            <select style={selectStyle}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>

                        <div style={{...settingRowStyle, borderBottom: 'none'}}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Compact Mode</div>
                                <div style={settingDescStyle}>
                                    Reduce spacing for a more compact layout
                                </div>
                            </div>
                            <div
                                style={toggleStyle(false)}
                                onClick={() => {}}
                            >
                                <div style={toggleKnobStyle(false)} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'advanced' && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={sectionStyle}>
                        <h2 style={sectionTitleStyle}>Advanced Settings</h2>
                        
                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Debug Mode</div>
                                <div style={settingDescStyle}>
                                    Enable detailed logging for troubleshooting
                                </div>
                            </div>
                            <div
                                style={toggleStyle(false)}
                                onClick={() => {}}
                            >
                                <div style={toggleKnobStyle(false)} />
                            </div>
                        </div>

                        <div style={settingRowStyle}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Export Data</div>
                                <div style={settingDescStyle}>
                                    Download all your conversations and settings
                                </div>
                            </div>
                            <button style={buttonStyle}>Export</button>
                        </div>

                        <div style={{...settingRowStyle, borderBottom: 'none'}}>
                            <div style={settingInfoStyle}>
                                <div style={settingLabelStyle}>Clear All Data</div>
                                <div style={settingDescStyle}>
                                    Permanently delete all conversations and settings
                                </div>
                            </div>
                            <button style={dangerButtonStyle}>Clear Data</button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default Settings;
