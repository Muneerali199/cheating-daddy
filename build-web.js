const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

// Determine if running from src directory (Vercel) or root
const isVercel = __dirname.endsWith('src') || fs.existsSync(path.join(__dirname, 'index.tsx'));
const rootDir = isVercel ? __dirname : path.join(__dirname, 'src');
const publicDir = isVercel ? path.join(__dirname, '..', 'public') : path.join(__dirname, 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

esbuild.build({
    entryPoints: [path.join(rootDir, 'index.tsx')],
    bundle: true,
    outfile: path.join(publicDir, 'app.js'),
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
    const cssPath = path.join(rootDir, 'App.css');
    const cssDestPath = path.join(publicDir, 'app.css');
    if (fs.existsSync(cssPath)) {
        fs.copyFileSync(cssPath, cssDestPath);
        console.log('✓ CSS copied to public directory');
    }
}).catch((err) => {
    console.error('Build failed:', err);
    process.exit(1);
});
