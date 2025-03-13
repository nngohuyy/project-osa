const uuidv4 = require("uuid").v4;
const PostModel = require("../models/post");

exports.create = async (request, response) => {
  try {
    const {
      title,
      short_description,
      reading_time,
      publisher_id,
      content,
      thumbnail,
      tags
    } = request.body;

    if (!content || !title || !publisher_id) {
      return response.status(400).send({ message: "Post content cannot be empty." });
    }

    const generateSlug = (title) => {
      const formattedTitle = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
      return `${formattedTitle}-${uuidv4().split("-")[0]}`;
    };

    const slug = generateSlug(title);

    const post = new PostModel({
      title,
      short_description,
      reading_time,
      publisher_id,
      slug,
      content,
      thumbnail,
      tags,
    });

    const data = await post.save();
    response.status(201).send({
      message: "Post created successfully.",
      data,
    });

  } catch (error) {
    response.status(500).send({
      message: error.message || "Some error occurred while creating the post.",
    });
  }
}
