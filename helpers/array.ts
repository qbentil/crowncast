export function getRandomItem(arr: string[]): string {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array.');
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}