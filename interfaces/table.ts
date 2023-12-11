export interface TbColumnObj {
    title: string;
    dataIndex?: string;
    options: {
        filter: boolean;
        sort: boolean;
        customBodyRender?: (value: any) => JSX.Element;
    }
}