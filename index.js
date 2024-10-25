const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ time: currentTime });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
