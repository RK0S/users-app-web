import { SearchUserInput } from '@/features/SearchUser';
import cls from './UsersPage.module.scss';
import { SmartUserList } from '@/widgets/SmartUserList/ui/SmartUserList';
import { UserStatistics } from '@/entities/User';
import { RefreshButton } from '@/features/RefreshUserList';

export const UsersPage = () => {
    return (
        <>
            <header className={cls.header}>
                <SearchUserInput />
                <RefreshButton />
            </header>
            <main className={cls.main}>
                <SmartUserList />
                <UserStatistics className={cls.statistics} />
            </main>
        </>
    );
};
