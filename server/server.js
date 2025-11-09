const express = require('express');
const usersRoutes = require('./routes/usersRoutes.js');
const personalRoutes = require('./routes/personalRoutes.js');
const clubRoutes = require('./routes/clubRoutes.js');



const app = express();
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/personal', personalRoutes);
app.use('/club', clubRoutes);




console.log('mounted /users');

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
