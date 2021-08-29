import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AccountsContext } from '../contexts/AccountsContext';
import { AccountsContextType } from '../contexts/AccountsContextType';
import { Account } from '../models/Account';

//validations with yup
const schema = yup.object().shape({
    structure: yup.string().required('Invalid Account'),
    name: yup.string().required('Invalid Account'),
    universeId: yup.string().required('Invalid Account'),
})

interface AccountListItemProps {
    account: Account
}

const AccountListItem = (props: AccountListItemProps) => {
    const { removeAccount, updateAccount } = useContext<AccountsContextType>(AccountsContext);
    
    const onRemove = (account: Account) => {
        removeAccount(account);
    }

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AccountListItemProps, e: any) => {
        updateAccount(data.account.id, data.account.structure, data.account.name, data.account.universe);
        e.target.reset(); //reset fthe form
        //window.location.href = '/';
    };

    return(
        <form onSubmit={handleSubmit<AccountListItemProps>(onSubmit)}>
            <tr>
                <td>
                    {props.account.id}
                </td>
                <td>
                    <input type="text" name="account.structure" id="account.structure"
                            placeholder="Structure like 1.01"
                            ref={register} />
                    <span><small>{errors.structure?.message}</small></span>
                </td>
                <td>
                    {props.account.name}
                </td>
                <td>
                    {props.account.universe}
                </td>
                <td>
                    <button className="btn btn-primary"
                        onClick={() => onRemove(props.account)}>
                        <img src="lixeira.svg" alt=""></img>
                    </button>
                </td>
            </tr>
        </form>
    );
}

export default AccountListItem;