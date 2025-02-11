import {body} from 'express-validator'

export const registerValidation =[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:4}).withMessage('Password too short'),
    body('name').notEmpty().withMessage('Name required')
]

export const loginValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password required')
]
<<<<<<< HEAD
=======




>>>>>>> dd119fccd3b466aee8bd1f158d15e1804132adf9
//..