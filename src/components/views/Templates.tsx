import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Template {
    id: string;
    name: string;
    description: string;
    category: string;
    content: string;
    icon: string;
    usageCount: number;
}

/**
 * Templates View
 * Manage and use prompt templates
 */
function Templates(): React.ReactElement {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const templates: Template[] = [
        {
            id: '1',
            name: 'Code Review Request',
            description: 'Template for requesting code reviews',
            category: 'development',
            content: 'Please review the following code for best practices, potential bugs, and improvements...',
            icon: '🔍',
            usageCount: 45
        },
        {
            id: '2',
            name: 'Bug Report Analysis',
            description: 'Analyze and suggest fixes for bugs',
            category: 'development',
            content: 'I encountered the following bug: [describe]. Can you help identify the root cause and suggest fixes?',
            icon: '🐛',
            usageCount: 32
        },
        {
            id: '3',
            name: 'Meeting Summary',
            description: 'Summarize meeting notes',
            category: 'productivity',
            content: 'Please summarize the following meeting notes into key points, action items, and decisions...',
            icon: '📝',
            usageCount: 67
        },
        {
            id: '4',
            name: 'Technical Documentation',
            description: 'Generate technical documentation',
            category: 'documentation',
            content: 'Please create comprehensive documentation for the following code/feature...',
            icon: '📚',
            usageCount: 28
        },
        {
            id: '5',
            name: 'Interview Preparation',
            description: 'Practice interview questions',
            category: 'career',
            content: 'I have an interview for [position]. Can you ask me relevant technical questions?',
            icon: '💼',
            usageCount: 53
        },
        {
            id: '6',
            name: 'Research Assistant',
            description: 'Research and summarize topics',
            category: 'research',
            content: 'Please research [topic] and provide a comprehensive summary with key insights...',
            icon: '🔬',
            usageCount: 41
        }
    ];

    const categories = ['all', 'development', 'productivity', 'documentation', 'career', 'research'];

    const containerStyle: React.CSSProperties = {
        padding: '2rem',
        maxWidth: '1400px',
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

    const toolbarStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
    };

    const searchInputStyle: React.CSSProperties = {
        flex: 1,
        minWidth: '300px',
        padding: '0.75rem 1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-primary)',
        fontSize: '0.938rem'
    };

    const categoryGroupStyle: React.CSSProperties = {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
    };

    const categoryButtonStyle = (isActive: boolean): React.CSSProperties => ({
        padding: '0.625rem 1.25rem',
        background: isActive ? 'var(--accent-gradient)' : 'var(--bg-tertiary)',
        color: isActive ? 'white' : 'var(--text-secondary)',
        border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        textTransform: 'capitalize'
    });

    const createButtonStyle: React.CSSProperties = {
        padding: '0.75rem 1.5rem',
        background: 'var(--accent-gradient)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.938rem',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        whiteSpace: 'nowrap'
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem'
    };

    const templateCardStyle: React.CSSProperties = {
        padding: '2rem',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    };

    const templateIconStyle: React.CSSProperties = {
        fontSize: '3rem',
        marginBottom: '0.5rem'
    };

    const templateNameStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem'
    };

    const templateDescStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '1rem'
    };

    const templatePreviewStyle: React.CSSProperties = {
        padding: '1rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        fontFamily: 'monospace',
        lineHeight: '1.5',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical'
    };

    const templateFooterStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border-subtle)'
    };

    const categoryTagStyle: React.CSSProperties = {
        padding: '0.375rem 0.75rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        textTransform: 'capitalize'
    };

    const usageStyle: React.CSSProperties = {
        fontSize: '0.813rem',
        color: 'var(--text-muted)'
    };

    const filteredTemplates = templates.filter(template => {
        const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            template.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <motion.div
            style={containerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div style={headerStyle}>
                <h1 style={titleStyle}>Prompt Templates</h1>
                <p style={subtitleStyle}>
                    Save time with pre-built prompts for common tasks
                </p>
            </div>

            <div style={toolbarStyle}>
                <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={searchInputStyle}
                />
                
                <div style={categoryGroupStyle}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            style={categoryButtonStyle(selectedCategory === category)}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <button
                    style={createButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                >
                    + New Template
                </button>
            </div>

            <div style={gridStyle}>
                {filteredTemplates.map((template, index) => (
                    <motion.div
                        key={template.id}
                        style={templateCardStyle}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={templateIconStyle}>{template.icon}</div>
                        <div>
                            <h3 style={templateNameStyle}>{template.name}</h3>
                            <p style={templateDescStyle}>{template.description}</p>
                        </div>
                        <div style={templatePreviewStyle}>{template.content}</div>
                        <div style={templateFooterStyle}>
                            <span style={categoryTagStyle}>{template.category}</span>
                            <span style={usageStyle}>Used {template.usageCount} times</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Templates;
