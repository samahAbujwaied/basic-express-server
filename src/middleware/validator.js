module.exports = person = (req,res,next)=>{

    let userName = req.query.userName;
    if(typeof userName == 'string' && !userName.length<=0){
        req.personName = userName;
        next();
    }
    else
    next(`sorry the input not string : ' ${userName} '`)

}
