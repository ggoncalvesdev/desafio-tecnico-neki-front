import AsyncStorage from "@react-native-async-storage/async-storage";

const storeLocalData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        var tempData: any = await retrieveLocalData(key);
        console.log(`Dados armazenados: ${JSON.stringify(tempData, null, "\t")}`);
    } catch (error) {
        console.log(`Erro ao armazenar dados (key: ${key}) no LocalStorage: ${error}`);
    }
};

const retrieveLocalData = async (key: string) => {
    var data = null;
    try {
        data = await AsyncStorage.getItem(key);
    } catch (error) {
        console.log(`Erro ao recuperar dados (key: ${key}) do LocalStorage: ${error}`);
    }
    return data;
};

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(`Erro ao remover todos os dados`);
    }
};
export { storeLocalData, retrieveLocalData, clearStorage };
