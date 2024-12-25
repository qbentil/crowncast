export const exampleColumns = [
    {
        title: 'Name', options: { filter: true, sort: true },
        selector: (row: any) => row.name,
    },
    {
        title: 'Description', options: { filter: true, sort: true },
        selector: (row: any) => row.description,
    },
];


export const partnersColumns = [
    {
        title: 'Name', options: { filter: true, sort: true }
    },
    {
        title: 'ID', options: { filter: true, sort: true }
    },
    {
        title: 'Email', options: { filter: true, sort: true }
    },
    {
        title: 'Account Type', options: { filter: true, sort: true }
    },
    {
        title: 'Status', options: { filter: true, sort: true }
    },
    {
        title: 'Date', options: { filter: true, sort: true }
    },
];