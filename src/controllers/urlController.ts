import { Request, Response } from 'express';
import Url from '../models/urlModel.js';
import { generateShortCode } from '../utils/generateShortCode.js';
import validator from 'validator';

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;

    if (!url || !validator.isURL(url)) {
      return res.status(400).json({ message: 'Invalid URL' });
    }

    let shortCode = generateShortCode();
    let existing = await Url.findOne({ shortCode });

    while (existing) {
      shortCode = generateShortCode();
      existing = await Url.findOne({ shortCode });
    }

    const newUrl = await Url.create({
      url,
      shortCode,
    });

    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};