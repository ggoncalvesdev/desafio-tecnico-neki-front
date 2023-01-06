import jwt_decode from "jwt-decode";
import React, { createContext, useState } from "react";

import { UserLoginType } from "../models/UserLoginType";

//criando contexto
export const DataContext = createContext({});

//criando provider
export const DataProvider = ({ children }) => {
    const [dadosUsuarioLogin, setDadosUsuarioLogin] = useState<UserLoginType>();

    const armazenaDadosUsuarioLogin = (jwt: any) => {
        var tokenDecodificado: any = jwt_decode(jwt);

        //armazenando apenas a chave usuário do json decodificado
        var usuario = tokenDecodificado.user;
        console.log("teste:" + tokenDecodificado.user);

        //está transferindo a string json contida dentro da variável usuario num objeto
        usuario = JSON.parse(usuario);

        setDadosUsuarioLogin({
            id: usuario?.id,
            login: usuario?.login,
            lastLoginDate: usuario?.lastLoginDate,
            token: jwt,
        });

        console.log("DADOS DO USUARIO: " + JSON.stringify(usuario));
        console.log("DADOS DO USUARIO: " + dadosUsuarioLogin);
    };

    return (
        <DataContext.Provider value={{ dadosUsuarioLogin, armazenaDadosUsuarioLogin }}>{children}</DataContext.Provider>
    );
};
