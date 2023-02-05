import React from 'react';

function Footer() {
    return (
        <div className='container flex flex-col items-center mt-36 bg-grey w-full'>
            <div className='flex md:flex-row flex-col justify-between w-full p-4'>
                <div className='flex flex-col justify-center md:w-[20%] md:mt-0 mt-3'>
                    <p className='text-lg text-primary text-center'>Gallery</p>
                    <a href='#' className='hover:text-primary text-sm text-center '>Home</a>
                    <a href='#' className='hover:text-primary text-sm text-center'>Getting Started</a>
                    <a href='#' className='hover:text-primary text-sm text-center'>FAQ</a>
                </div>
                <div className='flex flex-col justify-center md:w-[20%] md:mt-0 mt-3'>
                    <p className='text-lg text-primary text-center'>About</p>
                    <a href='#' className='hover:text-primary text-sm text-center '>History</a>
                    <a href='#' className='hover:text-primary text-sm text-center '>Team</a>
                    <a href='#' className='hover:text-primary text-sm text-center '>Sponsors</a>
                </div>
                <div className='flex flex-col justify-center md:w-[20%] md:mt-0 mt-3'>
                    <p className='text-lg text-primary text-center'>Contact us</p>
                    <a href='#' className='hover:text-primary text-sm text-center'>Email</a>
                    <a href='#' className='hover:text-primary text-sm text-center'>Location</a>
                    <a href='#' className='hover:text-primary text-sm text-center'>Collaborations</a>
                </div>
                <div className='flex flex-col justify-center md:w-[20%] md:mt-0 mt-3'>
                    <p className='text-lg text-primary text-center'>Socials</p>
                    <a href='#' className='hover:text-primary text-sm text-center'>Instagram</a>
                    <a href='#' className='hover:text-primary text-sm text-center'>Pinterest</a>
                    <a href='#' className='hover:text-primary text-sm text-center'>Twitter</a>
                </div>


            </div>
            <p className='mt-4 mb-2 text-sm'>Gallery@2023 Created by Peter Ndumia</p>
        </div>
    );
}

export default Footer;