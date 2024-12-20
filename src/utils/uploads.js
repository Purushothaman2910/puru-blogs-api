import { v2 as cloudinary } from 'cloudinary'
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import {CloudConfigs} from '../Cloudinary/conf.js'
import multer from 'multer'

cloudinary.config({
    cloud_name : CloudConfigs.CLOUD_NAME ,
    api_key : CloudConfigs.API_KEY ,
    api_secret : CloudConfigs.API_SECRET 
})

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads', // Folder in Cloudinary
      allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed image formats
    },
  });

export async function deletImage(publicId){
  const result = await cloudinary.uploader.destroy(publicId);
  if(result.result !== 'ok'){
    return false;
  }
  return true;
}

export const upload = multer({ storage });