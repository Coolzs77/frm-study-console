const https = require('https');

const req = https.request('https://kvdb.io/', { method: 'POST', timeout: 8000 }, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const bucket = data.trim();
    console.log('kvdb bucket created:', res.statusCode, bucket);
    if (bucket && res.statusCode === 201) {
      const putReq = https.request('https://kvdb.io/' + bucket + '/test_account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }, putRes => {
        console.log('put status:', putRes.statusCode);
        https.get('https://kvdb.io/' + bucket + '/test_account', getRes => {
          let getData = '';
          getRes.on('data', c => getData += c);
          getRes.on('end', () => {
            console.log('get status:', getRes.statusCode, 'body:', getData);
          });
        });
      });
      putReq.write(JSON.stringify({ username: 'coolzs', lastUpdated: Date.now() }));
      putReq.end();
    }
  });
});
req.on('error', e => console.error('Error:', e.message));
req.end();
