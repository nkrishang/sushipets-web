import React from 'react';

export function ContentWrapper({children}): JSX.Element {
    return (
        <div className='flex justify-center border border-red-600'>
            <div className='max-w-8xl border border-black flex flex-col items-center'>
                {children}
            </div>
        </div>
    )
}

ContentWrapper.displayName = 'ContentWrapper';