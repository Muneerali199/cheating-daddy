import React from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
    onGetStarted: () => void;
}

/**
 * Landing Page Component
 * Beautiful hero section with animated features and call-to-action
 */
function LandingPage({ onGetStarted }: LandingPageProps): React.ReactElement {
    const containerStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #050816 50%)',
        position: 'relative',
        overflow: 'hidden'
    };

    const headerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 4rem',
        position: 'relative',
        zIndex: 10
    };

    const logoStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    };

    const logoIconStyle: React.CSSProperties = {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        fontWeight: '700',
        color: 'white'
    };

    const logoTextStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #F9FAFB 0%, #9CA3AF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    const signInButtonStyle: React.CSSProperties = {
        padding: '0.875rem 2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)',
        backdropFilter: 'blur(10px)'
    };

    const heroStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
    };

    const glowStyle: React.CSSProperties = {
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        animation: 'pulse 4s ease-in-out infinite'
    };

    const badgeStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        background: 'rgba(139, 92, 246, 0.1)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        borderRadius: '9999px',
        color: '#C4B5FD',
        fontSize: '0.875rem',
        fontWeight: '600',
        marginBottom: '2rem'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '5rem',
        fontWeight: '800',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
        background: 'linear-gradient(135deg, #F9FAFB 0%, #6366F1 50%, #8B5CF6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        maxWidth: '900px'
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
        maxWidth: '700px',
        lineHeight: '1.6'
    };

    const ctaButtonStyle: React.CSSProperties = {
        padding: '1.25rem 3rem',
        background: 'var(--accent-gradient)',
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        color: 'white',
        fontSize: '1.125rem',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.4)',
        transition: 'var(--transition-smooth)',
        position: 'relative',
        overflow: 'hidden'
    };

    const featuresStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '4rem auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10
    };

    const featureCardStyle: React.CSSProperties = {
        background: 'rgba(17, 24, 39, 0.5)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        transition: 'var(--transition-smooth)'
    };

    const featureIconStyle: React.CSSProperties = {
        width: '56px',
        height: '56px',
        borderRadius: '12px',
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        marginBottom: '1.5rem'
    };

    const featureTitleStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '0.75rem'
    };

    const featureDescStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6'
    };

    const features = [
        {
            icon: '🤖',
            title: 'AI-Powered Assistant',
            description: 'Real-time contextual responses with advanced AI models including GPT-4, Claude, and Gemini'
        },
        {
            icon: '🎯',
            title: 'Smart Profiles',
            description: 'Multiple AI profiles optimized for interviews, meetings, coding, and research scenarios'
        },
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Instant responses with efficient caching and optimized performance for seamless workflow'
        },
        {
            icon: '🔒',
            title: 'Privacy First',
            description: 'Local processing with optional cloud sync. Your data stays secure and private'
        },
        {
            icon: '📊',
            title: 'Session History',
            description: 'Complete conversation logs with powerful search and filtering capabilities'
        },
        {
            icon: '🎨',
            title: 'Beautiful UI',
            description: 'Premium dark-mode interface inspired by Linear and Raycast for distraction-free focus'
        }
    ];

    const footerStyle: React.CSSProperties = {
        padding: '2rem 4rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        position: 'relative',
        zIndex: 10
    };

    return (
        <div style={containerStyle}>
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>

            {/* Animated background glow */}
            <div style={glowStyle}></div>

            {/* Header */}
            <motion.header
                style={headerStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div style={logoStyle}>
                    <div style={logoIconStyle}>CD</div>
                    <span style={logoTextStyle}>Cheating Daddy</span>
                </div>
                <button
                    style={signInButtonStyle}
                    onClick={onGetStarted}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    Sign In
                </button>
            </motion.header>

            {/* Hero Section */}
            <motion.div
                style={heroStyle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    style={badgeStyle}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span>✨</span>
                    <span>Now with GPT-4 & Claude Support</span>
                </motion.div>

                <h1 style={titleStyle}>
                    Your AI Assistant for<br />Every Moment
                </h1>

                <p style={subtitleStyle}>
                    Real-time screen and audio capture with intelligent AI responses. 
                    Perfect for interviews, meetings, coding sessions, and research.
                </p>

                <motion.button
                    style={ctaButtonStyle}
                    onClick={onGetStarted}
                    whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -10px rgba(99, 102, 241, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    Get Started Free
                </motion.button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                style={featuresStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        style={featureCardStyle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{
                            y: -8,
                            borderColor: 'rgba(99, 102, 241, 0.3)',
                            boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.2)'
                        }}
                    >
                        <div style={featureIconStyle}>{feature.icon}</div>
                        <h3 style={featureTitleStyle}>{feature.title}</h3>
                        <p style={featureDescStyle}>{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer */}
            <footer style={footerStyle}>
                <div>© 2024 Cheating Daddy. All rights reserved.</div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <span style={{ cursor: 'pointer' }}>Privacy</span>
                    <span style={{ cursor: 'pointer' }}>Terms</span>
                    <span style={{ cursor: 'pointer' }}>Support</span>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
