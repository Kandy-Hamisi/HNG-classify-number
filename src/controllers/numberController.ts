import { Request, Response } from 'express';
import { classifyNumber } from '../services/numberService';

export const getNumberClassification = async (req: Request, res: Response): Promise<void> => {
    const { number } = req.query;

    // Input validation
    if (!number || isNaN(Number(number))) {
        res.status(400).json({ number: number || 'undefined', error: true });
        return; // Ensure the function exits
    }

    const num = parseInt(number as string, 10);

    try {
        const result = await classifyNumber(num);
        res.status(200).json(result); // Send the response
    } catch (error) {
        console.error('Error in getNumberClassification:', error); // Log the error for debugging
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
