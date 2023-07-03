const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(logger)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.status(200).render('index', {
        title: 'Expressme',
        }
    ));

const userRouter = require('./routes/users');
app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}



app.listen(port, () => console.log(`Expressme listening on port ${port}!`));
