'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
/* global process */
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Helper function to read the database
const readDatabase = () => {
    const data = fs.readFileSync(DB_FILE);
    return JSON.parse(data);
};

// Helper function to write to the database
const writeDatabase = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// CRUD Endpoints

// Create
app.post('/items', (req, res) => {
    let items = readDatabase();
    console.log(items);
    const newItem = req.body;
   //  if(newItem.hasOwnProperty('posts')) {
   //    items.posts = [...items.posts, ...newItem.posts]
   //  }
   //  if(newItem.hasOwnProperty('users')) {
   //    items.users = [...items.users, ...newItem.users]
   //  }
    items.push(newItem)
    writeDatabase(items);
    res.status(201).send(newItem);
});

// Read
app.get('/items', (req, res) => {
    const items = readDatabase();
    res.send(items);
});

app.get('/items/:id', (req, res) => {
    const items = readDatabase();
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.send(item);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

// Update
app.put('/items/:id', (req, res) => {
    const items = readDatabase();
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        items[index] = req.body;
        writeDatabase(items);
        res.send(items[index]);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

// Delete
app.delete('/items/:id', (req, res) => {
    let items = readDatabase();
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        const deletedItem = items.splice(index, 1);
        writeDatabase(items);
        res.send(deletedItem);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;