import { useUsersStore } from '@/entities/User';
import cls from './RefreshButton.module.scss';

export const RefreshButton = () => {
    const refreshUsers = useUsersStore((state) => state.toggleIsNeedToRefresh);

    const onRefresh = () => {
        refreshUsers();
    }

    return <button onClick={onRefresh} className={cls.button}>Refresh Users</button>;
};
