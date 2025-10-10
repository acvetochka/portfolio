export const isSpamMessage = (text: string) => {
  const tooShort = text.trim().length < 10;
  const noVowels = !/[aeiouаеєиіїоуюя]/i.test(text); // майже без голосних
  const manyLinks = (text.match(/https?:\/\//g) || []).length > 1;
  const spamWords = /(viagra|casino|free money|bitcoin|porn)/i.test(text);
  return tooShort || noVowels || manyLinks || spamWords;
};
