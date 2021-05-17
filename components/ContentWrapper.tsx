import React from 'react';

export function ContentWrapper({children}): JSX.Element {
    return (
        <div className='flex justify-center'>
            <div className='max-w-8xl flex flex-col items-center'>
                {children}
            </div>
        </div>
    )
}

ContentWrapper.displayName = 'ContentWrapper';