import { uuid } from 'uuidv4';

export function __generateKey(len?: number) {
    const __length = len || 6

    return uuid().slice(0, __length)
}

export const convertToKey = (str: string): string => {
    // convert string to lowercase
    // if string has space, remove it and capitalize the next letter
    // example: Full Name => fullName, Created At => createdAt
    const lowerCase = str.toLowerCase();
    const split = lowerCase.split(" ");
    const result = split.map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join("");

};

export function getLastPathFromStr(_url: string) {
    if (!_url) return ""
    const paths = _url?.split("/");
    return paths[paths?.length - 1];
}

export const formatMoney = (amount: number) => {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


export const formatPhoneNumber = (phone: string) => {

    // Check if the number has exactly 10 digits and starts with 0
    if (phone.length === 10 && phone.startsWith('0')) {
        // Remove the first character and prepend +233
        return '233' + phone.slice(1);
    } else {
        throw new Error('Invalid phone number');
    }
}
