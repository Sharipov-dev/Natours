const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

const getAllUsers = (req, res) => {

};
const createUser = (req, res) => {

};
const deleteUser = (req, res) => {

};
const getUser = (req, res) => {

};

const updateUser = (req, res) => {

};

module.exports = {
    getAllUsers, createUser, deleteUser, getUser, updateUser
}