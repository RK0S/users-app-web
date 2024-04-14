import { create } from 'zustand';

interface State {
    query: string;
    setQuery: (query: string) => void;
}

export const useSearchUserQuery = create<State>((set) => ({
    query: '',
    setQuery: (query) => set({ query }),
}));
