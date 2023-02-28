const postComment = async () => {
    const newComment = new Comment({
        comment: req.body.comment,
        uuid_user: req.body.uuid_user
        // uuid_projet: req.body.uuid_projet
    })
    try {
        const savedComment = await newComment.save()
        return { success: savedComment }
    } catch(error) {
        return { error }
    }
}