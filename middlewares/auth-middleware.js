const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    // Check if the token is provided
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized. Token not provided.",
        });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("Token from auth middleware:", jwtToken);
    console.log("Authorization Header:", req.header("Authorization"));
    console.log("Extracted Token:", jwtToken);

    try {
        if (!jwtToken || jwtToken.split('.').length !== 3) {
            return res.status(400).json({
                message: "Malformed token",
            });
        }
        // Verify the JWT token
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log("Token verification successful:", isVerified);
        // Fetch user data from the database, excluding the password field
        const userData = await User.findOne({ email: isVerified.email }).select({password:0 });

        // Check if user exists
        if (!userData) {
            return res.status(404).json({
                message: "User not found. Invalid token.",
            });
        }

        // Attach user data to the request object for further use
        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        
        next();
    } catch (error) {
        console.error("Authentication error:", error);

        // Return appropriate error response
        return res.status(401).json({
            message: "Unauthorized. Invalid token.",
            error: error.message,
        });
    }
};

module.exports = authMiddleware;
