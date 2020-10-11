import React, { useContext } from 'react';
import { AccountsContext } from '../contexts/AccountsContext';
import { AccountsContextType } from '../contexts/AccountsContextType';
import { Account } from '../models/Account';

interface AccountListItemProps {
    account: Account
}

const AccountListItem = (props: AccountListItemProps) => {
    const { removeAccount } = useContext<AccountsContextType>(AccountsContext);
    
    const onRemove = (account: Account) => {
        removeAccount(account);
    }

    return(
        <tr>
            <td>
                {props.account.id}
            </td>
            <td>
                {props.account.structure}
            </td>
            <td>
                {props.account.name}
            </td>
            <td>
                {props.account.universeId}
            </td>
            <td>
                <button className="btn btn-primary"
                    onClick={() => onRemove(props.account)}>
                    <img src="lixeira.svg" alt=""></img>
                </button>
            </td>
        </tr>
    );
}

export default AccountListItem;