require('./db.js');
const router = require('./routes');
const cors = require('cors');
const express = require('express');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.listen(port, () => console.log(`Server is starting in port ${port}`));
