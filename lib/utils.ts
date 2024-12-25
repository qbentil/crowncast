import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function ghanaianPhoneNumber(phoneNumber: string) {
  // Check if the phone number starts with '0' and has 10 digits
  if (phoneNumber.length === 10 && phoneNumber.startsWith('0')) {
    // Replace the starting '0' with '233'
    return '233' + phoneNumber.slice(1);
  }
  // If the number doesn't meet the condition, return the original number
  return phoneNumber;
}