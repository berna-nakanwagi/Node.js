//Ensure user is authenticated
exports.ensureAuthenticated = (req, res, next)=>{
    if(req.session.user){
        return next()
    }
    res.redirect('/login')
}

//Ensure user is a manager
exports.ensureManager = (req, res, next)=>{
    if(req.session.user && req.session.user.role === 'manager'){
        return next()
    }
    res.redirect('/')
}

//Ensure user is a salesAgent
exports.ensureSalesAgent = (req, res, next)=>{
    if(req.session.user && req.session.user.role === 'sales-Agent'){
        return next()
    }
    res.redirect('/')
}