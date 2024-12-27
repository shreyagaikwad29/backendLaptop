const {z} = require("zod");

//! creating of an object schema
const SignupSchema = z.object({
    name : z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),
    email : z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Inavalid email address"})
    .min(3, {message: "Email must be at least 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),
    mobile : z
    .string({required_error: "Mobile is required"})
    .trim()
    .regex(/^[0-9]{10}$/,  {message: "Mobile must be at least 10 characters"} )
    .max(10, {message: "Mobile must not be more than 10 characters"}),
    password : z
    .string({required_error: "Password is required"})
    .trim()
    .min(6, {message: "Password must be at least 6 characters"})
    .max(1024, {message: "Password must not be more than 1024 characters"}),
});

const LoginSchema = z.object({
    email : z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Inavalid email address"})
    .min(3, {message: "Email must be at least 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),
    password : z
    .string({required_error: "Password is required"})
    .trim()
    .min(6, {message: "Password must be at least 6 characters"})
    .max(1024, {message: "Password must not be more than 1024 characters"}),
});

module.exports = {SignupSchema, LoginSchema};