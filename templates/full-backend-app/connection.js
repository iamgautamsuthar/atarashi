const mongoose = require("mongoose");

const connectMongoDB = async (url) => {
	try {
		await mongoose.connect(url);
		console.log("MongoDB connected");
	} catch (err) {
		console.log(`Error connecting to MongoDB: ${err}`);
	}
};

module.exports = { connectMongoDB };
