import { ChangeEvent } from 'react';
import { useSearchUserQuery } from '../../model/store/useSearchUserQuery';
import cls from './SearchUserInput.module.scss';


export const SearchUserInput = () => {
    const { query, setQuery } = useSearchUserQuery();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    return <input placeholder='Search' className={cls.input} value={query} onChange={onChange} />;
};
