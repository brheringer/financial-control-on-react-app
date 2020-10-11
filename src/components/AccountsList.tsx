import React, { useContext } from 'react';
import { AccountsContext } from '../contexts/AccountsContext';
import { AccountsContextType } from '../contexts/AccountsContextType';
import AccountListItem from './AccountListItem';

const AccountsList = () => {
    const { accounts } = useContext<AccountsContextType>(AccountsContext);

    return (
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
                {accounts?.map(a => (
                    <AccountListItem key={a.id} account={a}></AccountListItem>
                ))}
            </tbody>
        </table>
    );
}

export default AccountsList;