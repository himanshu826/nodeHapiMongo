const Joi = require('@hapi/joi');
const UniversalFunctions = require('../Utils/UniversalFunctions');
const Controller = require('../Controllers');
const Config = require('../Config');

module.exports = [
    {
        method: 'POST',
        path: '/user/userRegisteration',
        config: {
            handler: async function (request, h) {
                try {
                    const register = await Controller.UserController.userRegisteration(request.payload)
                    return (UniversalFunctions.sendSuccess(null, register))
                } catch (err) {
                    return (UniversalFunctions.sendError(err));
                }
            },
            description: 'user register ',
            notes: 'sign up api',
            tags: ['api', 'user'],
            validate: {
                payload: {
                    name: Joi.string().optional(),
                    countryCode: Joi.string().optional(),
                    phoneNumber: Joi.number().optional(),
                    password: Joi.string().required(),
                    email: Joi.string().required(),
                    deviceToken: Joi.string().optional(),
                },
                failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form',
                    responses: Config.APP_CONSTANTS.swaggerDefaultResponseMessages
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/user/login',
        config: {
            handler: async function (request, h) {
                try {
                    console.log("request.payloadrequest.payload", request.payload)
                    const loginUser = await Controller.UserController.login(request.payload)
                    return (UniversalFunctions.sendSuccess(null, loginUser))
                } catch (err) {
                    console.log("errerr", err)
                    return (UniversalFunctions.sendError(err));
                }
            },
            description: 'Login',
            notes: 'sign up api',
            tags: ['api', 'user'],
            validate: {
                payload: {
                    email: Joi.string().min(1).max(140).lowercase().required(),
                    password: Joi.string().min(1).max(140).required(),
                    deviceToken: Joi.string().min(1).max(300).optional(),
                    location: Joi.object().keys({
                        adminArea: Joi.string().min(1).max(200).optional(),
                        country: Joi.string().min(1).max(200).optional(),
                        countryCode: Joi.string().min(1).max(200).optional(),
                        feature: Joi.string().min(1).max(200).optional(),
                        formattedAddress: Joi.string().min(1).max(200).optional(),
                        locality: Joi.string().min(1).max(200).optional(),
                        postalCode: Joi.string().min(1).max(200).optional(),
                        streetName: Joi.string().min(1).max(200).optional(),
                        streetNumber: Joi.string().min(1).max(200).optional(),
                        subAdminArea: Joi.string().min(1).max(200).optional(),
                        subLocality: Joi.string().min(1).max(200).optional(),
                        position:Joi.object().keys({
                            lng:Joi.number().max(500).optional(),
                            lat:Joi.number().max(500).optional(),
                        }),
                        
                    })
                },
                failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    // payloadType : 'form',
                    responses: Config.APP_CONSTANTS.swaggerDefaultResponseMessages
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/user/channel',
        config: {
            handler: async function (request, h) {
                try {
                    console.log("request.payloadrequest.payload", request.payload)
                    const channel = await Controller.UserController.channel(request.payload)
                    return (UniversalFunctions.sendSuccess(null, channel))
                } catch (err) {
                    console.log("errerr", err)
                    return (UniversalFunctions.sendError(err));
                }
            },
            description: 'channel',
            notes: 'sign up api',
            tags: ['api', 'user'],
            validate: {
                payload: {
                    channelId: Joi.string().optional(),
                    skip: Joi.string().default(0).optional(),
                    limit:Joi.string().default(20).optional(),
                },
                failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    payloadType : 'form',
                    responses: Config.APP_CONSTANTS.swaggerDefaultResponseMessages
                }
            }
        }
    },


]