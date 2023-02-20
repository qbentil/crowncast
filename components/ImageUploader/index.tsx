import React from "react";
import ImageBox from "./imageBox";
import Uploader from "./uploader";
import { Interface } from "readline";

interface Props {
  image?: string | null,
  setImage?: React.Dispatch<React.SetStateAction<string | null | undefined>>,
  setImageURI?: React.Dispatch<React.SetStateAction<string | null | undefined>>,
  className?: string  
}

const ImageUploader = ({image, setImage, setImageURI, className}:Props) => {
  return (
    <div className={className}>
      {image ? (
        <ImageBox setImage={setImage} imageURI={image} />
      ) : (
        <Uploader setImageURI={setImageURI} setImage={setImage} />
      )}
    </div>
  );
};

export default ImageUploader;
