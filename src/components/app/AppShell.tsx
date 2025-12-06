import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface AppShellProps {
    children: ReactNode;
    activeView: string;
    onNavigate: (view: string) => void;
    isConnected: boolean;
}

/**
 * AppShell Component
 * Main application layout wrapper with sidebar and top bar
 */
function AppShell({ children, activeView, onNavigate, isConnected }: AppShellProps): React.ReactElement {
    const appShellStyle: React.CSSProperties = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: 'var(--bg-primary)'
    };

    const mainContainerStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    };

    const contentAreaStyle: React.CSSProperties = {
        flex: 1,
        overflow: 'auto',
        padding: '1.5rem',
        background: 'var(--bg-primary)'
    };

    return (
        <div style={appShellStyle}>
            <Sidebar activeView={activeView} onNavigate={onNavigate} />
            <div style={mainContainerStyle}>
                <TopBar activeView={activeView} isConnected={isConnected} />
                <div style={contentAreaStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AppShell;
