module.exports={
    validatePost
}

function validatePost(post){
    let errors = [];

    if (post.user_id === null){
        errors.push('Please add user_id.')
    }
    if (post.content === null && post.image === null){
        errors.push('Post cannot be empty. Add a comment or picture.')
    }


    return {
        isSuccessful: errors.length > 0 ? false:true,
        errors
    }
}