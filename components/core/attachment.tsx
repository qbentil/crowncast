import React, { useState } from 'react';
import { IoDocumentAttachOutline } from 'react-icons/io5'; // Import the icon you are using
import Modal from '../modal'; // Adjust the import path as needed

interface Props {
    file: string;
    fileName?: string;
    preview?: boolean
}

const Attachment: React.FC<Props> = ({ file, fileName, preview }) => {
    const [showPreview, setShowPreview] = useState(false);

    const handlePreview = () => {
        preview && setShowPreview(true);
    };

    return (
        <>
            <div 
                className="p-2 rounded bg-primary-100 cursor-pointer flex items-center w-max" 
                onClick={handlePreview}
            >
                <IoDocumentAttachOutline className="text-primary text-2xl" />
                {fileName && (
                    <span className="ml-2 text-gray-800">{fileName}</span>
                )}
            </div>
            {preview && showPreview && (
                <Modal
                    title={fileName ?? "Attachment Preview"}
                    onClose={() => setShowPreview(false)}
                    isOpen={preview && showPreview}
                    size="lg"
                >
                    <div className="flex justify-center items-center">
                        {file.startsWith('data:image/') ? (
                            <img src={file} alt={fileName} className="max-w-full max-h-96 rounded-lg" />
                        ) : file.endsWith('.pdf') ? (
                            <embed src={file} type="application/pdf" className="w-full h-96 rounded-lg" />
                        ) : (
                            <p className="text-gray-600">Preview not available for this file type.</p>
                        )}
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Attachment;
