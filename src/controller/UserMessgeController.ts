import { Request, Response } from 'express';
import { UserMessage } from '../models/UserMessge';

export const UserMessageController = {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, text } = req.body;

      const userMessage = await UserMessage.create({ name, email, text });

      res.status(201).json({ message: 'User message added', userMessage });
    } catch (error) {
      console.error('User message added error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserMessage.findAll();

      res.status(200).json(users);
    } catch (error) {
      console.error('Error collect user message:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};
