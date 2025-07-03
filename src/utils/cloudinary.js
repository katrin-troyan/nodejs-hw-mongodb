import { v2 as cloudinary } from 'cloudinary';

import { CLOUDINARY } from '../constants/index.js';
import { getEnvVar } from '../utils/getEnvVar.js';


cloudinary.config({
    cloud_name: getEnvVar(CLOUDINARY.CLOUDINARY_NAME),
    api_key: getEnvVar(CLOUDINARY.CLOUDINARY_API_KEY),
    api_secret: getEnvVar(CLOUDINARY.CLOUDINARY_API_SECRET),
});

export const uploadToCloudinary = async (buffer, filename, folder = 'contacts') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: filename,
        use_filename: true,
        unique_filename: false,
        overwrite: true,

      },
      (error, result) => {
        if (error) {
          console.error(error);
          return reject(error);
        }
        resolve(result.secure_url);
      }
    );

    uploadStream.end(buffer);
  });
};
