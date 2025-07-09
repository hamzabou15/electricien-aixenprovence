import React from 'react'
import { Button } from '../ui/button'
import { MdLocalPhone } from 'react-icons/md'
import { IoNewspaperOutline } from 'react-icons/io5'

const CTA = () => {
    return (
        <div className="fixed bottom-16 right-8 flex flex-col items-end ">
            {/* Bouton téléphone */}
            <Button
                variant="submit"
                size="xlg"
                className="group flex items-center overflow-hidden hover:gap-2"
            >
                <MdLocalPhone
                    className="text-white transition-colors duration-300 group-hover:text-[#f25000]"
                    style={{ height: "24px", width: "24px" }}
                />
                <span
                    className=" transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px]"
                >
                    Appelez nous
                </span>
            </Button>



            {/* Bouton devis */}
            <Button
                variant="send"
                size="xlg"
                className="group flex items-center overflow-hidden mt-3  hover:gap-2"
            >
                <IoNewspaperOutline style={{ height: "24px", width: "24px" }} />
                <span
                    className=" transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px]"
                >
                    Un devis ?
                </span>
            </Button>
        </div>


    )
}

export default CTA
