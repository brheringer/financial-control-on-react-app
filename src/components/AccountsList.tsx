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
            <div className="">
                <div>
                    <div className="row">
                        <div className="col-1 font-weight-bold">Id</div>
                        <div className="col-2 font-weight-bold">Structure</div>
                        <div className="col font-weight-bold">Name</div>
                        <div className="col-3 font-weight-bold">Universe</div>
                        <div className="col-3 font-weight-bold">Commands</div>
                    </div>
                </div>
                <div>
                    {console.log('Error: ' + error)}
                    {console.log('Acc: ' + JSON.stringify(accounts))}
                    {accounts?.map(a => (
                        <AccountListItem key={a.id} account={a}></AccountListItem>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AccountsList;