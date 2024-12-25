import { IoDocumentAttachOutline } from "react-icons/io5";

export default function ViewFile({ file }: { file: string; }) {
    return (
        <div
            className="flex items-center justify-between border border-neutral-300 rounded-lg p-4 bg-white"
        >
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => {}}>
                <div className="p-2 rounded bg-purple-100">
                    <IoDocumentAttachOutline className="text-primary text-2xl" />
                </div>
                <div>
                    <p className="font-medium">{file}</p>
                    {/* <p className="text-text text-sm">File size:  MB</p> */}
                </div>
            </div>
            
        </div>
    )
}