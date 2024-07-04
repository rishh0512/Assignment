import React, { useState } from 'react';
import { TiImage } from 'react-icons/ti';
import { MdDeleteOutline } from 'react-icons/md';
import { LuUploadCloud } from 'react-icons/lu';

const ImageUploader = () => {
  const [images, setImages] = useState({
    coverImage: null,
    productImages: [],
  });

  const ImageUploaderStyle = {
    imageUploaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      width: '100%',
      maxWidth:'600px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
    },
    imageUpload: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
     
    },
    label: {
      cursor: 'pointer',
    },
    iconButton: {
      background: '#ffffff',
      border: '1px solid #000000',
      borderRadius: '4px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagePlaceholder: {
      width: '100%',
      height: '300px',
      border: '1px dashed #ccc',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '20px',
    },
    imagePlaceholderIcon: {
      width: '70px',
      height: '70px',
      color: '#0c8ce9',
      borderRadius: '8px',
    },
  };

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'cover') {
          setImages((prevState) => ({
            ...prevState,
            coverImage: reader.result,
          }));
        } else {
          setImages((prevState) => ({
            ...prevState,
            productImages: [...prevState.productImages, reader.result],
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (type) => {
      setImages((prevState) => ({
        ...prevState,
        coverImage: null,
      }));
  };

  return (
    <div style={ImageUploaderStyle.imageUploaderContainer}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={ImageUploaderStyle.imageUpload}>
          {images.coverImage ? (
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={images.coverImage}
                alt="Cover Image"
                style={{ maxWidth: '100%', maxHeight: '80%', borderRadius: '8px', padding: '20px', margin: 'auto' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <button
                  style={ImageUploaderStyle.iconButton}
                >
                  <LuUploadCloud style={{ width: '20px', height: '20px', color: '#000000' }} />
                </button>
                <button
                  onClick={() => handleImageDelete('cover')}
                  style={ImageUploaderStyle.iconButton}
                >
                  <MdDeleteOutline style={{ width: '20px', height: '20px', color: '#000000' }} />
                </button>
              </div>
            </div>
          ) : (
            <label>
              <input
                type="file"
                onChange={(e) => handleImageUpload(e, 'cover')}
                style={{ display: 'none' }}
              />
              <div
                style={ImageUploaderStyle.imagePlaceholder}
              >
                <TiImage
                  style={ImageUploaderStyle.imagePlaceholderIcon}
                />
                <p style={{ fontSize: '16px', margin: '10px 0' }}>Upload Image</p>
                <p>Upload a cover image for your product.</p>
                <p>
                  File Format <strong>jpeg, png</strong> Recommended Size <strong>600x600</strong> (1:1)
                </p>
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
