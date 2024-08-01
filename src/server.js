const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'dummyData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        let jsonData = JSON.parse(data);

        if (!Array.isArray(jsonData)) {
            jsonData = [jsonData];
        }

        // Filtering by id
        if (req.query.id) {
            const id = req.query.id;
            jsonData = jsonData.filter(item => item.id === id);
        }

        // Filtering by name

        if (req.query.name) {
            const name = req.query.name.toLowerCase();
            jsonData = jsonData.filter(item => item.name.toLowerCase().includes(name));
        }

        // Sorting
        if (req.query.sortBy) {
            const sortKey = req.query.sortBy;
            const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

            jsonData = jsonData.sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return -1 * sortOrder;
                if (a[sortKey] > b[sortKey]) return 1 * sortOrder;
                return 0;
            });
        }

        res.json(jsonData);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
