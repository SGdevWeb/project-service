const services = require('../service/services')

const create = async (req, res) => {
    // console.log(req.body)

    const newComment = await services.comment.create(req.body)
    try {
        console.log('try create commentController')
        if (newComment.error) throw newComment.error
        console.log('newComment', newComment)
        return res.status(201).json(newComment)
    } catch(error) {
        return res.status(500).json( error )
    }
}

const getAll = async (req, res) => {

    const allComments = await services.comment.getAll()
    try {
        if (allComments.error) throw allComments.error
        return res.status(200).json(allComments)
    } catch(error) {
        return res.status(500).json( error )
    }
}

const getByProjectId = async (req, res) => {
    console.log(req.params)

    const comments = await services.comment.getByProjectId(req.params)
    try {
        if (comments.error) throw comments.error
        return res.status(200).json(comments)
    } catch(error) {
        return res.status(500).json( error )
    }
}

const update = async (req, res) => {
    // console.log('body controller', req.body)

    const updatedComment = await services.comment.update(req.body)
    try {
        if (updatedComment.error) throw updatedComment.error
        return res.status(200).json(updatedComment)
    } catch(error) {
        return res.status(500).json( error )
    }
}

module.exports = {
    create,
    getAll,
    update,
    getByProjectId,
}