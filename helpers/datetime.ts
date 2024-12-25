import {format} from "date-fns"

export function formatDate(date: string | Date, withTime = false): string {
    const formatString = withTime ? "do MMMM yyyy h:mm a" : "do MMMM yyyy";
    try {
      return format(new Date(date), formatString);
    } catch (error) {
      console.error("Invalid date value:", date);
      return "";
    }
  }
  
  export function formatTime(date: string): string {
    return format(new Date(date), "h:mm a");
  }

export function getCurrentDateTime() {
  const now = new Date();

  // Get date components
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();

  // Get time components
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const formattedHours = String(hours).padStart(2, '0');

  // Format the date and time
  return `${month}/${day}/${year} ${formattedHours}:${minutes} ${ampm}`;
}