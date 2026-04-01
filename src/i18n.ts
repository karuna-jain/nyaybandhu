import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
  translation: {
    hero: {
      title: "NYAYBANDHU",
      subtitle: "Legal Assistant",
      description: "Empowering citizens through legal awareness, resources, and support - upholding the principles of justice as enshrined in the Constitution of India.",
      access_services: "Access Legal Services",
      consult_ai: "Consult Legal AI",
      support_247: "24/7 Legal Support"
    },
    nav: {
      home: "Home",
      about_us: "About Us",
      services: "Services",
      resources: "Resources",
      library: "Library",
      cases: "Case Histories",
      news: "News",
      contact: "Contact Us",
      community: "Community Chat"
    }
  }
};

// Hindi translations
const hi = {
  translation: {
    hero: {
      title: "न्यायबंधु",
      subtitle: "विधिक सहायक",
      description: "कानूनी जागरूकता, संसाधनों और सहायता के माध्यम से नागरिकों को सशक्त बनाना - भारत के संविधान में निहित न्याय के सिद्धांतों को बनाए रखना।",
      access_services: "कानूनी सेवाओं तक पहुँचें",
      consult_ai: "कानूनी एआई से सलाह लें",
      support_247: "24/7 कानूनी सहायता"
    },
    nav: {
      home: "मुख्य पृष्ठ",
      about_us: "हमारे बारे में",
      services: "सेवाएं",
      resources: "संसाधन",
      library: "पुस्तकालय",
      cases: "मामलों का इतिहास",
      news: "समाचार",
      contact: "संपर्क करें",
      community: "समुदाय चैट"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      hi
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
