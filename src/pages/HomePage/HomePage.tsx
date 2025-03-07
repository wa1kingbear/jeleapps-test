import s from './HomePage.module.scss';

import { Square } from '@/components/shared';

export const HomePage = () => {
    return (
        <div className={s.ctx}>
            <Square />
        </div>
    );
};
