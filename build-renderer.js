const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
    entryPoints: [path.join(__dirname, 'src', 'index.tsx')],
    bundle: true,
    outfile: path.join(__dirname, 'dist', 'renderer.js'),
    platform: 'browser',
    target: ['es2020'],
    loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
        '.css': 'css'
    },
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV !== 'production',
    external: ['electron'],
    define: {
        'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`
    }
}).then(() => {
    console.log('✓ React app bundled successfully');
}).catch((err) => {
    console.error('Build failed:', err);
    process.exit(1);
});
