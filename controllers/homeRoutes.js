const router = require('express').Router();

router.get('/', async (req,res) => {
    try{
        res.render('homepage', {loggedIn: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
