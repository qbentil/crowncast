"use client";

import Button from '../core/button';
import { TableComponent } from '@/components/table';
import { TableIcon } from './icons';
import { exampleColumns } from '@/components/table/columns';
import { objToStr } from '@/helpers/object';
import toasts from '@/utils/toasts';
import { useState } from 'react';

export default function TableExample() {
    const [metadata, setMetadata] = useState({
        page: 1, totalCount: 50, isFetching: false, pageSize: 10
    })
    const onSelect = (item: any) => {
        console.log(item);
        toasts.info("Row Clicked", objToStr(item));
    };

    const handleEdit = (item: any) => {
        console.log(item);
        toasts.info("Edited", objToStr(item));
    };

    const handleDelete = (item: any) => {
        console.log(item);
        toasts.info("Deleted", objToStr(item));
    };
    const onView = (item: any) => {
        console.log(item);
        toasts.info("Viewed", objToStr(item));
    }

    const paginationHandler = (action: 'first' | 'last' | 'next' | 'prev') => {
        const totalPages = Math.ceil(metadata.totalCount / 10);
    
        switch (action) {
            case 'first':
                setMetadata({
                    ...metadata,
                    page: 1
                });
                break;
    
            case 'last':
                setMetadata({
                    ...metadata,
                    page: totalPages
                });
                break;
    
            case 'next':
                if (metadata.page < totalPages) {
                    setMetadata({
                        ...metadata,
                        page: metadata.page + 1
                    });
                }
                break;
    
            case 'prev':
                if (metadata.page > 1) {
                    setMetadata({
                        ...metadata,
                        page: metadata.page - 1
                    });
                }
                break;
    
            default:
                break;
        }
    };
    
    

    const Actions = () => {
        return (
            <div className='flex items-center gap-4'>
                {
                    <Button variant="outline" className='gap-2 border-[#03204c] text-[#03204c]'>
                        <TableIcon icon="download" />
                        Download
                    </Button>
                }
                {
                    <Button variant="outline" className='gap-2 border-[#03204c] text-[#03204c]'>
                        <TableIcon icon="filter" />
                        Filter
                    </Button>
                }
            </div>
        )
    }
    return (
        <TableComponent
            data={[
                {
                    _id: "123",
                    name: "A",
                    description: "Hello again"
                },
                {
                    _id: "456",
                    name: "B",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "C",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "D",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "E",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "F",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "G",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "H",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "I",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "J",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "K",
                    description: "Hello again"
                },
                {
                    _id: "12322",
                    name: "L",
                    description: "Hello again"
                },
            ]}
            showFooter
            columns={exampleColumns}
            onRowClick={onSelect}
            tableContainerClasses={"h-full w-full"}
            filterRender={<Actions />}
            actions={[
                {
                    element: <Button
                        key="edit"
                        variant="primary"
                    >
                        Edit
                    </Button>,
                    onClick: (rowData: any) => handleEdit(rowData),
                },
                {
                    element: <Button
                        key="edit"
                        variant="outline"
                    >
                        Delete
                    </Button>,
                    onClick: (rowData: any) => handleDelete(rowData),
                },
            ]}
            metadata={metadata}
            onFirst={() => paginationHandler("first")}
            onPrev={() => paginationHandler("prev")}
            onNext={() => paginationHandler("next")}
            onLast={() => paginationHandler("last")}

        />
    )
}