const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
    // Correct the condition to check for Bearer token
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) { // Fixed `.startsWith` method
        token = authHeader.split(" ")[1]; // Extract the token part

        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        try {
            // Verify the token using the JWT_SECRET
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode; // Attach decoded payload to the request
            //console.log("The decoded user is:", req.user);
            next(); // Pass control to the next middleware
        } catch (err) {
            // Handle token verification errors
            return res.status(400).json({ message: "Token is not valid" });
        }
    } else {
        return res.status(401).json({ message: "Authorization header missing or invalid" });
    }
};

module.exports = verifyToken;
