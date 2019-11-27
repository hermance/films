import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";
import moment from "moment";

const resources = {
  fr: {
    translation: {
      ...require("./locales/translation_fr.json"),
      ...require("./locales/translation_en.json"),
    },
  },
};

i18n.on("languageChanged", function(lng) {
  moment.locale(lng + (lng === "zh" ? "-cn" : ""));
});

i18n.use(LanguageDetector).init({
  whitelist: ["fr", "en"],
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
    format: function(value, format, lng) {
      if (value instanceof Date) return moment(value).format(format);
      return value;
    },
  },
  resources: resources,
});
i18n.wrap = C => props => <C i18n={i18n} {...props} />;
export default i18n;
