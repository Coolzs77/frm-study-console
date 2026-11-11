const https = require('https');

https.get('https://keyval.org/', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const lines = d.split('\n').filter(l => l.includes('curl') || l.includes('api') || l.includes('http'));
    console.log('Lines found:', lines.slice(0, 10));
  });
});
