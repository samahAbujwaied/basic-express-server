module.exports = person = (userName)=>{
return(req,res,next)=>{
    req.personName = userName;
    if(typeof userName == 'string'){
       
        next();
    }
    else
    next(`sorry the input not string : ' ${userName} '`)
}
}