// imports express' router object
const router = require('express').Router();
// point to our index.js within the api folder
const apiRoutes = require('./api');
// imports our home-routes
const homeRoutes = require('./home-routes.js');
// imports dashboard-routes
const dashboardRoutes = require('./dashboard-routes.js');

// directs route variable based on what comes from front end javascript or user
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
// request object contains info about the http request if response doesn't trigger any above actions throw 404
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;