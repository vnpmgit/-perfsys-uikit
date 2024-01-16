import s from './Loader.module.scss';
import React from 'react';

interface LoaderProps {
    center?: boolean;
    text?: string;
    global?: boolean;
}

function Loader({ center, text, global }: LoaderProps) {
    const loaderContent = (
        <div className={`${s.wrapper} ${center ? s.center : ''}`}>
            <div className={s.loader}/>
            {text && <div className={s.text}>{text}</div>}
        </div>
    );

    return global ? <div className={s.global}>{loaderContent}</div> : loaderContent;
}

export default Loader;
