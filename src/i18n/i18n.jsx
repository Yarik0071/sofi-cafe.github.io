import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./translation/es.json";
import ua from "./translation/ua.json";
import us from './translation/us.json'

i18n.use(initReactI18next).init({
  resources: {
    ua: { translation: ua },
    es: { translation: es },
    us: { translation: us },
  },
  lng: "ua",
  fallbackLng: "ua",
  interpolation: { escapeValue: false },
});

export default i18n;
