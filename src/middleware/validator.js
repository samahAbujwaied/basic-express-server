module.exports = person = (userName)=>{
return(req,res,next)=>{
    
    if(typeof userName == 'string'){
        req.personName = userName;
        next();
    }
    else
    next(`sorry the input not string : ' ${userName} '`)
}
}