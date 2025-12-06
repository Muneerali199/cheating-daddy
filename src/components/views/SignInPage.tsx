import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SignInPageProps {
    onSignIn: (email: string, password: string) => void;
    onBackToLanding: () => void;
}

/**
 * Sign In Page Component
 * Beautiful authentication UI with email and password (mock auth, no database)
 */
function SignInPage({ onSignIn, onBackToLanding }: SignInPageProps): React.ReactElement {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            setIsLoading(true);
            // Simulate loading
            setTimeout(() => {
                setIsLoading(false);
                onSignIn(email, password);
            }, 800);
        }
    };

    const containerStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #050816 70%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem'
    };

    const glowStyle: React.CSSProperties = {
        position: 'absolute',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        animation: 'pulse 4s ease-in-out infinite'
    };

    const cardStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-xl)',
        padding: '3rem',
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    };

    const backButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        fontSize: '1.25rem',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        zIndex: 20
    };

    const logoStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem'
    };

    const logoIconStyle: React.CSSProperties = {
        width: '56px',
        height: '56px',
        borderRadius: '14px',
        background: 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: '700',
        color: 'white'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        textAlign: 'center',
        marginBottom: '0.5rem'
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        marginBottom: '2.5rem'
    };

    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
        display: 'block'
    };

    const inputContainerStyle: React.CSSProperties = {
        position: 'relative'
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.875rem 1rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        transition: 'var(--transition-fast)',
        outline: 'none'
    };

    const passwordToggleStyle: React.CSSProperties = {
        position: 'absolute',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '1.25rem',
        padding: '0.25rem'
    };

    const submitButtonStyle: React.CSSProperties = {
        width: '100%',
        padding: '1rem',
        background: 'var(--accent-gradient)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '700',
        cursor: isLoading || !email || !password ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-smooth)',
        opacity: isLoading || !email || !password ? 0.6 : 1,
        boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.4)',
        marginTop: '1rem'
    };

    const dividerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '2rem 0',
        color: 'var(--text-muted)',
        fontSize: '0.875rem'
    };

    const lineStyle: React.CSSProperties = {
        flex: 1,
        height: '1px',
        background: 'rgba(255, 255, 255, 0.1)'
    };

    const socialButtonStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.875rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem'
    };

    const footerTextStyle: React.CSSProperties = {
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        marginTop: '2rem'
    };

    const linkStyle: React.CSSProperties = {
        color: 'var(--accent-blue)',
        textDecoration: 'none',
        fontWeight: '600',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
                }
            `}</style>

            <div style={glowStyle}></div>

            <button
                style={backButtonStyle}
                onClick={onBackToLanding}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                }}
            >
                ←
            </button>

            <motion.div
                style={cardStyle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div style={logoStyle}>
                    <div style={logoIconStyle}>CD</div>
                </div>

                <h1 style={titleStyle}>Welcome Back</h1>
                <p style={subtitleStyle}>Sign in to continue to your dashboard</p>

                <form style={formStyle} onSubmit={handleSubmit}>
                    <div>
                        <label style={labelStyle}>Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={inputStyle}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Password</label>
                        <div style={inputContainerStyle}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                }}
                            />
                            <button
                                type="button"
                                style={passwordToggleStyle}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        style={submitButtonStyle}
                        disabled={isLoading || !email || !password}
                        whileHover={!isLoading && email && password ? { scale: 1.02 } : {}}
                        whileTap={!isLoading && email && password ? { scale: 0.98 } : {}}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </motion.button>
                </form>

                <div style={dividerStyle}>
                    <div style={lineStyle}></div>
                    <span>OR</span>
                    <div style={lineStyle}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button
                        style={socialButtonStyle}
                        onClick={() => onSignIn('google@example.com', 'google-auth')}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <span style={{ fontSize: '1.25rem' }}>🔷</span>
                        Continue with Google
                    </button>

                    <button
                        style={socialButtonStyle}
                        onClick={() => onSignIn('github@example.com', 'github-auth')}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <span style={{ fontSize: '1.25rem' }}>⚫</span>
                        Continue with GitHub
                    </button>
                </div>

                <p style={footerTextStyle}>
                    Don't have an account?{' '}
                    <span style={linkStyle}>Create one</span>
                </p>
            </motion.div>
        </div>
    );
}

export default SignInPage;
