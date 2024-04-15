import { useDeferredValue } from 'react';
import { UserList } from '@/entities/User';
import { useSearchUserQuery } from '@/features/SearchUser';
import cls from './SmartUserList.module.scss';
import { useObserveList } from '../lib/hooks/useObserveList';

export const SmartUserList = () => {
    const query = useSearchUserQuery((state) => state.query);
    const searchQuery = useDeferredValue(query);
    const { isScrollAtTop, isScrollAtBottom } = useObserveList();

    return (
        <section className={cls.wrapper}>
            <div className={`${cls.shadow} ${isScrollAtTop ? '' : cls['top-shadow']}`} />
            <UserList searchQuery={searchQuery} />
            <div className={`${cls.shadow} ${isScrollAtBottom ? '' : cls['bottom-shadow']}`} />
        </section>
    );
};
