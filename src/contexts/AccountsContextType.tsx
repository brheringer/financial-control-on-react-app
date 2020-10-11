import { Account } from '../models/Account';

export interface AccountsContextType {
    accounts: Account[];
    addAccount(structure: string, name: string, universeId: number): void;
    removeAccount(account: Account): void;
}