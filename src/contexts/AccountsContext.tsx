import React, { createContext, useState, useEffect } from 'react';
import { AccountsContextType } from './AccountsContextType';
import { Account } from "../models/Account"
import { get_accounts, save_account } from '../services/AccountService';

export const AccountsContext = createContext<AccountsContextType>({
    accounts: [],
    error: '',
    addAccount: () => {},
    removeAccount: () => {}
}); 

const AccountsProvider = (props: any) => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState<string>('');

    // useEffect(() => { 
    //     save_accounts(accounts); 
    // }, [accounts]); //when this object changes, do that

    useEffect(() => {
        get_accounts().then(result => {
            if(result.errors)
                setError(result.errors.message);
            else
                setAccounts(result.data.accounts);
        })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    const addAccount = (structure: string, name: string, universeId: number) => {
        const account: Account = { 
            id: 0,
            structure: structure,
            name: name,
            universeId: universeId };
        //TODO if valid
        save_account(account).then(a => {
            account.id = a.id;
            setAccounts([...accounts, account]);
        });
    }
    
    const removeAccount = (account: Account) => {
        const index = accounts.indexOf(account);
        //TODO call delete service
        setAccounts(accounts.filter((_, i) => i !== index));
    }
    
    return(
        <AccountsContext.Provider value={{accounts, error, addAccount, removeAccount}}>
            {props.children}
        </AccountsContext.Provider>
    )
};

export default AccountsProvider;

//singleton
//hook

