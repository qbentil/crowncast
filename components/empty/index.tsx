import Button from '../core/button'
import Image from 'next/image'
import React from 'react'

interface NoRecordsFoundProps {
    entity: string
    onCreate?: () => void
    buttonText?: string
    icon?: React.ReactNode
}

const NoRecordsFound: React.FC<NoRecordsFoundProps> = ({
    entity,
    onCreate,
    buttonText = `Create ${entity}`,
    icon
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 max-w-md mx-auto">
            {/* Icon */}
            <div className="mb-4">
                {icon ?? <Image src="/assets/empty.svg" width={200} height={200} alt="Empty" />}
            </div>
            {/* Message */}
            <p className="text-text text-sm mb-4 capitalize">
                {`No ${entity} yet? let's create one!`}
            </p>

            {
                onCreate && <div className="min-w-1/2 mx-auto">
                    <Button onClick={onCreate} variant='primary'>
                        {buttonText}
                    </Button>
                </div>
            }
        </div>
    )
}

export default NoRecordsFound
