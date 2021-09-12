import React, { createContext, useState, useEffect } from 'react';
import { AccountsContextType } from './AccountsContextType';
import { Account } from "../models/Account"
import { getAccounts, saveAccount, deleteAccount } from '../services/AccountService';

export const AccountsContext = createContext<AccountsContextType>({
    accounts: [],
    error: '',
    updateAccount: () => {},
    removeAccount: () => {}
}); 

const AccountsProvider = (props: any) => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState<string>('');

    // useEffect(() => { 
    //     save_accounts(accounts); 
    // }, [accounts]); //when this object changes, do that

    useEffect(() => {
        getAccounts().then(result => {
            if(result.errors)
                setError(result.errors.message);
            else
                setAccounts(result.data?.accounts);
        })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    const updateAccount = (id: number, structure: string, name: string, universe: string) => {
        const account: Account = { 
            id: id,
            structure: structure,
            name: name,
            universe: universe };
        //TODO if valid
        //TODO this add only if new
        saveAccount(account).then(a => {
            account.id = a.id;
            setAccounts([...accounts, account]);
        });
    }
    
    const removeAccount = (account: Account) => {
        const index = accounts.indexOf(account);
        deleteAccount(account).then(() => {
            setAccounts(accounts.filter((_, i) => i !== index));            
        })
    }
    
    return(
        <AccountsContext.Provider value={{accounts, error, updateAccount, removeAccount}}>
            {props.children}
        </AccountsContext.Provider>
    )
};

export default AccountsProvider;

//singleton
//hook

