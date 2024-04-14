import { useEffect } from 'react';
import { useFetch } from '@/shared/lib';
import { ApiResponse } from '@/shared/model';
import { User } from '../model/types/user';
import { useUsersStore } from '../model/store/useUsersStore';

export const useGetUsers = () => {
    const setUsers = useUsersStore(state => state.setUsers);
    const isNeedToRefresh = useUsersStore(state => state.isNeedToRefresh);

    const { data, error, isLoading } = useFetch<ApiResponse<User[]>>(
        `${import.meta.env.VITE_API_URL}/?results=500&exc=registered,nat,cell,id,login`, [isNeedToRefresh]
    );

    useEffect(() => {
        if (data) {
            setUsers(data.results);
        }
    }, [data, setUsers]);

    return {
        error,
        isLoading
    };
};
