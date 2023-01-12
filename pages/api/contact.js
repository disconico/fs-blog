import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.7tdfzvb.mongodb.net/${process.env.DB_KEY}?retryWrites=true&w=majority`;
		try {
			client = await MongoClient.connect(connectionString);
		} catch (err) {
			res.status(500).json({ message: 'Could not connect' });
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Storing message failed!' });
			return;
		}

		client.close();

		console.log(newMessage);
		res.status(201).json({ message: newMessage });
	}
}

export default handler;
