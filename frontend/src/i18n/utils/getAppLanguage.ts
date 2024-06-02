import { LanguageKey } from 'src/Types/languageKey';

export const getAppLanguage = async () => {
  const language = localStorage.get(LanguageKey.LANGUAGE);

  return language;
};
