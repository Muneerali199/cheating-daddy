import React, { ReactNode, useState, useEffect } from 'react';
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
 * Mobile responsive with collapsible sidebar
 */
function AppShell({ children, activeView, onNavigate, isConnected }: AppShellProps): React.ReactElement {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const appShellStyle: React.CSSProperties = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        position: 'relative'
    };

    const mainContainerStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: isMobile ? '100%' : 'auto'
    };

    const contentAreaStyle: React.CSSProperties = {
        flex: 1,
        overflow: 'auto',
        padding: isMobile ? '1rem' : '1.5rem',
        background: 'var(--bg-primary)'
    };

    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 998,
        display: isMobile && isMobileMenuOpen ? 'block' : 'none',
        backdropFilter: 'blur(4px)'
    };

    const handleNavigate = (view: string) => {
        onNavigate(view);
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div style={appShellStyle}>
            <div 
                style={overlayStyle} 
                onClick={() => setIsMobileMenuOpen(false)}
            />
            <Sidebar 
                activeView={activeView} 
                onNavigate={handleNavigate}
                isMobile={isMobile}
                isOpen={isMobileMenuOpen}
            />
            <div style={mainContainerStyle}>
                <TopBar 
                    activeView={activeView} 
                    isConnected={isConnected}
                    onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    isMobile={isMobile}
                />
                <div style={contentAreaStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AppShell;
