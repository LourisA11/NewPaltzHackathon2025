const express = require('express');
const usersRoutes = require('./routes/usersRoutes.js');

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);
console.log('mounted /users');

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
