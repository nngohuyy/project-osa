const PostModel = require('../models/post');

exports.create = async (request, response) => {
  if (!request.body.content || !request.body.title || !request.body.author) {
    return response.status(400).send({
      message: "Post content cannot be empty"
    });
  }

  const post = new PostModel({
    title: request.body.title,
    content: request.body.content,
    author: request.body.author
  });

  await post.save()
    .then(data => {
      response.send({
        message: "Post created successfully",
        data: data
      });
    })
    .catch(error => {
      response.status(500).send({
        message: error.message || "Some error occurred while creating the post."
      });
    });
}
