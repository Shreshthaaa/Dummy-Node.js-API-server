const axios = require('axios');
const fs = require('fs');
const path = require('path');

const fetchAndStoreData = async () => {
    const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

    try {
        const response = await axios.get(url);
        const data = response.data;

        const filePath = path.join(__dirname, '..', 'data', 'dummyData.json');
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        console.log('Data fetched and stored successfully.');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

module.exports = { fetchAndStoreData };