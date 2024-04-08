import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'

const app = express();
const PORT = process.env.PORT || 5000
config();

app.use(express.json());
app.use(cors());

const users = [
    {
        id: "1",
        username: "Smith",
        password: "111"
    },
    {
        id: "2",
        username: "Peter",
        password: "222"
    },
];

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.SECERT_ACCESS_TOKEN, { expiresIn: '5s' })
}

const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.SECERT_REFRESH_TOKEN)
}


const auth = (req, res, next) => {
    const authHeaders = req.headers.authorization;
    const accessToken = authHeaders && authHeaders.split(' ')[1];

    if (!accessToken) return res.sendStatus(401);

    jwt.verify(accessToken, process.env.SECERT_ACCESS_TOKEN, (err, user) => {
        if (err) res.sendStatus(403)

        req.user = user;
        next()
    })
}


app.get('/list', auth, (req, res) => {
    res.json(users.find(u => u.username === req.user.username))
});

let refreshTokens = []

app.post('/refresh', (req, res) => {
    console.log(req.body)
    const refreshToken = req.body.token;

    if (refreshToken === null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.SECERT_REFRESH_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);

        refreshTokens = refreshTokens.filter(token => token !== req.body.token);

        delete user.iat;

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);
        refreshTokens.push(newRefreshToken);

        res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });

    })
})

app.post('/login', (req, res) => {

    const user = users.find(u => u.username === req.body.username);
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);

    res.json({ user, accessToken, refreshToken });

})


app.listen(PORT, () => console.log(`server is listening on http://localhost:${PORT}`));

