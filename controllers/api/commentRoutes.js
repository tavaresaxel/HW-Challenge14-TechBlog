const router = require('express').Router();
const { Comment, User, Post } = require('../../models');

router.post('/', async (req, res) => {
    // try {
        const commentData = await Comment.create({...req.body, user_id: req.session.user_id});
        res.status(200).json(commentData)
    // }
    // catch (err) {
    //     res.status(400).json(err);
    // }
});

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User, 
                    attributes: {
                        exclude: ['password']
                    }
                },
                {
                    model: Post
                }
            ],
            
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;