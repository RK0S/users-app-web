import { create } from 'zustand';
import { User } from '../types/user';

interface State {
    users: User[];
    isNeedToRefresh: boolean;
    setUsers: (users: User[]) => void;
    deleteUser: (email: string) => void;
    toggleIsNeedToRefresh: () => void;
}

export const useUsersStore = create<State>((set) => ({
    users: [],
    isNeedToRefresh: false,
    setUsers: (users) => set({ users }),
    toggleIsNeedToRefresh: () => set((state) => ({ isNeedToRefresh: !state.isNeedToRefresh })),
    deleteUser: (email) =>
        set((state) => ({ users: state.users.filter((user) => user.email !== email) }))
}));
