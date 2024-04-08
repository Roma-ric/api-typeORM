import { Request, Response } from 'express';
import { upload } from '../routes/multer';
import multer from 'multer';
import { Image } from '../entities/Image';
import { AppDataSource } from '../data-source';

export const uploadImage = async (req: Request, res: Response) => {
  upload(req, res, async (err: any) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading image', error: err });
    }

    try {
      const imagePath = req.file?.path;
      const imageRepository = AppDataSource.getRepository(Image);

      const newImage = imageRepository.create({ imagePath });

      const savedImage = await imageRepository.save(newImage);

      return res.status(200).json({
        message: 'Image uploaded successfully',
        imagePath: savedImage.imagePath 
      });
    } catch (error) {
      console.error('Error saving image to database:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
};
