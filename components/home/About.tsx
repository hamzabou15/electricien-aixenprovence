import React from 'react'

const About = () => {
    return (
        <section className="w-full px-9 py-24 ">
            <div className="flex items-center  text-[#1b1e3f]">
                <div className="flex flex-col gap-2 xl:pr-9">
                    <p className="text-[12px] font-semibold text-[#f25000] uppercase tracking-[7px] ">À propos de l&#39;entreprise</p>
                    <h3 className="text-[44px] m-0  leading-[1.15em] font-semibold tracking-[-1.5px]   ">
                        Nos bricoleurs expérimentés sont prêts à vous aider avec tous les types de réparations à domicile
                    </h3>
                </div>
                <div className=" px-14">
                    <p className="text-[17px] font-light leading-8 ">Notre mission est de rendre votre installation électrique plus sûre, fiable et performante. Nous utilisons des outils et matériaux de confiance pour garantir des résultats durables à chaque intervention.  </p>
                </div>
            </div>
        </section>
    )
}

export default About
