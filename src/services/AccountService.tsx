import {Account} from "../models/Account";

const ACCOUNT_STORE = 'accounts';

export const get_accounts = (): Account[] => {
    const data = localStorage.getItem(ACCOUNT_STORE) || '';
    try {
        const result = JSON.parse(data) as Account[];
        return result;
    }
    catch {
        return [];
    }
}

export const save_accounts = (data: Account[]) => {
    if(data?.length >= 1)
        localStorage.setItem(ACCOUNT_STORE, JSON.stringify(data));
};