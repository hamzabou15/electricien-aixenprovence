import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-28 flex items-center p-8 shadow-bottom'>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <Image
                        src="/images/LogoSpark.webp"
                        alt="Logo"
                        width={180}
                        height={50}
                    />

                </div>
                <div className='px-2.5 flex items-center justify-center ' >
                    <ul className='flex items-center justify-center gap-6 text-lg font-semibold'>
                        <li>Acceuil</li>
                        <li>Services</li>
                        <li>Électricité</li>
                        <li>À propos</li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Header
