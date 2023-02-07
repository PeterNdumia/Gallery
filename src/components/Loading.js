import React from 'react';

function Loading() {
    return (

        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="flex items-center justify-center">
                <div
                    className="spinner-border animate-spin  bg-primary inline-block w-20 h-8 border-20 rounded-full"
                    role="status"
                >
                    <span className="hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
}
export default Loading;
