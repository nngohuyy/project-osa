const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: { type: String, required: true },
	published_at: { type: Date, default: Date.now, required: true },
	short_description: { type: String, required: true },
	reading_time: { type: Number, required: true },
	publisher_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	slug: { type: String, unique: true },
	content: { type: String, required: true },
	thumbnail: { type: String, required: true },
	tags: { type: [String], default: [] },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	views_count: { type: Number, default: 0 },
});

var Post = new mongoose.model('Post', PostSchema);
module.exports = Post;
