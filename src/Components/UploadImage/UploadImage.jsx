import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { handleUploadImage, updateUser } from '../../services/user';

function UploadImage({ id }) {
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleClick = async (avatar) => {
    const uploadedImage = await handleUploadImage(avatar, image);
    updateUser(id, { avatar: uploadedImage });
  };
  return (
    <div>
      <table style={{ display: 'flex', flexDirection: 'column' }}>
        <td><input type="file" name="avatar" id="file" accept="image/*" onChange={handleChange} size="30" /></td>
        <td>
          <button type="button" onClick={handleClick} className="btn-appointment">
            Cargar imagen
          </button>
        </td>
      </table>
    </div>
  );
}
UploadImage.propTypes = {
  id: PropTypes.string,
};
UploadImage.defaultProps = {
  id: '',
};
export default UploadImage;
