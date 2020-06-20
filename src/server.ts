import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
	response.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
