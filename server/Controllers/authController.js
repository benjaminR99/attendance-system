const usersDB = {
    users: require('../Model/users.json'),
    setUsers: function (data) { this.users = data; }
};
const jwt = require('jsonwebtoken');
const fsPromises = require('fs').promises;
const path = require('path');

const login = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = usersDB.users.find(person => (person.username).toLowerCase() === user.toLowerCase());
    if (!foundUser) return res.status(401).json({ "message": "Username not found" });

    const match = pwd === foundUser.password;
    if (match) {
        // Create JWTs
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        // Saving refreshToken with current user
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);

        try {
            await fsPromises.writeFile(
                path.join(__dirname, '..', 'Model', 'users.json'),
                JSON.stringify(usersDB.users) 
            );
        } catch (err) {
            console.error("Error writing to file", err);
            return res.status(500).json({ "message": "Internal server error" });
        }

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } else {
        res.status(401).json({ "message": "Invalid password" });
    }
};

module.exports = { login };
