const Comment = require('../model/commentModel');
const { v4: uuidv4 } = require('uuid');

const create = async ({ comment, uuid_user, uuid_project, avatar, username }) => {
    const newComment = new Comment({
        uuid: uuidv4(),
        comment,
        uuid_user,
        uuid_project,
        avatar,
        username
    })
    // console.log('newComment service', newComment)
    try {
        const savedComment = await newComment.save()
        return { success: savedComment }
    } catch(error) {
        return { error }
    }
}

const getAll = async () => {
    const comments = await Comment.find()
    try {
        if (comments.error) throw error
        return { success: comments }
    } catch(error) {
        return { error }
    }
}

const getByProjectId = async ({id}) => {
    const comments = await Comment.find({uuid_project: id})
    try {
        if (comments.error) throw error
        return { success: comments }
    } catch(error) {
        return { error }
    }
}

const update = async ({comment, uuid_user, uuid}) => {

    const findedComment = await Comment.findOne({uuid})
    // console.log('findedComment', findedComment)
    try {
        if (!findedComment) throw error
        if (findedComment.uuid_user !== uuid_user) throw error
        const updatedComment = await Comment.updateOne({ uuid },{comment})
        // console.log(updatedComment)
        if (!updatedComment) throw error
        return { success: 'Commentaire modifié'}
    } catch(error) {
        return { error }
    }
}

module.exports = {
    create,
    getAll,
    update,
    getByProjectId,
}