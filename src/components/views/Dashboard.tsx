import React from 'react';
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
 */
function Dashboard({ 
    selectedProfile, 
    profiles, 
    messages, 
    onSendMessage, 
    onSelectProfile,
    isConnected 
}: DashboardProps): React.ReactElement {
    const dashboardStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        height: '100%'
    };

    const mainContentStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1.5rem',
        flex: 1,
        minHeight: 0
    };

    const centerColumnStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        minWidth: 0
    };

    return (
        <div style={dashboardStyle}>
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
        </div>
    );
}

export default Dashboard;
