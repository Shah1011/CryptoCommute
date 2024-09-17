import React, {useCallback, useEffect, useState} from "react";
import axiosInstance from "../config/axios";
import {useRouter} from "next/router";

import {useMetaMaskWallet} from "../hooks/useWallet";

export const UserContext = React.createContext({
    user: {},
    updateUser: (user) => {},
    logout: () => {},
    getUser: async () => {}
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const router = useRouter();
    const {account, connectWallet} = useMetaMaskWallet()

    const getUser = useCallback(async (address = account) => {
        const { data } =  await axiosInstance({
            method: 'GET',
            url: `/user/${address}`
        });

        setUser(data.user)
        return data.user
    }, [account, router])



    useEffect(() => {
        if( typeof window != "undefined"){
            connectWallet().then((address) => {
                getUser(address)
            })
        }

    }, [])


    useEffect(() => {

        if(account) {
            getUser(account)
        }
    }, [getUser, account])

    const updateUser = (user) => {
        setUser(user)
    }

    const logout = () => {
        if (typeof localStorage === 'undefined') return
        localStorage.removeItem('pride')
        updateUser({})
        router.push('/auth')
        return;
    }

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                logout,
                getUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
