const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

esbuild.build({
    entryPoints: [path.join(__dirname, 'src', 'index.tsx')],
    bundle: true,
    outfile: path.join(__dirname, 'public', 'app.js'),
    platform: 'browser',
    target: ['es2020'],
    loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
        '.css': 'css'
    },
    minify: true,
    sourcemap: false,
    define: {
        'process.env.NODE_ENV': '"production"'
    }
}).then(() => {
    console.log('✓ React web app bundled successfully');
    
    // Copy CSS to public
    const cssPath = path.join(__dirname, 'src', 'App.css');
    const cssDestPath = path.join(publicDir, 'app.css');
    if (fs.existsSync(cssPath)) {
        fs.copyFileSync(cssPath, cssDestPath);
        console.log('✓ CSS copied to public directory');
    }
}).catch((err) => {
    console.error('Build failed:', err);
    process.exit(1);
});
