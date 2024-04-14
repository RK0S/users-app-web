import { useDeferredValue } from 'react';
import { UserList } from '@/entities/User';
import { useSearchUserQuery } from '@/features/SearchUser';
import cls from './SmartUserList.module.scss';

export const SmartUserList = () => {
    const query = useSearchUserQuery((state) => state.query);
    const searchQuery = useDeferredValue(query);

    return (
        <section className={cls.wrapper}>
            <UserList searchQuery={searchQuery} />
        </section>
    );
};
