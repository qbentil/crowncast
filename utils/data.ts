import { TbColumnObj } from "../interfaces/table";

export const convertToKey = (str: string): string => {
  // convert string to lowercase
  // if string has space, remove it replace with underscore
  // example: Full Name => full_name
  const lowerCase = str.toLowerCase();
  const split = lowerCase.split(" ");
  return split.join("_");
}

export const AdminTableColumns = [
  {
    title: 'Name', options: { filter: true, sort: true }
  },
  {
    title: 'Email', options: { filter: true, sort: true }
  },
  {
    title: 'Role', options: { filter: true, sort: true }
  },
  {
    title: "Phone Number", options: { filter: true, sort: true }
  },
  {
    title: "Status", options: {
      filter: true, sort: true,
    }
  },
]


export const ParseToOptions = (data: TbColumnObj[]) => {
  return data.map((item) => {
    return {
      label: item.title,
      value: convertToKey(item.title)
    }
  })
}