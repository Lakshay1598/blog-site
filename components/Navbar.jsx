import React from 'react';
import '../src/app.css';

const Navbar = () => {
    return (
        <div className={`flex justify-center gap-6 `}>
            <div>This is navbar</div>
            <div>
                <input type='text' placeholder='Search' className='p-2' />
            </div>
            <div>

                <ul className='flex gap-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
