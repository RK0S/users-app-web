import { useUsersStore } from '@/entities/User';
import { useEffect, useState } from 'react';

// Хук по отслеживанию виртуального скролла для будущего добавления тени в верхний и нижний края списка

export const useObserveList = () => {
    const users = useUsersStore(state => state.users);
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const [isScrollAtBottom, setIsScrollAtBottom] = useState(true);

    useEffect(() => {
        const virtuosoList = document.querySelector('.virtuoso-grid-list') as HTMLElement | null;

        if (!virtuosoList) return;

        const styles = window.getComputedStyle(virtuosoList);

        const observer = new MutationObserver(() => {
            const paddingTop = parseInt(styles.getPropertyValue('padding-top'));
            const paddingBottom = parseInt(styles.getPropertyValue('padding-bottom'));

            setIsScrollAtTop(paddingTop === 0);
            setIsScrollAtBottom(paddingBottom === 0);
        });
        observer.observe(virtuosoList, { attributes: true, attributeFilter: ['style'] });

        return () => observer.disconnect();
    }, [users]);

    return { isScrollAtTop, isScrollAtBottom };
};
