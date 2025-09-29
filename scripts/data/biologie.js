// scripts/data/biologie.js

/**
 * 100 QCM de biologie pour le programme du nouveau secondaire haïtien,
 * toutes branches confondues. Chaque question est accompagnée d’une
 * explication pour renforcer l’apprentissage.
 */
const biologie = [
  // STRUCTURE CELLULAIRE
  {
    question: "La cellule procaryote se distingue de la cellule eucaryote par :",
    options: ["La présence d’un noyau", "L’absence de membrane plasmique", "L’absence de noyau", "La présence de mitochondries"],
    answer: 2
  },
  {
    question: "Les cellules eucaryotes possèdent :",
    options: ["Un noyau délimité par une membrane", "Un ADN circulaire", "Une paroi rigide", "Aucune membrane interne"],
    answer: 0
  },
  {
    question: "La cellule bactérienne est :",
    options: ["Eucaryote", "Procaryote", "Végétale", "Animale"],
    answer: 1
  },
  {
    question: "Le matériel génétique d’une bactérie est :",
    options: ["Dans le noyau", "Dans le cytoplasme", "Dans les mitochondries", "Dans le réticulum endoplasmique"],
    answer: 1
  },
  {
    question: "La cellule végétale possède une structure absente chez l’animal :",
    options: ["Membrane plasmique", "Mitochondrie", "Paroi cellulosique", "Noyau"],
    answer: 2
  },

  // ORGANITES
  {
    question: "Les mitochondries sont responsables de :",
    options: ["La photosynthèse", "La respiration cellulaire", "La synthèse des protéines", "La division cellulaire"],
    answer: 1
  },
  {
    question: "Le noyau contient :",
    options: ["Le cytoplasme", "Les ribosomes", "L’ADN", "Les vacuoles"],
    answer: 2
  },
  {
    question: "Les ribosomes sont impliqués dans :",
    options: ["La respiration", "La synthèse des protéines", "La photosynthèse", "La division cellulaire"],
    answer: 1
  },
  {
    question: "Le réticulum endoplasmique rugueux est associé à :",
    options: ["La synthèse lipidique", "La synthèse protéique", "La digestion", "La respiration"],
    answer: 1
  },
  {
    question: "Les chloroplastes sont présents uniquement dans :",
    options: ["Les cellules animales", "Les cellules végétales", "Les cellules bactériennes", "Toutes les cellules"],
    answer: 1
  },

  // MULTIPLICATION CELLULAIRE
  {
    question: "La mitose permet :",
    options: ["La formation de cellules sexuelles", "La division en deux cellules identiques", "La réduction du nombre de chromosomes", "La différenciation cellulaire"],
    answer: 1
  },
  {
    question: "La méiose produit :",
    options: ["Des cellules identiques", "Des cellules diploïdes", "Des cellules haploïdes", "Des cellules végétales"],
    answer: 2
  },
  {
    question: "La méiose est essentielle pour :",
    options: ["La croissance", "La réparation", "La reproduction sexuée", "La respiration"],
    answer: 2
  },

  // MÉTABOLISME CELLULAIRE
  {
    question: "La respiration cellulaire se déroule principalement dans :",
    options: ["Le noyau", "Les mitochondries", "Les chloroplastes", "Le cytoplasme"],
    answer: 1
  },
  {
    question: "La photosynthèse produit :",
    options: ["Du dioxyde de carbone", "De l’oxygène et du glucose", "De l’eau", "Des protéines"],
    answer: 1
  },
  {
    question: "La photosynthèse a lieu dans :",
    options: ["Les mitochondries", "Les ribosomes", "Les chloroplastes", "Le noyau"],
    answer: 2
  },

  // DIFFÉRENCIATION CELLULAIRE
  {
    question: "La différenciation cellulaire permet :",
    options: ["La création de cellules identiques", "La spécialisation des cellules", "La division cellulaire", "La disparition des organites"],
    answer: 1
  },
  {
    question: "Une cellule souche peut :",
    options: ["Se différencier en plusieurs types cellulaires", "Se diviser uniquement une fois", "Produire de l’ATP", "Effectuer la photosynthèse"],
    answer: 0
  },
  {
    question: "La spécialisation cellulaire est liée à :",
    options: ["La perte du noyau", "L’expression sélective de certains gènes", "La duplication de l’ADN", "La présence de chloroplastes"],
    answer: 1
  },
  // PLANTES À FLEURS
  {
    question: "Les plantes à fleurs sont aussi appelées :",
    options: ["Gymnospermes", "Angiospermes", "Bryophytes", "Ptéridophytes"],
    answer: 1
  },
  {
    question: "La fonction principale de la fleur est :",
    options: ["La photosynthèse", "La reproduction", "L’absorption d’eau", "La respiration"],
    answer: 1
  },
  {
    question: "Le pistil est :",
    options: ["La partie mâle de la fleur", "La partie femelle de la fleur", "Une feuille modifiée", "Un tissu conducteur"],
    answer: 1
  },

  // PLANTES SANS FLEURS
  {
    question: "Les mousses sont des plantes :",
    options: ["À fleurs", "Sans fleurs", "À graines", "À fruits"],
    answer: 1
  },
  {
    question: "Les fougères se reproduisent par :",
    options: ["Graines", "Spores", "Fruits", "Bulbes"],
    answer: 1
  },

  // TISSUS VÉGÉTAUX
  {
    question: "Le xylème transporte :",
    options: ["Les sucres", "L’eau et les sels minéraux", "Le dioxyde de carbone", "Les hormones"],
    answer: 1
  },
  {
    question: "Le phloème transporte :",
    options: ["L’eau", "Les sels minéraux", "Les produits de la photosynthèse", "L’oxygène"],
    answer: 2
  },
  {
    question: "Le méristème est un tissu :",
    options: ["De soutien", "Conducteur", "De croissance", "Protecteur"],
    answer: 2
  },

  // SYSTÈME RACINAIRE
  {
    question: "La racine permet :",
    options: ["La reproduction", "La photosynthèse", "L’absorption d’eau et de minéraux", "La pollinisation"],
    answer: 2
  },
  {
    question: "Une racine pivotante est typique :",
    options: ["Des monocotylédones", "Des dicotylédones", "Des fougères", "Des algues"],
    answer: 1
  },

  // REPRODUCTION CHEZ LES VÉGÉTAUX
  {
    question: "La pollinisation est :",
    options: ["La fécondation", "Le transport du pollen", "La germination", "La photosynthèse"],
    answer: 1
  },
  {
    question: "La fécondation chez les plantes à fleurs se produit :",
    options: ["Dans la racine", "Dans le pistil", "Sur les pétales", "Dans le phloème"],
    answer: 1
  },
  {
    question: "La graine est issue de :",
    options: ["La feuille", "Le pollen", "L’ovule fécondé", "Le pétale"],
    answer: 2
  },
  {
    question: "La germination nécessite :",
    options: ["Lumière, eau et chaleur", "Oxygène, eau et température favorable", "CO₂ et chlorophylle", "Fleurs et racines"],
    answer: 1
  },
  {
    question: "La reproduction asexuée chez les plantes peut se faire par :",
    options: ["Graines", "Fruits", "Bouturage", "Pollinisation"],
    answer: 2
  },
  // VERTÉBRÉS ET INVERTÉBRÉS
  {
    question: "Les vertébrés se distinguent par :",
    options: ["Une carapace", "Une colonne vertébrale", "Des antennes", "Une peau nue"],
    answer: 1
  },
  {
    question: "Les invertébrés n’ont pas :",
    options: ["De cerveau", "De squelette interne", "De système digestif", "De muscles"],
    answer: 1
  },
  {
    question: "Les insectes sont des :",
    options: ["Vertébrés", "Invertébrés", "Mammifères", "Amphibiens"],
    answer: 1
  },
  {
    question: "Les poissons sont des vertébrés qui respirent grâce à :",
    options: ["Des poumons", "Des branchies", "Des trachées", "Leur peau"],
    answer: 1
  },
  {
    question: "Les mammifères se caractérisent par :",
    options: ["La ponte d’œufs", "La présence de plumes", "L’allaitement des petits", "La respiration par la peau"],
    answer: 2
  },

  // TISSUS ANIMAUX
  {
    question: "Le tissu musculaire permet :",
    options: ["La digestion", "La contraction", "La reproduction", "La respiration"],
    answer: 1
  },
  {
    question: "Le tissu nerveux est spécialisé dans :",
    options: ["La protection", "La conduction de l’influx", "La contraction", "La reproduction"],
    answer: 1
  },
  {
    question: "Le tissu épithélial recouvre :",
    options: ["Les os", "Les organes et cavités", "Les muscles", "Le sang"],
    answer: 1
  },
  {
    question: "Le tissu conjonctif sert à :",
    options: ["Transmettre l’influx nerveux", "Relier et soutenir les tissus", "Produire des hormones", "Digérer les aliments"],
    answer: 1
  },

  // SYSTÈME IMMUNITAIRE
  {
    question: "Les globules blancs sont impliqués dans :",
    options: ["La respiration", "La digestion", "La défense immunitaire", "La reproduction"],
    answer: 2
  },
  {
    question: "Les anticorps sont produits par :",
    options: ["Les globules rouges", "Les lymphocytes B", "Les neurones", "Les muscles"],
    answer: 1
  },
  {
    question: "Une inflammation est une réponse :",
    options: ["Digestive", "Immunitaire", "Respiratoire", "Reproductive"],
    answer: 1
  },

  // SYSTÈME ENDOCRINIEN
  {
    question: "Les hormones sont sécrétées par :",
    options: ["Les muscles", "Les glandes", "Les os", "Les intestins"],
    answer: 1
  },
  {
    question: "L’insuline régule :",
    options: ["La température", "La pression sanguine", "Le taux de glucose", "Le rythme cardiaque"],
    answer: 2
  },
  {
    question: "La thyroïde influence :",
    options: ["La digestion", "Le métabolisme", "La respiration", "La reproduction"],
    answer: 1
  },

  // SYSTÈME NERVEUX
  {
    question: "Le cerveau fait partie du :",
    options: ["Système digestif", "Système nerveux central", "Système musculaire", "Système circulatoire"],
    answer: 1
  },
  {
    question: "Les neurones transmettent :",
    options: ["Des hormones", "Des influx électriques", "Du sang", "Des enzymes"],
    answer: 1
  },
  {
    question: "La moelle épinière est responsable de :",
    options: ["La digestion", "La reproduction", "La transmission nerveuse", "La respiration"],
    answer: 2
  },

  // SYSTÈME SQUELETTIQUE ET MUSCULAIRE
  {
    question: "Le squelette protège :",
    options: ["Les muscles", "Les organes internes", "La peau", "Le sang"],
    answer: 1
  },
  {
    question: "Les os sont reliés entre eux par :",
    options: ["Des muscles", "Des tendons", "Des ligaments", "Des nerfs"],
    answer: 2
  },
  {
    question: "Les muscles squelettiques sont contrôlés :",
    options: ["Volontairement", "Inconsciemment", "Par le cœur", "Par les poumons"],
    answer: 0
  },
  {
    question: "Le cœur est un muscle :",
    options: ["Squelettique", "Lisse", "Cardiaque", "Volontaire"],
    answer: 2
  },
  // SYSTÈME CIRCULATOIRE
  {
    question: "Le cœur pompe le sang vers :",
    options: ["Les poumons uniquement", "Le cerveau uniquement", "Tout le corps", "Le foie uniquement"],
    answer: 2
  },
  {
    question: "Les globules rouges transportent :",
    options: ["Le glucose", "L’oxygène", "Le dioxyde de carbone", "Les hormones"],
    answer: 1
  },
  {
    question: "Les artères transportent le sang :",
    options: ["Vers le cœur", "Loin du cœur", "Vers les poumons uniquement", "Vers les reins uniquement"],
    answer: 1
  },

  // SYSTÈME DIGESTIF
  {
    question: "La digestion commence dans :",
    options: ["L’estomac", "La bouche", "L’intestin grêle", "Le foie"],
    answer: 1
  },
  {
    question: "Le foie produit :",
    options: ["Des enzymes digestives", "De la bile", "Du glucose", "Des hormones"],
    answer: 1
  },
  {
    question: "L’intestin grêle est responsable de :",
    options: ["L’absorption des nutriments", "La production de bile", "La filtration du sang", "La respiration"],
    answer: 0
  },

  // SYSTÈME TÉGUMENTAIRE
  {
    question: "La peau est un organe qui :",
    options: ["Produit des hormones", "Protège contre les agressions extérieures", "Pompe le sang", "Digère les aliments"],
    answer: 1
  },
  {
    question: "La sueur est produite par :",
    options: ["Les glandes salivaires", "Les glandes sudoripares", "Les glandes digestives", "Les glandes endocrines"],
    answer: 1
  },

  // SYSTÈME REPRODUCTEUR
  {
    question: "Les spermatozoïdes sont produits dans :",
    options: ["La prostate", "Les testicules", "Les reins", "L’intestin"],
    answer: 1
  },
  {
    question: "L’ovule est fécondé dans :",
    options: ["L’utérus", "Les ovaires", "La trompe de Fallope", "Le vagin"],
    answer: 2
  },
  {
    question: "La reproduction sexuée implique :",
    options: ["Un seul parent", "Deux cellules identiques", "Deux cellules sexuelles", "Une mitose"],
    answer: 2
  },

  // SYSTÈME EXCRÉTEUR
  {
    question: "Les reins filtrent :",
    options: ["Le sang", "La bile", "L’air", "Les hormones"],
    answer: 0
  },
  {
    question: "L’urine est stockée dans :",
    options: ["Les reins", "La vessie", "Le foie", "L’intestin"],
    answer: 1
  },
  {
    question: "Le rôle principal du système excréteur est :",
    options: ["La digestion", "L’élimination des déchets", "La reproduction", "La respiration"],
    answer: 1
  },

  // REPRODUCTION CHEZ LES ANIMAUX
  {
    question: "La fécondation interne est typique :",
    options: ["Des poissons", "Des mammifères", "Des amphibiens", "Des insectes"],
    answer: 1
  },
  {
    question: "La métamorphose est observée chez :",
    options: ["Les mammifères", "Les oiseaux", "Les insectes", "Les reptiles"],
    answer: 2
  },
  {
    question: "La reproduction asexuée chez les animaux est :",
    options: ["Courante chez les mammifères", "Possible chez certains invertébrés", "Typique des oiseaux", "Observée chez les poissons uniquement"],
    answer: 1
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Le sang circule grâce :",
    options: ["Aux poumons", "Au foie", "Au cœur", "À la peau"],
    answer: 2
  },
  {
    question: "Les os sont vivants car ils :",
    options: ["Sont rigides", "Produisent des cellules", "Ne changent jamais", "Sont faits de calcium uniquement"],
    answer: 1
  },
  {
    question: "Le cerveau contrôle :",
    options: ["La digestion uniquement", "La respiration uniquement", "Toutes les fonctions vitales", "La reproduction uniquement"],
    answer: 2
  },
  {
    question: "Les muscles lisses se trouvent dans :",
    options: ["Le squelette", "Le cœur", "Les organes internes", "La peau"],
    answer: 2
  },
  {
    question: "Le système immunitaire reconnaît les agents pathogènes grâce à :",
    options: ["Le foie", "Les anticorps", "Les neurones", "Les muscles"],
    answer: 1
  },
  // ÉCOSYSTÈMES
  {
    question: "Un écosystème est composé de :",
    options: ["Organismes vivants uniquement", "Milieu physique uniquement", "Organismes vivants et leur environnement", "Ressources minérales uniquement"],
    answer: 2
  },
  {
    question: "La biosphère regroupe :",
    options: ["Tous les océans", "Tous les êtres vivants", "Tous les écosystèmes", "Tous les gaz atmosphériques"],
    answer: 2
  },
  {
    question: "Un biotope est :",
    options: ["Un ensemble d’espèces", "Un habitat physique", "Un cycle biologique", "Un type de climat"],
    answer: 1
  },

  // INTERACTIONS ENTRE ORGANISMES
  {
    question: "La prédation est une interaction où :",
    options: ["Deux espèces coopèrent", "Une espèce consomme une autre", "Les deux espèces bénéficient", "Une espèce parasite une autre"],
    answer: 1
  },
  {
    question: "Le mutualisme est une interaction :",
    options: ["Négative", "Neutre", "Bénéfique pour les deux espèces", "Bénéfique pour une seule espèce"],
    answer: 2
  },
  {
    question: "La compétition entre espèces concerne :",
    options: ["La reproduction", "La recherche de ressources", "La migration", "La photosynthèse"],
    answer: 1
  },

  // CYCLES BIOCHIMIQUES
  {
    question: "Le cycle du carbone implique :",
    options: ["La photosynthèse et la respiration", "La digestion et la reproduction", "La précipitation et l’évaporation", "La pollinisation et la germination"],
    answer: 0
  },
  {
    question: "Le cycle de l’eau comprend :",
    options: ["La photosynthèse", "La condensation, évaporation et précipitation", "La respiration", "La fermentation"],
    answer: 1
  },
  {
    question: "Les décomposeurs jouent un rôle dans :",
    options: ["La production primaire", "La dispersion des graines", "Le recyclage de la matière organique", "La pollinisation"],
    answer: 2
  },

  // CONSERVATION DE LA BIODIVERSITÉ
  {
    question: "La biodiversité désigne :",
    options: ["La variété des climats", "La variété des espèces et des écosystèmes", "La quantité de carbone", "La richesse en eau"],
    answer: 1
  },
  {
    question: "La disparition d’une espèce peut :",
    options: ["Ne rien changer", "Déséquilibrer un écosystème", "Augmenter la biodiversité", "Créer un nouveau biotope"],
    answer: 1
  },
  {
    question: "Les espèces menacées sont souvent victimes de :",
    options: ["Pollinisation", "Migration", "Déforestation et braconnage", "Photosynthèse excessive"],
    answer: 2
  },
  {
    question: "Les aires protégées servent à :",
    options: ["Augmenter la production agricole", "Préserver les espèces et les habitats", "Réduire la température", "Favoriser l’urbanisation"],
    answer: 1
  },
  {
    question: "La reforestation contribue à :",
    options: ["La perte de biodiversité", "L’augmentation du CO₂", "La régénération des écosystèmes", "La désertification"],
    answer: 2
  },
  {
    question: "Un écologue étudie :",
    options: ["Les cellules", "Les réactions chimiques", "Les interactions entre organismes et leur milieu", "Les lois physiques"],
    answer: 2
  },
  // HÉRÉDITÉ ET LOIS DE MENDEL
  {
    question: "La première loi de Mendel est la loi :",
    options: ["De la ségrégation", "De la dominance", "De l’indépendance", "De la mutation"],
    answer: 0
  },
  {
    question: "La deuxième loi de Mendel concerne :",
    options: ["La dominance", "La transmission des caractères liés", "L’assortiment indépendant des gènes", "La recombinaison génétique"],
    answer: 2
  },
  {
    question: "Un allèle dominant s’exprime :",
    options: ["Uniquement en double exemplaire", "Même en présence d’un allèle récessif", "Jamais", "Seulement chez les plantes"],
    answer: 1
  },
  {
    question: "Un individu hétérozygote possède :",
    options: ["Deux allèles identiques", "Deux allèles différents", "Un seul allèle", "Aucun gène"],
    answer: 1
  },
  {
    question: "La génétique mendélienne repose sur l’étude :",
    options: ["Des protéines", "Des chromosomes", "Des caractères héréditaires", "Des mutations spontanées"],
    answer: 2
  },

  // ADN : STRUCTURE ET FONCTIONS
  {
    question: "L’ADN est constitué de :",
    options: ["Acides aminés", "Nucléotides", "Lipides", "Sucres simples"],
    answer: 1
  },
  {
    question: "Les bases azotées de l’ADN sont :",
    options: ["A, U, G, C", "A, T, G, C", "A, T, U, G", "A, C, D, G"],
    answer: 1
  },
  {
    question: "La réplication de l’ADN est :",
    options: ["Semi-conservative", "Aléatoire", "Unidirectionnelle", "Non spécifique"],
    answer: 0
  },
  {
    question: "La transcription transforme l’ADN en :",
    options: ["ARNm", "Protéine", "Lipide", "Glucose"],
    answer: 0
  },
  {
    question: "La traduction permet de produire :",
    options: ["De l’ADN", "De l’ARN", "Des protéines", "Des enzymes de réplication"],
    answer: 2
  },

  // GÉNÉTIQUE MOLÉCULAIRE
  {
    question: "Un gène est :",
    options: ["Une protéine", "Un segment d’ADN codant pour une protéine", "Un chromosome entier", "Un acide aminé"],
    answer: 1
  },
  {
    question: "Les mutations génétiques sont :",
    options: ["Toujours dangereuses", "Toujours bénéfiques", "Des modifications de la séquence d’ADN", "Des erreurs de traduction"],
    answer: 2
  },
  {
    question: "Un codon est :",
    options: ["Une enzyme", "Un triplet de bases de l’ARNm", "Un acide aminé", "Un segment de chromosome"],
    answer: 1
  },
  {
    question: "La synthèse des protéines se déroule dans :",
    options: ["Le noyau", "Les ribosomes", "Les mitochondries", "Le cytosquelette"],
    answer: 1
  },

  // TRANSGÈNE ET OGM
  {
    question: "Un organisme transgénique contient :",
    options: ["Un gène modifié naturellement", "Un gène étranger introduit artificiellement", "Un gène supprimé", "Un gène inactif"],
    answer: 1
  },
  {
    question: "Les OGM sont créés pour :",
    options: ["Réduire la biodiversité", "Augmenter la résistance ou la productivité", "Remplacer les espèces naturelles", "Modifier le climat"],
    answer: 1
  },
  {
    question: "La transgénèse consiste à :",
    options: ["Supprimer un gène", "Ajouter un gène étranger dans un organisme", "Multiplier les cellules", "Modifier le pH cellulaire"],
    answer: 1
  },
  {
    question: "Un exemple d’OGM est :",
    options: ["Une bactérie naturelle", "Un maïs résistant aux insectes", "Un animal sauvage", "Une plante médicinale non modifiée"],
    answer: 1
  },
  {
    question: "Les OGM sont utilisés dans :",
    options: ["La médecine uniquement", "L’agriculture et la recherche", "La construction", "La production d’énergie"],
    answer: 1
  }
];
