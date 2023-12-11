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
  
  }