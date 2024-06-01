const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const busRoutes = require('./Routes/buses');
const providerRoutes = require('./Routes/providers');
const routeRoutes = require('./Routes/routes');
const bookingRoutes = require('./Routes/bookings');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', busRoutes);
app.use('/api', providerRoutes);
app.use('/api', routeRoutes);
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));

