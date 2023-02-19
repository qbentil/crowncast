import Image from "next/image";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
 import { motion } from "framer-motion";
interface Props {
  setImageURI: any;
  setImage: any;
}

const Uploader = ({ setImageURI, setImage }: Props) => {
  const onImageChange = (e: any) => {
    const file = e.target.files[0];
    // accept only image files
    if (!file.type.match("image.*")) {
      return toast.error("Please select an image file");
    }
    // accept only files less than or equal to 5mb
    if(file.size > 5242880) {
      return toast.error("File size must be less than 5mb");
    }
    console.log("file", file);
    setImageURI(file);
    setImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
    
  };


  const Button = ({title, onClick}: {title: string, onClick?: () => void}) => {
    return (
      <motion.button whileHover={{scale:1.02}} onClick={onClick} className="bg-[#0360C5] shadow-lg text-white rounded-full w-[9rem] h-[2.5rem] hover:bg-[#024c9b]">
        {title}
      </motion.button>
    )
  }

  const ref: any = useRef(null);

  const openFileExplorer = () => {
    ref.current.click();
  };

  return (
    <article className="w-full h-full">
      <label
      ref={ref}
        htmlFor="file-upload"
        className="w-full h-full flex flex-col justify-center items-center bg-[#f8f6f6] rounded-3xl cursor-pointer border-2 border-[#6B79F3] border-dashed p-10"
      >
        <div className="flex flex-col justify-center items-center ">
          <Image
            alt="image upload"
            height={150}
            objectFit="contain"
            src={require("../../public/assets/upload-image.png")}
          />
          <p className="mb-2 text-sm text-center text-black">
              Browse and choose the cheque you want to upload
          </p>
         <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 items-center justify-between mt-6 px-4">
            <Button onClick={openFileExplorer} title="Browse Image"/>
         </div>


        </div>
        <input
          ref={ref}
          id="file-upload"
          name="imageURI"
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => onImageChange(e)}
        />
      </label>
    </article>
  );
};

export default Uploader;
