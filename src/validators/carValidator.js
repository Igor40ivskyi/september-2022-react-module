import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only букви'
    }),

    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'minimum 1',
        'number.max': 'max One Million',
        'number.base':'ONLY DIGITS'

    }),

    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
})

export {carValidator};