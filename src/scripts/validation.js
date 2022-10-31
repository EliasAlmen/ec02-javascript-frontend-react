export const validate = (e, form = null) => {
   if (e.type === 'submit') {
    const errors = {}
    errors.userName = validate_name_length(form.userName)
    errors.userEmail = validate_email(form.userEmail)
    errors.userComment = validate_comments(form.userComment)
    return errors

   } else {
        const {id, value} = e.target
        switch(id) {
            case 'userName':
                return validate_name_length(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
        }
   }
}


const validate_name_length = (value) => {
    const regEx_valid_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    const regEx_white_space = /^\s/
    
    if (!value)
        return 'You must enter a name'
    else if (regEx_white_space.test(value))
        return 'Your name cannot start with a whitespace'
    else if (value.length < 2)
        return 'Your name must be at least two characters long'
    else if (!regEx_valid_name.test(value))
        return 'Your name cannot contain numbers or special characters'
    else
        return null
}


const validate_email = (value) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'You must enter a email adress'
    else if (!regex_email.test(value))
        return 'You must enter a valid email adress (eg. name@domain.com)'
    else
        return null
}

const validate_comments = (value) => {
    if (!value)
        return 'You must enter a comment'
    else if (value.length < 5)
        return 'Your comment must be at least five characters long'
    else
        return null
}