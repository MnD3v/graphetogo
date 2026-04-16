export const projectsData = [
    {
        id: 'initiative-1',
        name: 'Initiative I',
        title: 'Investissons dans la force des femmes rurales du champ au marché agroécologiques',
        subtitle: '100 558 € pour sortir 2100 femmes et jeunes de la précarité.',
        goal: '100 558 €',
        image: '/images/Initiative1.webp',
        location: ['Région Maritime', 'Région des Plateaux'],
        locationNote: "L'initiative couvre les deux principales régions agricoles du sud du Togo.",
        whyParticipate: {
            text: "Les femmes rurales au sud du Togo font face à de nombreux défis majeurs qui freinent leur développement et menacent la sécurité alimentaire de leurs familles.",
            challenges: [
                {
                    title: "Changements Climatiques",
                    description: "La dégradation des terres réduit la productivité alors que les femmes assurent 60% de la main-d'œuvre agricole."
                },
                {
                    title: "Insécurité Foncière",
                    description: "Moins de 2% des femmes ont un accès sécurisé des terres agricoles durables, limitant leur autonomie."
                },
                {
                    title: "Accès aux Technologies",
                    description: "Le manque d'outils de valorisation freine la commercialisation et les opportunités économiques vitales."
                },
                {
                    title: "Innovation & Avenir",
                    description: "GRAPHE planifie des innovations agroécologiques résilientes pour l'entrepreneuriat rural durable."
                }
            ]
        },
        impact: {
            text: "Votre soutien est le moteur de transformations concrètes sur le terrain :",
            items: [
                "Formation de 2 100 bénéficiaires (79% femmes) aux pratiques agroécologiques.",
                "Aménagement de 20 hectares de bas-fonds et production de 250t de compost/an.",
                "Création de 62 petites entreprises rurales portées par des femmes.",
                "Vente de 80t de riz et 20t d'arachide via une plateforme numérique."
            ],
            footer: "Enfin, 10 000 personnes seront sensibilisées à la nutrition, aux TIC et à la santé publique."
        },
        partners: [
            { name: "GRAPHE (Direction Nationale)", icon: "G" },
            { name: "Direction régionale de l'agriculture", icon: "A" },
            { name: "Direction régionale de santé", icon: "S" },
            { name: "TESMECO & ECOFOOD", icon: "E" }
        ]
    },
    {
        id: 'initiative-2',
        name: 'Initiative II',
        title: 'Soutien aux populations affectées par les changements climatiques et les conflits au Nord Togo',
        subtitle: 'Pour soutenir 6 250 déplacés et hôtes en difficulté.',
        goal: '1 690 540 €',
        image: '/images/Initiative2.webp',
        location: ['Région des Savanes', 'Région de la Kara'],
        locationNote: "L'initiative intervient dans les premières zones d'accueil au Nord du Togo.",
        whyParticipate: {
            text: "Aujourd’hui, plus de 6 250 personnes déplacées internes et leurs hôtes au nord du Togo luttent pour leur survie. Victimes des changements climatiques et de l’insécurité, ces familles vivent désormais dans une extrême précarité.",
            challenges: [
                {
                    title: "Crise Écologique",
                    description: "Sécheresses, inondations et érosion menacent les écosystèmes stratégiques des préfectures de l'Oti et de Kéran."
                },
                {
                    title: "Précarité Sociale",
                    description: "Les familles déplacées ont perdu leurs terres et leurs moyens de subsistance, rendant l'aide urgente."
                },
                {
                    title: "Menace sur la Biodiversité",
                    description: "L'exploitation abusive des berges et des réserves naturelles dégrade les forêts classées."
                },
                {
                    title: "Faibles Rendements",
                    description: "La productivité agricole s'effondre (ex: 0,7 t/ha pour le maïs), aggravant la pauvreté."
                }
            ]
        },
        impact: {
            text: "Votre soutien aura un impact direct et durable sur les communautés et leur environnement :",
            items: [
                "Restauration de 100 ha du couvert végétal des berges et des terres dégradées.",
                "Développement des filières forestières (25 ha de fourrage, 100 ruches, huiles).",
                "Aménagement et valorisation de 100 ha de rizière et de maraîchage.",
                "Formation de 1 000 producteurs (70% femmes/jeunes) aux technologies intégrées (SRI, GIFS).",
                "Création de 65 micro-entreprises intégrées cogérées par les femmes et les jeunes.",
                "Mise en place d'un fonds d’investissement local autogéré (AVEC) pour 3 000 producteurs."
            ],
            footer: ""
        },
        partners: [
            { name: "GRAPHE (Direction Nationale)", icon: "G" },
            { name: "Collectivités locales des communes concernées", icon: "C" },
            { name: "Direction régionale de l'agriculture et de l'environnement", icon: "A" },
            { name: "Entreprise de génie rural TESMECO", icon: "T" }
        ]
    }
];
