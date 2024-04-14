import { User } from '../../model/types/user';

export const groupUsersByAge = (users: User[]) => {
    const map: Record<number, number> = {
        11: 0,
        21: 0,
        31: 0,
        41: 0,
        51: 0
    };

    for (const user of users) {
        const age = user.dob.age;

        if (age >= 11 && age <= 20) {
            map[11] += 1;
            continue;
        }

        if (age >= 21 && age <= 30) {
            map[21] += 1;
            continue;
        }

        if (age >= 31 && age <= 40) {
            map[31] += 1;
            continue;
        }

        if (age >= 41 && age <= 50) {
            map[41] += 1;
            continue;
        }

        if (age >= 51) {
            map[51] += 1;
        }
    }

    return map;
};
