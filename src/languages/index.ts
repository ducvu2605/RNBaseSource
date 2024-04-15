import en from './jsons/en.json';
import vi from './jsons/vi.json';

export const languages = {
  en,
  vi,
};

export type LanguageKey = keyof typeof languages;
export type LanguageJsonKey = keyof typeof en;
