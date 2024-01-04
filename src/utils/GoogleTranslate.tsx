import axios from "axios";

const API_KEY = import.meta.env.VITE_SOME_KEY;
const API_URL = "https://translation.googleapis.com/language/translate/v2";

const translateText = async (text: string, targetLanguage: string) => {
  try {
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        q: text,
        target: targetLanguage,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Request Payload:", {
      q: text,
      target: targetLanguage,
    });

    console.log("Response Status:", response.status);
    console.log("Response Data:", response.data);

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};

export default translateText;
