const os = require('os');
console.log('cpu specifications',os.cpus());

console.log('CPU Architecture:', os.arch());
console.log('System Uptime:', os.uptime() / 3600, 'hours');
console.log('Network Interfaces:', os.networkInterfaces());
