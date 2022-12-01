export function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/api/signin');
}


