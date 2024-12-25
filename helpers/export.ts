import * as XLSX from 'xlsx';

/**
 * Converts a field name (e.g., OrderInfo.CustomerName) to snake_case (e.g., order_info_customer_name).
 * 
 * @param field - The original field name with dot notation.
 * @returns The formatted field name in snake_case.
 */
const formatHeader = (field: string): string => {
  return field
    .replace(/\./g, '_') // Replace dots with underscores
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Add underscores between camelCase words
    .toLowerCase(); // Convert to lowercase
};

/**
 * Exports data to an Excel file based on the selected fields, with formatted headers.
 * 
 * @param data - The array of data objects fetched from the API.
 * @param selectedFields - The array of selected fields to include in the Excel export.
 * @param fileName - The name of the generated Excel file (optional, defaults to 'export.xlsx').
 */
export const __exportDataToExcel = (
    data: Record<string, any>[],
    selectedFields: string[],
    fileName = 'export'
) => {
    // Filter the data based on selected fields
    const filteredData = data.map((item) => {
        const filteredItem: Record<string, any> = {};
        selectedFields.forEach((field) => {
            const fieldParts = field.split('.'); // Handles nested fields
            let value = item;

            // Resolve the value of nested fields
            fieldParts.forEach((part) => {
                if (value && typeof value === 'object') {
                    value = value[part];
                }
            });

            // If the value is null or undefined, set it to 'NULL'
            filteredItem[field] = value !== undefined && value !== null ? value : 'NULL';
        });
        return filteredItem;
    });

    // Map selected fields to formatted headers to ensure no duplication
    const headerMap: Record<string, string> = {};
    selectedFields.forEach((field) => {
        headerMap[field] = formatHeader(field);
    });

    // Convert filtered data to worksheet with explicit headers
    const worksheet = XLSX.utils.json_to_sheet(filteredData, { header: selectedFields });

    // Rename headers in worksheet to formatted headers
    const headerRow = worksheet['!ref']?.split(':')[0];
    if (headerRow) {
        selectedFields.forEach((field, index) => {
            const cellRef = XLSX.utils.encode_cell({ r: 0, c: index });
            worksheet[cellRef].v = headerMap[field];
        });
    }

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ExportedData');

    // Write the Excel file and trigger download
    XLSX.writeFile(workbook, `${fileName}-${new Date().toISOString()}.xlsx`);
};

