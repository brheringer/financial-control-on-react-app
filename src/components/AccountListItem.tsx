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
            <div className="row">
                <div className="col-1">
                    {props.account.id}
                </div>
                <div className="col-2">
                    <input type="text" name="structure" id="structure"
                            placeholder="Structure like 1.01"
                            ref={register} />
                    <span><small>{errors.structure?.message}</small></span>
                </div>
                <div className="col">
                    {props.account.name}
                </div>
                <div className="col-3">
                    {props.account.universe}
                </div>
                <div className="col-3">
                    <button className="btn btn-primary"
                        onClick={() => onRemove(props.account)}>
                        <img src="lixeira.svg" alt=""></img>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AccountListItem;