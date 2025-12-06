import React from 'react';
import { motion } from 'framer-motion';

/**
 * Analytics View
 * View statistics and insights about AI usage
 */
function Analytics(): React.ReactElement {
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

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
    };

    const statCardStyle: React.CSSProperties = {
        padding: '2rem',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        textAlign: 'center'
    };

    const statIconStyle: React.CSSProperties = {
        fontSize: '3rem',
        marginBottom: '1rem'
    };

    const statValueStyle: React.CSSProperties = {
        fontSize: '3rem',
        fontWeight: '700',
        background: 'var(--accent-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.5rem'
    };

    const statLabelStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        fontWeight: '500'
    };

    const chartCardStyle: React.CSSProperties = {
        padding: '2rem',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        marginBottom: '2rem'
    };

    const chartTitleStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '1.5rem'
    };

    const barChartStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '1rem',
        height: '200px',
        padding: '1rem'
    };

    const barStyle = (height: number, color: string): React.CSSProperties => ({
        flex: 1,
        height: `${height}%`,
        background: color === 'blue' ? 'var(--accent-blue)' : 'var(--accent-purple)',
        borderRadius: 'var(--radius-sm)',
        transition: 'var(--transition-smooth)',
        cursor: 'pointer'
    });

    const insightsStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
    };

    const insightCardStyle: React.CSSProperties = {
        padding: '1.5rem',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        borderLeft: '4px solid var(--accent-blue)',
        borderRadius: 'var(--radius-lg)'
    };

    const insightTitleStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.75rem'
    };

    const insightTextStyle: React.CSSProperties = {
        fontSize: '0.938rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6'
    };

    const stats = [
        { icon: '💬', value: '1,248', label: 'Total Conversations', delay: 0 },
        { icon: '⚡', value: '89%', label: 'Response Accuracy', delay: 0.1 },
        { icon: '⏱️', value: '2.3s', label: 'Avg Response Time', delay: 0.2 },
        { icon: '📊', value: '42', label: 'Active Sessions', delay: 0.3 }
    ];

    const weeklyData = [
        { day: 'Mon', value: 65, color: 'blue' },
        { day: 'Tue', value: 78, color: 'purple' },
        { day: 'Wed', value: 90, color: 'blue' },
        { day: 'Thu', value: 73, color: 'purple' },
        { day: 'Fri', value: 85, color: 'blue' },
        { day: 'Sat', value: 45, color: 'purple' },
        { day: 'Sun', value: 38, color: 'blue' }
    ];

    const insights = [
        {
            title: '🎯 Most Active Time',
            text: 'Your peak usage is between 2 PM - 5 PM on weekdays. Consider scheduling important conversations during this time.'
        },
        {
            title: '🚀 Productivity Boost',
            text: 'You\'ve saved an estimated 18 hours this week by using AI assistance for code reviews and documentation.'
        },
        {
            title: '💡 Popular Topics',
            text: 'Your top conversation topics: React development (42%), System Design (28%), Code Reviews (18%), and Research (12%).'
        },
        {
            title: '📈 Growth Trend',
            text: 'Your AI interactions have increased by 34% compared to last month, with higher quality conversations.'
        }
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
                <h1 style={titleStyle}>Analytics</h1>
                <p style={subtitleStyle}>
                    Insights and statistics about your AI usage
                </p>
            </div>

            <div style={gridStyle}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        style={statCardStyle}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: stat.delay }}
                        whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={statIconStyle}>{stat.icon}</div>
                        <div style={statValueStyle}>{stat.value}</div>
                        <div style={statLabelStyle}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                style={chartCardStyle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h2 style={chartTitleStyle}>Weekly Activity</h2>
                <div style={barChartStyle}>
                    {weeklyData.map((day, index) => (
                        <motion.div
                            key={day.day}
                            style={barStyle(day.value, day.color)}
                            initial={{ height: 0 }}
                            animate={{ height: `${day.value}%` }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ transform: 'scale(1.05)' }}
                            title={`${day.day}: ${day.value}%`}
                        />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                    {weeklyData.map(day => (
                        <div key={day.day} style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>
                            {day.day}
                        </div>
                    ))}
                </div>
            </motion.div>

            <h2 style={{ ...chartTitleStyle, marginBottom: '1rem' }}>AI Insights</h2>
            <div style={insightsStyle}>
                {insights.map((insight, index) => (
                    <motion.div
                        key={index}
                        style={insightCardStyle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 4 }}
                    >
                        <h3 style={insightTitleStyle}>{insight.title}</h3>
                        <p style={insightTextStyle}>{insight.text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Analytics;
