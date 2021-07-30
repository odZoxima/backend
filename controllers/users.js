import {v4 as uuidv4} from "uuid"

let users = []

export const createUser = (req, res) => {
    const user = req.body

    const userId = uuidv4()

    users.push({...user, id: userId})

    res.send(users)
}

export const getUser = (req, res) => {
    res.send(req.body)
}

export const getUserById = (req, res) => {
    const {id} = req.params

    const foundUser = users.find(user => user.id === id)
    
    res.send(foundUser)
}

export const deleteUserById = (req, res) => {
    const {id} = req.params

    users = users.filter(user => user.id !== id)

    res.send(users)
}

export const updateUserById = (req, res) => {
    const {id} = req.params

    const userToBeUpdated = users.find(user => user.id === id)

    const updatedObject = Object.assign(userToBeUpdated, req.body)

    res.send(updatedObject)
}