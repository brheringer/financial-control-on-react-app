import { Account } from '../models/Account';

export interface AccountsContextType {
    accounts: Account[];
    error: string;
    addAccount(structure: string, name: string, universeId: number): void;
    removeAccount(account: Account): void;
}