import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const { getItem, setItem, removeItem } = useAsyncStorage("@auth_token");

const readSignInStatusFromStorage = async () => {
    const item = await getItem();
    return item;
};

const writeSignInStatusToStorage = async (newValue) => {
    await setItem(newValue);
    return newValue;
};

const removeSignInStatusFromStorage = async () => {
    await removeItem();
    return null;
};

export { readSignInStatusFromStorage, writeSignInStatusToStorage, removeSignInStatusFromStorage };
