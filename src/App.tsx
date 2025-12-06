import React, { useState } from 'react';
import './App.css';
import AppShell from './components/app/AppShell';
import Dashboard from './components/views/Dashboard';

interface Message {
    id: number;
    type: 'user' | 'ai' | 'system';
    content: string;
    timestamp: Date;
}

interface Profile {
    id: number;
    name: string;
    description: string;
    icon: string;
    model: string;
    language: string;
}

/**
 * Main App Component
 * Root of the Cheating Daddy React application
 * Manages global state and routing
 */
function App(): React.ReactElement {
    // Navigation state
    const [activeView, setActiveView] = useState<string>('dashboard');
    
    // Session state
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
    const [isConnected] = useState<boolean>(true);
    
    // Chat messages state
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: 'ai',
            content: 'Hello! I\'m your AI assistant. How can I help you today?',
            timestamp: new Date()
        }
    ]);

    // Mock profiles data
    const profiles: Profile[] = [
        {
            id: 1,
            name: 'Interview Copilot',
            description: 'Perfect for technical interviews and live coding sessions',
            icon: '💼',
            model: 'GPT-4',
            language: 'English'
        },
        {
            id: 2,
            name: 'Meeting Notes',
            description: 'Automatically capture and summarize meeting discussions',
            icon: '📝',
            model: 'Claude 3',
            language: 'English'
        },
        {
            id: 3,
            name: 'Coding Assistant',
            description: 'Real-time code suggestions and debugging help',
            icon: '💻',
            model: 'GPT-4',
            language: 'Multi-language'
        },
        {
            id: 4,
            name: 'Research Helper',
            description: 'Assist with research, fact-checking, and analysis',
            icon: '🔬',
            model: 'Claude 3',
            language: 'English'
        }
    ];

    // Handle sending a message
    const handleSendMessage = (content: string): void => {
        // Add user message
        const userMessage: Message = {
            id: messages.length + 1,
            type: 'user',
            content: content,
            timestamp: new Date()
        };
        
        setMessages([...messages, userMessage]);

        // Simulate AI response after a delay
        setTimeout(() => {
            const aiMessage: Message = {
                id: messages.length + 2,
                type: 'ai',
                content: 'This is a mock AI response. In production, this would connect to your AI service.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
        }, 1000);
    };

    // Handle profile selection
    const handleSelectProfile = (profile: Profile): void => {
        setSelectedProfile(profile);
        
        // Add system message about profile change
        const systemMessage: Message = {
            id: messages.length + 1,
            type: 'system',
            content: `Switched to ${profile.name} profile`,
            timestamp: new Date()
        };
        setMessages([...messages, systemMessage]);
    };

    return (
        <AppShell
            activeView={activeView}
            onNavigate={setActiveView}
            isConnected={isConnected}
        >
            {activeView === 'dashboard' && (
                <Dashboard
                    selectedProfile={selectedProfile}
                    profiles={profiles}
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    onSelectProfile={handleSelectProfile}
                    isConnected={isConnected}
                />
            )}
            
            {activeView === 'sessions' && (
                <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
                    Sessions view - Coming soon
                </div>
            )}
            
            {activeView === 'profiles' && (
                <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
                    Profiles view - Coming soon
                </div>
            )}
            
            {activeView === 'history' && (
                <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
                    History view - Coming soon
                </div>
            )}
            
            {activeView === 'settings' && (
                <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
                    Settings view - Coming soon
                </div>
            )}
        </AppShell>
    );
}

export default App;
export type { Message, Profile };
