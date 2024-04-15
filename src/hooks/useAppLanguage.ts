import AsyncStorage from '@react-native-async-storage/async-storage';
import {LanguageKey, LanguageJsonKey, languages} from '../languages';

export const useAppLanguage = () => {
  const saveLanguageStorage = async (language: string) => {
    try {
      await AsyncStorage.setItem('appLanguage', language);
    } catch (error) {
      console.error('Error saving language storage:', error);
    }
  };

  const getLanguageStorage = async () => {
    try {
      const language = await AsyncStorage.getItem('appLanguage');
      return language || 'en';
    } catch (error) {
      console.error('Error get language storage:', error);
      return 'en';
    }
  };

  const getLocalizedString = (key: LanguageJsonKey, language: LanguageKey) => {
    const value = languages[language]?.[key] || '';

    if (value) {
      return value;
    }
    return key;
  };

  return {
    saveLanguageStorage,
    getLanguageStorage,
    getLocalizedString,
  };
};
