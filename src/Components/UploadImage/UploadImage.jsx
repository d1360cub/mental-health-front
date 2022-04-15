import React, { useState } from 'react';

function UploadImage() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append('file', image);
    const payload = {
      method: 'POST',
      body: formData,
    };
    try {
      const result = await fetch(`${API_URL}/api/upload/image`, payload);
      const data = await result.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div>
      <input type="file" name="file" id="file" accept="image/*" onChange={handleChange} />
      <button type="button" onClick={handleUploadImage}>
        Cargar imagen
      </button>
    </div>
  );
}

export default UploadImage;
