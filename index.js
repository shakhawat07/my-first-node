const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const users = [
    {
        "id": 0,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org"
    },
    {
        "id": 1,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net"
    },
    {
        "id": 2,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info"
    }]

app.get('/users', (req, res) => {
    console.log(req.query);
    const search = req.query.search;
    // use query parameter 
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    if (search) {
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log(`Example app listening port`, port);
})
