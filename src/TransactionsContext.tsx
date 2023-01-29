import {createContext, useEffect, useState, ReactNode} from 'react';
import {api} from './services/api';

interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

// Forms of declare TransactionInput

// interface TransactionInput {
//     title: string;
//     type: string;
//     amount: number;
//     category: string;
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// Allows children components inside TransactionsProvider component. (see App.tsx)
interface TransactionProviderProps {
    children: ReactNode;
}

// Allows to pass createTransation method on Context.Provider
interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

// Hack to Typescript not to be throwing errors about default value.
// TODO: See if the community already have a solution for this.
export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}
