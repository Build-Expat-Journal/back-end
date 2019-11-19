const Users = require('../users/users-model.js');


module.exports={
    validateUser
}

function validateUser(user){
    let errors = [];

    if (user.username === null){
        errors.push('Please create a username.')
    }

    if (user.name === null){
        errors.push('Please add a name.')
    }

    if (user.password === null){
        errors.push('Please create a password.')
    }

    if (user.email === null){
        errors.push('Please create a email.')
    }

    // Users.findBy(user.username) { 
    //     if(Users.username){
    //     errors.push('That username already exists.')
    // }}

    return {
        isSuccessful: errors.length > 0 ? false:true,
        errors
    }
}