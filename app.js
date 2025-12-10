const express = require('express');
require('dotenv').config();

const setupSwagger = require('./swagger');
const industryRoutes = require('./routes/industry.routes');


const app = express();
setupSwagger(app);
app.use(express.json());



app.use('/industry', industryRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port  http://localhost:${PORT}`);
});

module.exports = app;