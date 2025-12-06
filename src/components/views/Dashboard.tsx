import React from 'react';
import { motion } from 'framer-motion';
import { Profile, Message } from '../../App';
import QuickActions from '../ui/QuickActions';
import SessionPanel from '../ui/SessionPanel';
import ProfilePanel from '../ui/ProfilePanel';

interface DashboardProps {
    selectedProfile: Profile | null;
    profiles: Profile[];
    messages: Message[];
    onSendMessage: (content: string) => void;
    onSelectProfile: (profile: Profile) => void;
    isConnected: boolean;
}

/**
 * Dashboard Component
 * Main dashboard view with quick actions, session panel, and profile panel
 * Mobile responsive with stacked layout
 */
function Dashboard({ 
    selectedProfile, 
    profiles, 
    messages, 
    onSendMessage, 
    onSelectProfile,
    isConnected 
}: DashboardProps): React.ReactElement {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dashboardStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '1rem' : '1.5rem',
        height: '100%',
        overflow: isMobile ? 'auto' : 'hidden'
    };

    const mainContentStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1rem' : '1.5rem',
        flex: 1,
        minHeight: 0
    };

    const centerColumnStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '1rem' : '1.5rem',
        minWidth: 0,
        minHeight: isMobile ? '400px' : 0
    };

    return (
        <motion.div
            style={dashboardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <QuickActions />
            
            <div style={mainContentStyle}>
                <div style={centerColumnStyle}>
                    <SessionPanel
                        selectedProfile={selectedProfile}
                        messages={messages}
                        onSendMessage={onSendMessage}
                        isConnected={isConnected}
                    />
                </div>
                
                <ProfilePanel
                    profiles={profiles}
                    selectedProfile={selectedProfile}
                    onSelectProfile={onSelectProfile}
                />
            </div>
        </motion.div>
    );
}

export default Dashboard;
