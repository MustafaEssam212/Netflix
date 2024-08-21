export default function generateRandomPassword(length) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const allChars = uppercase + lowercase + numbers;

  let password = '';
  
  // Ensure at least one character from each category is included if length allows
  if (length >= 3) {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  
  // Fill the rest of the password length with random characters from all categories
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  // Shuffle the password to avoid predictable sequences
  password = password.split('').sort(() => 0.5 - Math.random()).join('');
  
  return password;
}
