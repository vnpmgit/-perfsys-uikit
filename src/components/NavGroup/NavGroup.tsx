import React from 'react';
import style from './NavGroup.module.scss';

function NavGroup({ children }: any) {
    return (
        <div className={style.group}>
            {children}
        </div>
    );
}

export default NavGroup;
