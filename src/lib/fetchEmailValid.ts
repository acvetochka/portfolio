const API = process.env.NEXT_PUBLIC_APILAYER_URL;
const API_KEY = process.env.NEXT_PUBLIC_MAILBOX_KEY;

// 🔹 Простий Regex для базової валідації
// export const isValidEmailFormat = (email: string) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 🔹 Перевірка email через MailboxLayer
export const verifyEmailWithMailboxLayer = async (email: string) => {
  try {
    const response = await fetch(
      `${API}/check?access_key=${API_KEY}&email=${encodeURIComponent(email)}`
    );
    const data = await response.json();
    console.log(data);

    return data?.format_valid === true && data?.mx_found === true;
  } catch {
    return false;
  }
};
