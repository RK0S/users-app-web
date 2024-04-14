import { groupUsersByAge } from '../../lib/helpers/groupUsersByAge';
import { groupUsersByGender } from '../../lib/helpers/groupUsersByGender';
import { returnStatisticString } from '../../lib/helpers/returnStatisticString';
import { useUsersStore } from '../../model/store/useUsersStore';
import cls from './UserStatistics.module.scss';

interface UserStatisticsProps {
    className?: string;
}

export const UserStatistics = (props: UserStatisticsProps) => {
    const { className } = props;
    const users = useUsersStore((state) => state.users);

    if (!users.length) return null;

    const mappedUsersByAge = groupUsersByAge(users);
    const mappedUsersByAgeByGender = groupUsersByGender(users);

    return (
        <aside className={`${cls.statistics} ${className}`}>
            <h2 className={cls.title}>{users.length} Users</h2>
            <hr className={cls.hr} />
            <div className={cls['group']}>
                <h3>Age Groups</h3>
                <div className={cls['lists']}>
                    <ul className={cls.keys}>
                        <li>11 to 20</li>
                        <li>21 to 30</li>
                        <li>31 to 40</li>
                        <li>41 to 50</li>
                        <li>51+</li>
                    </ul>
                    <ul className={cls.values}>
                        <li>{returnStatisticString(mappedUsersByAge[11])}</li>
                        <li>{returnStatisticString(mappedUsersByAge[21])}</li>
                        <li>{returnStatisticString(mappedUsersByAge[31])}</li>
                        <li>{returnStatisticString(mappedUsersByAge[41])}</li>
                        <li>{returnStatisticString(mappedUsersByAge[51])}</li>
                    </ul>
                </div>
            </div>
            <hr className={cls.hr} />
            <div className={cls['group']}>
                <h3>Gender Groups</h3>
                <div className={cls.lists}>
                    <ul className={cls.keys}>
                        <li>Male</li>
                        <li>Female</li>
                    </ul>
                    <ul className={cls.values}>
                        <li>{returnStatisticString(mappedUsersByAgeByGender.male)}</li>
                        <li>{returnStatisticString(mappedUsersByAgeByGender.female)}</li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
