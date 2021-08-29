import { Account } from '../models/Account';

export interface AccountsContextType {
    accounts: Account[];
    error: string;
    updateAccount(id: number, structure: string, name: string, universe: string): void;
    removeAccount(account: Account): void;
}