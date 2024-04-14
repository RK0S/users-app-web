import { useState } from 'react';
import { User } from '../../model/types/user';
import cls from './UserCard.module.scss';
import BinSrc from '@/shared/assets/icons/bin.svg';
import { useUsersStore } from '../../model/store/useUsersStore';

interface UserCardProps {
    user: User;
}

export const UserCard = (props: UserCardProps) => {
    const { user } = props;
    const [isToDeleted, setIsToDeleted] = useState(false);
    const deleteUser = useUsersStore(state => state.deleteUser);

    const toggleDelete = () => {
        setIsToDeleted(prev => !prev);
    }

    const onDeleteUser = () => {
        deleteUser(user.email);
    }

    return (
        <div className={`${cls.card} ${isToDeleted ? cls.chosed : ''}`} onClick={toggleDelete}>
            <div className={cls['title-wrapper']}>
                <img
                    className={cls.photo}
                    src={user.picture.medium}
                    width={'56'}
                    height={'56'}
                    alt='user-avatar'
                />
                <div className={cls.name}>
                    <h3 className={cls.title}>
                        {user.name.first} {user.name.last}
                    </h3>
                    <p>{user.email}</p>
                </div>
                {isToDeleted && (
                    <div onClick={onDeleteUser} className={cls['delete-zone']}>
                        <img width={24} height={24} src={BinSrc} alt='bin' />
                    </div>
                )}
            </div>
            <div className={cls['info-wrapper']}>
                <div className={`${cls.description} ${cls.keys}`}>
                    <p>Phone No</p>
                    <p>Birthday</p>
                    <p>Address</p>
                </div>
                <div className={`${cls.description} ${cls.values}`}>
                    <p>{user.phone}</p>
                    <p>{user.dob.date}</p>
                    <p>
                        {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
                    </p>
                </div>
            </div>
        </div>
    );
};
