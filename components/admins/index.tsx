import { OptionType } from '../../interfaces'
import React from "react";
import SubHeader from "./table/subpage-header";
import Table from "./table";
import { AdminTableColumns } from '../../utils/data';


const tableData = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone_number: '08012345678',
    role: 'Super Admin',
    status: 'Active',
  },
  {
    name: 'Betty Doe',
    email: 'bettydoe@example.com',
    phone_number: '08012345678',
    role: 'Admin',
    status: 'Active',
  }
]

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs ${status.toLowerCase() === 'active' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      {status}
    </span>
  )
}


const Admins = () => {

  const onEdit = (item: any) => {
    console.log("Edit>>>", item)
  }

  const onDelete = (item: any) => {
    console.log("Delete>>>", item)
  }

  const onView = (item: any) => {
    console.log("View>>>", item)
  }

  return (
    <div className="w-full">
      {/* table */}
      <Table
        data={tableData}
        columns={AdminTableColumns}
        showFooter={false}
        onEditClick={onEdit}
        onDeleteClick={onDelete}
        onViewClick={onView}
        tableClasses={'w-full'}
        tableContainerClasses={'text-md'}
      />
    </div>
  );
};

export default Admins;
