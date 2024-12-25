import { CloseSquare } from 'iconsax-react'
import React from 'react'

interface ModalProps {
    onClose: ((() => void) | ((item: any) => void))
    title: string
    children: React.ReactNode
    isOpen: boolean
    footer?: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
}

const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
}

const Modal: React.FC<ModalProps> = ({ onClose, title, children, isOpen, footer, className, size = "md" }) => {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out">
            <div className={`max-h-[80vh] relative w-full ${sizeClasses[size]} bg-white rounded-lg shadow-lg p-6 overflow-hidden transform transition-all duration-500 ease-in-out ${className} m-8 overflow-y-auto`}>
                {/* Close button */}
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-secondary"
                    onClick={onClose}
                >
                    <CloseSquare className="h-8 w-8" />
                </button>
                {/* Title */}
                <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-gray-light capitalize">{title}</h2>
                {/* Modal content */}
                <div className="mb-4">
                    {children}
                </div>
                {/* Footer */}
                {footer && (
                    <div className="mt-8 w-full">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal
