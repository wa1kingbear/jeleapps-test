import { ReactNode } from 'react';

import s from './Wrapper.module.scss';

type Props = {
    children: ReactNode;
};

export const Wrapper = ({ children }: Props) => {
    return <div className={s.ctx}>{children}</div>;
};
