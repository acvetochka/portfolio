export const isSpamMessage = (text: string) => {
  const normalized = text.trim().toLowerCase();

  const tooShort = normalized.length < 10;

  const noVowels = !/[aeiouäöüаеєиіїоуюя]/i.test(normalized);

  const linkCount = (normalized.match(/https?:\/\//g) || []).length;
  const tooManyLinks = linkCount > 1;

  const spamWords =
    /\b(viagra|casino|prize|free money|bitcoin|porn|crypto investment|buy now|click here|winner|lottery)\b/i.test(
      normalized,
    );

  const excessiveCaps =
    normalized.length > 30 &&
    (text.match(/[A-ZÄÖÜ]/g) || []).length / text.length > 0.6;

  const excessivePunctuation =
    /[!?]{4,}/.test(text);

  return (
    tooShort ||
    noVowels ||
    tooManyLinks ||
    spamWords ||
    excessiveCaps ||
    excessivePunctuation
  );
};