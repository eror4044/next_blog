import axios from "axios";
export const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default"); 
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_CLOUDINARY_URL as string, 
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.log(error);
  }
};
