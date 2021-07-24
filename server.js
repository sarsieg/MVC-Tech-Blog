const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// set up handlebars.js engine instance with custom helpers
const hbs = exphbs({ helpers });

const sess = {
    // requires to sign the session ID cookie
    secret: 'Mary goes robblin with marigold goblins',
    // specifies number (ms) to use when calculating expires set cookie attribue this is the session id cookie
    cookie: { maxAge: null },
    resave: false,
    // forces a session to be saved to the store
    saveUninitialized: true,
    // the session store instance, defualts to a new memorystore instance
    store: new SequelizeStore({
        // connect the sequelize instance with express and sessions
        db: sequelize
    })
};

// creates a middleware for our session object
// this will also have access to the route events the user triggers
app.use(session(sess));

// inform express.js on which template engine to use
app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}!`));
});