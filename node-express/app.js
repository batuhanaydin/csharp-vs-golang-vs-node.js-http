const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
	//console.log(`Incoming Request: /`);
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});