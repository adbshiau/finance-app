const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});