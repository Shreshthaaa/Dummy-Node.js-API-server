const { fetchAndStoreData } = require('./services/dataService');
const fs = require('fs');
const path = require('path');

const checkDataExists = () => {
    const filePath = path.join(__dirname, 'data', 'dummyData.json');
    return fs.existsSync(filePath);
};

if(!checkDataExists()) {
    fetchAndStoreData();
}

require('./server');