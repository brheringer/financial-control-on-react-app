import React, { useContext } from 'react';
import { AccountsContext } from '../contexts/AccountsContext';
import { AccountsContextType } from '../contexts/AccountsContextType';
import AccountListItem from './AccountListItem';

const AccountsList = () => {
    const { accounts, error } = useContext<AccountsContextType>(AccountsContext);

    return (
        <div>
            <div>
                {/* TODO if error */}
            </div>
            <table className="">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Structure</th>
                        <th>Name</th>
                        <th>Universe</th>
                        <th>Commands</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log('Error: ' + error)}
                    {console.log('Acc: ' + JSON.stringify(accounts))}
                    {accounts?.map(a => (
                        <AccountListItem key={a.id} account={a}></AccountListItem>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AccountsList;