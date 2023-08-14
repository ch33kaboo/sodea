/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-28 px-[160px] my-28">
            <p className="text-center text-gray-950 font-semibold">
                Le Groupe Des Sociétés HASNAOUI N’a Cessé Depuis Sa Création De
                Relever Le Pari De L’intégration Industrielle Avec Comme Slogan
                « Construire Algérien ».
            </p>
            <div className="flex flex-row gap-9">
                <p className="text-gray-950 font-thin opacity-90">
                    Notre société se lance en 1999 dans la production et mise à
                    terre des plants maraîchers, plants francs ou greffer,
                    arboricole, forestiers et d’ornement grâce à la
                    modernisation des techniques acquises et son savoir-faire
                    afin de répondre à la satisfaction des besoins et exigences
                    des producteurs et agriculteurs.<br></br>
                    <br></br>Dans son département de machinisme agricole, SODEA
                    Spa apporte toute sa compétence dans la mécanisation afin de
                    réduire les coûts et facilité le quotidien de ses
                    collaborateurs et producteurs agricoles.<br></br>
                    <br></br>SODEA SPA par sa solution globale est sa
                    modernisation de l’activité a pour objectif d’accompagnée
                    ses clients sur tout le processus hydraulique et
                    environnemental, production et qualité des plants, systèmes
                    d’irrigation et machines agricoles. Outre l’amélioration et
                    l’efficacité productive, la mécanisation encourage la
                    production à grande échelle et améliore en général la
                    qualité des ressources produites.
                </p>
                <img
                    src="about/about_sodea_1.jpg"
                    className="w-[55%]"
                    alt="about sodea"
                />
            </div>
            <div className="flex flex-row-reverse gap-9">
                <p className="text-gray-950 font-thin opacity-90">
                    Notre société se lance en 1999 dans la production et mise à
                    terre des plants maraîchers, plants francs ou greffer,
                    arboricole, forestiers et d’ornement grâce à la
                    modernisation des techniques acquises et son savoir-faire
                    afin de répondre à la satisfaction des besoins et exigences
                    des producteurs et agriculteurs.<br></br>
                    <br></br>Dans son département de machinisme agricole, SODEA
                    Spa apporte toute sa compétence dans la mécanisation afin de
                    réduire les coûts et facilité le quotidien de ses
                    collaborateurs et producteurs agricoles.<br></br>
                    <br></br>SODEA SPA par sa solution globale est sa
                    modernisation de l’activité a pour objectif d’accompagnée
                    ses clients sur tout le processus hydraulique et
                    environnemental, production et qualité des plants, systèmes
                    d’irrigation et machines agricoles. Outre l’amélioration et
                    l’efficacité productive, la mécanisation encourage la
                    production à grande échelle et améliore en général la
                    qualité des ressources produites.
                </p>
                <img
                    src="about/about_sodea_2.jpg"
                    className="w-[55%]"
                    alt="about sodea"
                />
            </div>
        </div>
    );
}
