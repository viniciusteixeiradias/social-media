function generateRandomPhrase(minLength: number, maxLength: number): string {
  const possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
  const textLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';

  for (let i = 0; i < textLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    result += possibleChars[randomIndex];
  }

  return result;
}

function generateRandomTexts(): string[] {
  const numTexts: number = 1;
  const texts: string[] = [];

  for (let i = 0; i < numTexts; i++) {
    const minLength = 10;
    const maxLength = 1000;
    const randomPhrase = generateRandomPhrase(minLength, maxLength);
    texts.push(randomPhrase);
  }

  return texts;
}