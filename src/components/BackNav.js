import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function BackNav({handleBack}) {
    return (
        <div>
            <ChevronLeftIcon onClick={handleBack} className='md:h-10 md:w-10 w-6 h-6 text-primary' />
        </div>

    );
}

export default BackNav;