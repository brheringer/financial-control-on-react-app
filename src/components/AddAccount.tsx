import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AccountsContextType } from '../contexts/AccountsContextType';
import { AccountsContext } from '../contexts/AccountsContext';

//validations with yup
const schema = yup.object().shape({
    structure: yup.string().required('Invalid Account'),
    name: yup.string().required('Invalid Account'),
    universeId: yup.string().required('Invalid Account'),
})

interface AddAccountForm {
    name: string,
    structure: string,
    universeId: number
}

const AddAccount = () => {
    const { addAccount } = useContext<AccountsContextType>(AccountsContext);
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddAccountForm, e: any) => {
        addAccount(data.structure, data.name, data.universeId);
        e.target.reset(); //reset fthe form
        window.location.href = '/';
    };

    return(
        <form onSubmit={handleSubmit<AddAccountForm>(onSubmit)}>
            <h4>Add Account</h4>
            <div>
                <input type="text" name="name" id="name"
                    placeholder="Name"
                    ref={register} />
                <span><small>{errors.name?.message}</small></span>
            </div>
            <div>
                <input type="text" name="structure" id="structure"
                    placeholder="Structure like 1.01"
                    ref={register} />
                <span><small>{errors.structure?.message}</small></span>
            </div>
            <div>
                <input type="number" name="universeId" id="universeId"
                    ref={register} />
                <span><small>{errors.universeId?.message}</small></span>
            </div>
            <div>
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
        );
}

export default AddAccount;