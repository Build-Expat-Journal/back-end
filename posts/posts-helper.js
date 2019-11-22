module.exports={
    validatePost
}

function validatePost(postData){
    let errors = [];

    if (postData.user_id === null){
        errors.push('Please add user_id.')
    }
    if (postData.content === null && postData.image === null){
        errors.push('Post cannot be empty. Add a comment or picture.')
    }

    return {
        isSuccessful: errors.length > 0 ? false:true,
        errors
    }
}