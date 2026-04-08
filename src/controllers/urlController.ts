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

export const getUrlByCode = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;

    const url = await Url.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    res.status(200).json(url);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const redirectToOriginal = async (req: Request, res: Response) => {
  try {
    const code = req.params.code as string;

    if (!/^[a-zA-Z0-9]{6}$/.test(code)) {
      return res.status(404).json({ message: 'Invalid short code' });
    }

    const url = await Url.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    url.accessCount += 1;
    await url.save();

    res.redirect(url.url);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};