import express from "express";
import newsRoutes from "./routes/news.routes.js";
import fleetRoutes from "./routes/fleet.routes.js";
import weatherRoutes from "./routes/weather.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import trajectoryRoutes from "./routes/trajectory.routes.js";
import submitForm from "./routes/form.routes.js";
import auth from "./routes/auth.routes.js";
import users from "./routes/user.routes.js";
import auditlog from "./services/auditlog/auditlog.routes.js";
import flash from "connect-flash";
import passport from "./lib/passport.js";
import session from "express-session";
//import validator from "express-validator";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: 'tokinhoteamo',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(validator());

// APIs
app.use(auth);
app.use("/api", newsRoutes);
app.use("/api", fleetRoutes);
app.use("/api", weatherRoutes);
app.use("/api", coursesRoutes);
app.use("/api", trajectoryRoutes);
app.use("/api", submitForm);
app.use("/api", users);
app.use("/api", auditlog);

// Static webpage
app.use(express.static('src/static'));

export default app;
