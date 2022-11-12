import express from "express";
import newsRoutes from "./routes/news.routes.js";
import fleetRoutes from "./routes/fleet.routes.js";
import weatherRoutes from "./routes/weather.routes.js";

const app= express();

app.use(express.json());

// APIs
app.use(newsRoutes);
app.use(fleetRoutes);
app.use(weatherRoutes);

// Static webpage
app.use(express.static('static'));

// Port'
const port = 3000;
app.listen(port);
console.log("Server running on port "+port);