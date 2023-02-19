import React from "react";
import ImageBox from "./imageBox";
import Uploader from "./uploader";

interface Props {
  image?: string;
  setImage?: any;
  setImageURI?: any;
  className?: string;
}

const ImageUploader = ({image, setImage, setImageURI, className}: Props) => {
  return (
    <div className={className}>
      {image ? (
        <ImageBox setImage={setImage} imageURI={image} setImageURI={setImageURI} />
      ) : (
        <Uploader setImageURI={setImageURI} setImage={setImage} />
      )}
    </div>
  );
};

export default ImageUploader;
