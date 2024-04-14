import { Gender, User } from '../../model/types/user';

export const groupUsersByGender = (users: User[]) => {
    const map: Record<Gender, number> = {
        male: 0,
        female: 0
    };

    for (const user of users) {
        if (!user.gender) {
            continue;
        }
        switch (user.gender) {
            case 'male':
                map.male += 1;
                break;
            case 'female':
                map.female += 1;
                break;
        }
    }

    return map;
};
