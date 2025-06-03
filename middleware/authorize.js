export const authorize = (policy, resource) => (req, res, next) => {
    const user = req.user;
    if(policy(user, resource)){
        next()
    }else{
        return res.status(403).json({
            status: 403,
            message: "Access denied"
        })
    }
}