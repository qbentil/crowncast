import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { IoDocumentAttachOutline } from "react-icons/io5";
import Modal from '../modal';
import { cn } from '@/lib/utils';

interface FileUploadProps {
    maxFiles?: number; // Optional prop to control the maximum number of files, default is 1
    handleUploadedFiles: (fileNames: string[]) => void; // Prop function to handle uploaded file names
    classNames?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ maxFiles = 1, handleUploadedFiles, classNames }) => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<boolean>(false);
    const [previewFile, setPreviewFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles) return;

        const fileArray = Array.from(selectedFiles);
        if (files.length + fileArray.length <= maxFiles) {
            setFiles((prevFiles) => [...prevFiles, ...fileArray]);
        }
    };

    const removeFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const showPreview = (file: File) => {
        setPreview(true);
        setPreviewFile(file);
    };

    useEffect(() => {
        // Convert files to their respective file names and pass to the parent component
        const fileNames = files.map(file => file.name);
        handleUploadedFiles(fileNames);
    }, [files, handleUploadedFiles]);

    return (
        <>
            <div className="w-full space-y-4">
                <div className="space-y-2 w-full">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border border-neutral-300 rounded-lg p-4"
                        >
                            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => showPreview(file)}>
                                <div className="p-2 rounded bg-purple-100">
                                    <IoDocumentAttachOutline className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <p className="font-medium">{file.name}</p>
                                    <p className="text-text text-sm">File size: {(file.size / (1024 * 1024)).toFixed(1)} MB</p>
                                </div>
                            </div>
                            <button className='text-sm text-text hover:underline' onClick={() => removeFile(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                {files.length < maxFiles && (
                    <div
                        className={cn("flex flex-col gap-y-4 border-2 border-neutral-300  text-center rounded-lg cursor-pointer w-full p-4", classNames)}
                        onClick={handleUploadClick}
                    >
                        <AiOutlineCloudUpload className="text-secondary font-light mx-auto text-4xl" />
                        <p className="text-neutral-500">Drag & drop files or <span className="text-secondary font-normal">Browse</span></p>
                        <p className="text-neutral-500 text-sm">Supported formats: PNG, JPEG, PDF  Maximum size: 25MB</p>
                        <input
                            type="file"
                            accept=".png,.jpeg,.jpg,.pdf,.xlsx,.docx"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            className="hidden"
                        />
                    </div>
                )}

                
            </div>

            {previewFile && (
                <Modal
                    title={`${previewFile.name}`}
                    onClose={() => setPreview(false)}
                    isOpen={preview}
                    size='lg'
                >
                    <div className="flex justify-center items-center">
                        {previewFile.type.startsWith('image/') ? (
                            <img src={URL.createObjectURL(previewFile)} alt={previewFile.name} className="max-w-full max-h-96 rounded-lg" />
                        ) : previewFile.type === 'application/pdf' ? (
                            <embed src={URL.createObjectURL(previewFile)} type="application/pdf" className="w-full h-96 rounded-lg" />
                        ) : (
                            <p className="text-gray-600">Preview not available for this file type.</p>
                        )}
                    </div>
                </Modal>
            )}
        </>
    );
};

export default FileUpload;
