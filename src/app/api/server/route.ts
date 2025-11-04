import type { NextApiRequest, NextApiResponse } from 'next';

let messages: string[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;
    if (typeof message === 'string' && message.trim() !== '') {
      messages.push(message);
      // Limit messages stored for simplicity
      if (messages.length > 50) messages.shift();
      res.status(201).json({ status: 'Message received' });
    } else {
      res.status(400).json({ error: 'Invalid message' });
    }
  } else if (req.method === 'GET') {
    // Return all messages for polling client
    res.status(200).json(messages);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
