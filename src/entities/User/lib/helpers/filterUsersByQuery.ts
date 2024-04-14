import { User } from '../../model/types/user';

export const filterUsersByQuery = (users: User[], searchQuery: string) => {
    if (!searchQuery) return users;

    return users.filter((user) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();

        if (checkIncludes(user.name.first, lowerCaseSearchQuery)) {
            return true;
        }

        if (checkIncludes(user.name.last, lowerCaseSearchQuery)) {
            return true;
        }

        if (checkIncludes(user.email, lowerCaseSearchQuery)) {
            return true;
        }

        if (checkIncludes(user.phone, lowerCaseSearchQuery)) {
            return true;
        }

        if (checkIncludes(user.dob.date, lowerCaseSearchQuery)) {
            return true;
        }

        return false
    });
};

function checkIncludes(value: string, lowerCaseSearchQuery: string) {
    return value.toLowerCase().includes(lowerCaseSearchQuery);
}