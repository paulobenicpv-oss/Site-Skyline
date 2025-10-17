const fs = require('fs');
const paths = ['/', '/portfolio', '/contato'];
const base = 'https://www.skylinestudio.local';
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(p => `<url><loc>${base}${p}</loc></url>`).join('')}
</urlset>`;
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
console.log('sitemap.xml generated');
