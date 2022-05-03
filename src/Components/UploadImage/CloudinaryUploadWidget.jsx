/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateUser } from '../../services/user';

function CloudinaryUploadWidget() {
  const { user } = useSelector((state) => state.user);
  const checkUploadResult = async (resultEvent) => {
    if (resultEvent.event === 'success') {
      updateUser(user._id, { avatar: resultEvent.info.secure_url });
    }
  };
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'mentalhealth',
      uploadPreset: 'mental-health',
      cropping: true,
      showSkipCropButton: false,
    },
    (error, result) => { checkUploadResult(result); },
  );
  const showWidget = (event) => {
    event.preventDefault();
    widget.open();
  };
  useEffect(() => {
  }, [checkUploadResult]);
  return (
    <div id="photo-form-container">
      <button onClick={showWidget} type="button" className="btn-appointment">Cargar imagen</button>
    </div>
  );
}

export default CloudinaryUploadWidget;
