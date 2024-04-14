interface Dob {
    date: string;
    age: number;
}

export type Gender = 'male' | 'female';

interface Location {
    city: string;
    country: string;
    state: string;
}

interface Name {
    first: string;
    last: string;
    title: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface User {
    // апи не предоставляет id :(
    dob: Dob;
    email: string;
    gender: Gender;
    location: Location;
    name: Name;
    phone: string;
    picture: Picture;
}