const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

router.post("/signup", async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).send({ message: "Email already in use" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user object
		const user = new User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});

		// Save the user to the database
		await user.save();

		// Send a success response
		return res.status(400).send({ message: "User Created Seccessfully. Login now." });
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});



router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find the user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).send({ message: "Invalid email or password" });
		}

		// Compare the provided password with the hashed password in the database
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).send({ message: "Invalid email or password" });
		}

		// Generate a JWT
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		// Send the token and success message
		res.status(200).send({ message: "Login successful", token });
	} catch (error) {
		console.error("Error during login:", error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});




module.exports = router;
