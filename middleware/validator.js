//express validator 
const {check, validationResult} = require('express-validator')

const acceptedCategory = ['entertainment', 'political', 'tech']
const validator = [
    check('title').trim().not().isEmpty().withMessage('Title is required'),
    check('content').trim().not().isEmpty().withMessage('Body must have content'), 
    check('category').isIn(acceptedCategory).withMessage('Select at least one category')
]

const result = (req, res, next) => {
    const result = validationResult(req)
    const hasError = !result.isEmpty()

    if(hasError){
        const error = result.array()[0].msg
        res.json({success:false, message:error})
    }
    next()
}

module.exports = {
    validator, 
    result
}