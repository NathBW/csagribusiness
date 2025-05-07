// src/utils/cloudinaryUpload.ts
export const uploadFileToCloudinary = async (file: File, uploadPreset = 'csagri') => {
    const url = `https://api.cloudinary.com/v1_1/dlmtzcqui/auto/upload`;
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
  
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });
  
    if (!response.ok) {
      throw new Error('Error al subir archivo a Cloudinary');
    }
  
    const data = await response.json();
    return data.secure_url as string; // Esta es la URL que guardarías en Firestore
  };
  