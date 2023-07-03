const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
    console.log(req.query.username) ||
    res.status(200).send('Users list')
);

router.get('/new', (req, res) =>
    res.status(200).render('new',)
);

router.post('/', (req, res) =>
    console.log(req.body.username) ||
    res.status(200).send('Create user')
);

router
    .route('/:id')
    .get((req, res) =>
        console.log(req.user) ||
        res.status(200).send(`Get user with id ${req.params.id}`)
    )
    .put((req, res) =>
        res.status(200).send(`Update user with id ${req.params.id}`)
    )
    .delete((req, res) =>
        res.status(200).send(`Delete user with id ${req.params.id}`)
    );

const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@email.com',
    },
    {
        id: 2,
        name: 'Jane',
        email: 'jane@email.com',
    },
    {
        id: 3,
        name: 'Jack',
        email: 'jack@email.com',
    }
];

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next();
});

module.exports = router;
