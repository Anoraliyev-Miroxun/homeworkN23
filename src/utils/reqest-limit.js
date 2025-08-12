import { rateLimit, ipKeyGenerator } from 'express-rate-limit';


export const requestLimiter = (seconds, limit) => {
    const limiter = rateLimit({
        windowMs: seconds * 1000,
        limit,
        keyGenerator: (req, _) => {
            return ipKeyGenerator(req.ip) || (req.body.username )
        },
        message: {
            status: 429,
            message: "to many request"
        },
        legacyHeaders: true,
        standartHeaders: "draft-6" || "draft-7" || "draft-8"

    });
    return limiter;
}