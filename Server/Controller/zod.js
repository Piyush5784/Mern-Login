const zod = require('zod');

const format = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
})

module.exports = format;