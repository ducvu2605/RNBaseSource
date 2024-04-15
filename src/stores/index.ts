import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Error store string: ', e);
  }
};

export const getStorageString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : null;
  } catch (e) {
    console.log('Error get store string: ', e);
    return null;
  }
};

export const storeData = async (key: string, value: object | any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('Error store data: ', e);
  }
};

export const getStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error get data: ', e);
    return null;
  }
};

export const removeData = async (key: string) => {
  try {
    const result = await AsyncStorage.removeItem(key);
    return result;
  } catch (e) {
    console.log('Error remove data: ', e);
    return false;
  }
};

export const clearStorage = async () => {
  try {
    const result = await AsyncStorage.clear();
    return result;
  } catch (e) {
    console.log('Error remove data: ', e);
    return false;
  }
};

export const getAllStorageKeys = async () => {
  try {
    const result = await AsyncStorage.getAllKeys();
    return result;
  } catch (e) {
    console.log('Error remove data: ', e);
    return null;
  }
};
