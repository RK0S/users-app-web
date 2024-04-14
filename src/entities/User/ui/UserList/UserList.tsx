import { forwardRef, CSSProperties, ReactNode, LegacyRef } from 'react';
import { VirtuosoGrid, GridComponents } from 'react-virtuoso';
import { useGetUsers } from '../../api/useGetUsers';
import { filterUsersByQuery } from '../../lib/helpers/filterUsersByQuery';
import { useUsersStore } from '../../model/store/useUsersStore';
import { UserCard } from '../UserCard/UserCard';
import cls from './UserList.module.scss';

interface UserListProps {
    searchQuery: string;
}

const gridComponents = {
    List: forwardRef(
        ({ style, children, ...props }: { style: CSSProperties; children: ReactNode }, ref) => (
            <div
                // нужно напрямую кастовать к LegacyRef, так как используется старый API
                ref={ref as LegacyRef<HTMLDivElement> | undefined}
                {...props}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    ...style
                }}
            >
                {children}
            </div>
        )
    )
} as GridComponents<unknown>;

export const UserList = (props: UserListProps) => {
    const { searchQuery } = props;
    const { users } = useUsersStore();
    const { error, isLoading } = useGetUsers();

    if (error) {
        return <h1>{'Что-то пошло не так'}</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <VirtuosoGrid
            className={cls.list}
            totalCount={filterUsersByQuery(users, searchQuery).length}
            components={gridComponents}
            data={filterUsersByQuery(users, searchQuery)}
            itemContent={(_, data) => <UserCard user={data} />}
        />
    );
};
