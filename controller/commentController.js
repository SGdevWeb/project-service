const Comment = require('../model/commentModel');
const commentServices = require('../service/commentService')

const postComment = async (req, res) => {
    console.log(req.body)

    const newComment = new Comment({
        comment: req.body.comment,
        uuid_user: req.body.uuid_user
        // uuid_projet: req.body.uuid_projet
    })
    
    newComment.save()
        .then(() => res.status(201).json({ message: 'Commentaire enregistré' }))
        .catch(error => res.status(500).json({ error }))
}

const getAllComments = async (req, res) => {
    console.log(req.body)

    Comment.find()
        .then((response) => {   
            res.status(200).json({ comments: response})
        })
        .catch(error => {
            res.status(500).json({ error })
        })
}

module.exports = {
    postComment,
    getAllComments
}