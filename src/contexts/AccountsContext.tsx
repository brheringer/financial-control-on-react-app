import React, { createContext, useState, useEffect } from 'react';
import { AccountsContextType } from './AccountsContextType';
import { Account } from "../models/Account"
import { get_accounts, save_accounts } from '../services/AccountService';

export const AccountsContext = createContext<AccountsContextType>({
    accounts: [],
    addAccount: () => {},
    removeAccount: () => {}
}); 

const AccountsProvider = (props: any) => {
    const [accounts, setAccounts] = useState<Account[]>(get_accounts);

    useEffect(() => { 
        save_accounts(accounts); 
    }, [accounts]); //when this object changes, do that

    const addAccount = (structure: string, name: string, universeId: number) => {
        const account: Account = { 
            id: accounts.length + 1,
            structure: structure,
            name: name,
            universeId: universeId };
        setAccounts([...accounts, account]);
    }
    
    const removeAccount = (account: Account) => {
        const index = accounts.indexOf(account);
        setAccounts(accounts.filter((_, i) => i !== index));
    }
    
    return(
        <AccountsContext.Provider value={{accounts, addAccount, removeAccount}}>
            {props.children}
        </AccountsContext.Provider>
    )
};

export default AccountsProvider;

//singleton
//hook

