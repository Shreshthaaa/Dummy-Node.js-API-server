const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'dummyData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        let jsonData = JSON.parse(data);

        if (!Array.isArray(jsonData)) {
            jsonData = [jsonData];
        }

        // Filtering by all fields
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key) && key !== 'sortBy' && key !== 'sortOrder') {
                jsonData = jsonData.filter(item =>
                    item[key] && item[key].toString().toLowerCase().includes(req.query[key].toLowerCase())
                );
            }
        }


        // Sorting - supports multiple sort fields
        if (req.query.sortBy) {
            const sortKeys = req.query.sortBy.split(',');
            const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

            jsonData = jsonData.sort((a, b) => {
                for (let key of sortKeys) {
                    if (a[key] === undefined || b[key] === undefined) return 0;
                    if (a[key] < b[key]) return -1 * sortOrder;
                    if (a[key] > b[key]) return 1 * sortOrder;
                }
                return 0;
            });
        }


        res.json(jsonData);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
