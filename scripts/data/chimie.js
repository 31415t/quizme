const chimie = [
  // ATOMES ET MOLÉCULES
  {
    question: "Le numéro atomique correspond au nombre de :",
    options: ["Neutrons", "Protons", "Électrons", "Noyaux"],
    answer: 1
  },
  {
    question: "Un atome neutre possède autant de :",
    options: ["Protons que neutrons", "Électrons que neutrons", "Protons que électrons", "Neutrons que noyaux"],
    answer: 2
  },
  {
    question: "Les électrons se trouvent :",
    options: ["Dans le noyau", "Autour du noyau", "Dans les neutrons", "Dans les protons"],
    answer: 1
  },
  {
    question: "Les éléments d’une même colonne du tableau périodique ont :",
    options: ["Le même nombre de couches électroniques", "Le même nombre de protons", "Des propriétés chimiques similaires", "Le même nombre de neutrons"],
    answer: 2
  },
  {
    question: "Le carbone a un numéro atomique de 6. Il possède donc :",
    options: ["6 électrons", "6 neutrons", "6 couches", "6 molécules"],
    answer: 0
  },
  {
    question: "Une liaison covalente implique :",
    options: ["Un transfert d’électrons", "Un partage d’électrons", "Une attraction électrostatique", "Une répulsion nucléaire"],
    answer: 1
  },
  {
    question: "Les gaz nobles sont :",
    options: ["Très réactifs", "Instables", "Inertes", "Radioactifs"],
    answer: 2
  },
  {
    question: "L’ion \\( \\text{Na}^+ \\) a :",
    options: ["Un électron de plus", "Un électron de moins", "Un proton de plus", "Un neutron de moins"],
    answer: 1
  },
  {
    question: "La masse atomique est principalement due aux :",
    options: ["Électrons", "Protons et neutrons", "Liaisons", "Couches électroniques"],
    answer: 1
  },
  {
    question: "Une molécule d’eau est composée de :",
    options: ["2 atomes d’oxygène et 1 d’hydrogène", "1 atome d’oxygène et 2 d’hydrogène", "3 atomes d’hydrogène", "1 atome de carbone et 2 d’oxygène"],
    answer: 1
  },

  // RÉACTIONS CHIMIQUES
  {
    question: "Une réaction de combustion implique :",
    options: ["De l’eau", "Du dioxygène", "Du dioxyde de carbone", "Du méthane uniquement"],
    answer: 1
  },
  {
    question: "Une réaction acide-base produit souvent :",
    options: ["Un gaz", "Un sel et de l’eau", "Un précipité", "Un métal"],
    answer: 1
  },
  {
    question: "Une équation chimique équilibrée respecte :",
    options: ["La conservation de la masse", "La conservation de l’énergie", "La conservation du volume", "La conservation du pH"],
    answer: 0
  },
  {
    question: "Dans \\( 2H_2 + O_2 \\rightarrow 2H_2O \\), le coefficient 2 devant \\( H_2 \\) indique :",
    options: ["La masse", "Le nombre de molécules", "La concentration", "Le volume"],
    answer: 1
  },
  {
    question: "Une réaction endothermique :",
    options: ["Libère de la chaleur", "Absorbe de la chaleur", "Ne change pas de température", "Est toujours rapide"],
    answer: 1
  },
  {
    question: "Une réaction de précipitation forme :",
    options: ["Un gaz", "Un liquide", "Un solide insoluble", "Un acide"],
    answer: 2
  },
  {
    question: "La stœchiométrie permet de :",
    options: ["Calculer les masses molaires", "Équilibrer les équations", "Prévoir les quantités de réactifs et produits", "Mesurer le pH"],
    answer: 2
  },
  {
    question: "Un catalyseur :",
    options: ["Augmente la vitesse de réaction", "Change les produits", "Est consommé", "Diminue la température"],
    answer: 0
  },
  {
    question: "Une oxydation est une perte :",
    options: ["D’électrons", "De protons", "De neutrons", "De masse"],
    answer: 0
  },
  {
    question: "Une réduction est un gain :",
    options: ["D’électrons", "De protons", "De neutrons", "De volume"],
    answer: 0
  },

  // SOLUTIONS
  {
    question: "La concentration \\( C \\) est définie par :",
    options: ["\\( C = \\frac{n}{V} \\)", "\\( C = n \\cdot V \\)", "\\( C = \\frac{V}{n} \\)", "\\( C = \\frac{m}{V} \\)"],
    answer: 0
  },
  {
    question: "Le pH d’une solution acide est :",
    options: ["Supérieur à 7", "Égal à 7", "Inférieur à 7", "Toujours nul"],
    answer: 2
  },
  {
    question: "Une solution basique a un pH :",
    options: ["Inférieur à 7", "Égal à 7", "Supérieur à 7", "Variable"],
    answer: 2
  },
  // SOLUTIONS (suite)
  {
    question: "Une solution saturée :",
    options: ["Contient peu de soluté", "Ne peut plus dissoudre de soluté", "Est toujours acide", "Est toujours basique"],
    answer: 1
  },
  {
    question: "Le solvant dans une solution aqueuse est :",
    options: ["L’eau", "Le sel", "Le sucre", "Le gaz"],
    answer: 0
  },
  {
    question: "Le pH d’une solution neutre est :",
    options: ["0", "7", "14", "1"],
    answer: 1
  },
  {
    question: "La solubilité dépend de :",
    options: ["La température", "La pression", "La nature du soluté", "Toutes les réponses"],
    answer: 3
  },
  {
    question: "Une solution diluée contient :",
    options: ["Beaucoup de soluté", "Peu de soluté", "Aucun soluté", "Un gaz uniquement"],
    answer: 1
  },
  {
    question: "Le pH peut être mesuré avec :",
    options: ["Un thermomètre", "Un voltmètre", "Du papier indicateur", "Un chronomètre"],
    answer: 2
  },
  {
    question: "Une base forte en solution donne :",
    options: ["Des ions \\( H^+ \\)", "Des ions \\( OH^- \\)", "Du gaz", "Du sel"],
    answer: 1
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Tous les acides ont un goût :",
    options: ["Sucré", "Salé", "Amer", "Aigre"],
    answer: 3
  },
  {
    question: "Le dioxyde de carbone est produit lors :",
    options: ["D’une combustion", "D’une dissolution", "D’une neutralisation", "D’une précipitation"],
    answer: 0
  },
  {
    question: "Une molécule est :",
    options: ["Un atome", "Un ensemble d’atomes liés", "Un ion", "Un proton"],
    answer: 1
  },
  {
    question: "Les métaux alcalins sont :",
    options: ["Très réactifs", "Inertes", "Liquides", "Radioactifs"],
    answer: 0
  },
  {
    question: "L’eau pure est :",
    options: ["Acide", "Basique", "Neutre", "Salée"],
    answer: 2
  },
  {
    question: "Le sel de table est :",
    options: ["\\( NaCl \\)", "\\( KCl \\)", "\\( CaCl_2 \\)", "\\( MgCl_2 \\)"],
    answer: 0
  },
  {
    question: "Une réaction chimique modifie :",
    options: ["Les noyaux", "Les électrons de valence", "La masse atomique", "La température du noyau"],
    answer: 1
  },
  {
    question: "Un précipité est :",
    options: ["Un gaz invisible", "Un liquide coloré", "Un solide formé dans une solution", "Une solution saturée"],
    answer: 2
  },
  {
    question: "Une solution concentrée a :",
    options: ["Un pH élevé", "Beaucoup de soluté", "Peu de solvant", "Une température basse"],
    answer: 1
  },
  {
    question: "Le tableau périodique est organisé selon :",
    options: ["La masse atomique", "Le nombre de neutrons", "Le numéro atomique", "La densité"],
    answer: 2
  },
  {
    question: "Un ion négatif est appelé :",
    options: ["Cation", "Anion", "Neutron", "Proton"],
    answer: 1
  },
  {
    question: "Une liaison ionique se forme entre :",
    options: ["Deux métaux", "Deux non-métaux", "Un métal et un non-métal", "Deux gaz nobles"],
    answer: 2
  },
  {
    question: "Le dioxygène est :",
    options: ["\\( O \\)", "\\( O_2 \\)", "\\( O_3 \\)", "\\( CO_2 \\)"],
    answer: 1
  },
  {
    question: "Une réaction chimique est équilibrée quand :",
    options: ["Les produits sont plus nombreux", "Les réactifs sont plus lourds", "Le nombre d’atomes est conservé", "Le pH est constant"],
    answer: 2
  },
  {
    question: "Une solution acide contient :",
    options: ["Des ions \\( OH^- \\)", "Des ions \\( H^+ \\)", "Des ions \\( Na^+ \\)", "Des ions \\( Cl^- \\)"],
    answer: 1
  },
  // HYDROCARBURES
  {
    question: "Les alcanes sont des hydrocarbures :",
    options: ["Saturés", "Insaturés", "Aromatiques", "Ramifiés uniquement"],
    answer: 0
  },
  {
    question: "La formule générale des alcanes est :",
    options: ["\\( C_nH_{2n} \\)", "\\( C_nH_{2n+2} \\)", "\\( C_nH_{2n-2} \\)", "\\( C_nH_n \\)"],
    answer: 1
  },
  {
    question: "Les alcènes possèdent :",
    options: ["Une triple liaison", "Une double liaison", "Une liaison aromatique", "Aucune liaison multiple"],
    answer: 1
  },
  {
    question: "Les alcynes sont caractérisés par :",
    options: ["Une double liaison", "Une triple liaison", "Une liaison simple", "Un cycle benzénique"],
    answer: 1
  },
  {
    question: "Le méthane est un :",
    options: ["Alcène", "Alcyne", "Alcane", "Alcool"],
    answer: 2
  },
  {
    question: "L’éthène est un exemple de :",
    options: ["Alcane", "Alcène", "Alcyne", "Ester"],
    answer: 1
  },
  {
    question: "Les hydrocarbures insaturés sont :",
    options: ["Les alcanes", "Les alcènes et alcynes", "Les alcools", "Les acides carboxyliques"],
    answer: 1
  },

  // GROUPES FONCTIONNELS
  {
    question: "Un alcool contient le groupe fonctionnel :",
    options: ["\\( -COOH \\)", "\\( -OH \\)", "\\( -CHO \\)", "\\( -NH_2 \\)"],
    answer: 1
  },
  {
    question: "Un acide carboxylique contient :",
    options: ["\\( -OH \\)", "\\( -COOH \\)", "\\( -COO \\)", "\\( -CH_3 \\)"],
    answer: 1
  },
  {
    question: "Un ester résulte de la réaction entre :",
    options: ["Un alcool et un acide carboxylique", "Deux alcools", "Deux acides", "Un alcène et un alcyne"],
    answer: 0
  },
  {
    question: "Le groupe \\( -COOH \\) est :",
    options: ["Basique", "Neutre", "Acide", "Ionique"],
    answer: 2
  },
  {
    question: "Le groupe \\( -OH \\) est présent dans :",
    options: ["Les alcools", "Les esters", "Les acides", "Les alcanes"],
    answer: 0
  },
  {
    question: "Les esters ont souvent une odeur :",
    options: ["Aigre", "Sucrée", "Amère", "Inodore"],
    answer: 1
  },

  // RÉACTIONS ORGANIQUES
  {
    question: "Une réaction d’addition se produit sur :",
    options: ["Une liaison simple", "Une liaison double ou triple", "Un groupe \\( -OH \\)", "Un cycle aromatique"],
    answer: 1
  },
  {
    question: "Une substitution remplace :",
    options: ["Un atome ou groupe par un autre", "Une liaison par une autre", "Un cycle par une chaîne", "Un acide par une base"],
    answer: 0
  },
  {
    question: "Une élimination forme :",
    options: ["Une liaison multiple", "Un précipité", "Un gaz", "Un ester"],
    answer: 0
  },
  {
    question: "L’hydrogénation d’un alcène donne :",
    options: ["Un alcyne", "Un alcane", "Un alcool", "Un ester"],
    answer: 1
  },
  {
    question: "La déshydratation d’un alcool peut produire :",
    options: ["Un alcène", "Un acide", "Un ester", "Un alcyne"],
    answer: 0
  },
  {
    question: "Une réaction d’estérification produit :",
    options: ["Un alcool", "Un acide", "Un ester", "Un alcène"],
    answer: 2
  },
  {
    question: "La rupture d’une liaison \\( \\pi \\) est typique de :",
    options: ["Une substitution", "Une addition", "Une élimination", "Une oxydation"],
    answer: 1
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Tous les hydrocarbures contiennent :",
    options: ["Carbone et oxygène", "Hydrogène et oxygène", "Carbone et hydrogène", "Carbone et azote"],
    answer: 2
  },
  {
    question: "Un composé organique est toujours :",
    options: ["Solide", "Liquide", "Gazeux", "À base de carbone"],
    answer: 3
  },
  {
    question: "Un acide carboxylique est plus acide qu’un alcool car :",
    options: ["Il contient plus d’oxygène", "Il libère plus facilement \\( H^+ \\)", "Il est plus lourd", "Il est plus soluble"],
    answer: 1
  },
  // HYDROCARBURES (suite)
  {
    question: "La formule brute du butane est :",
    options: ["\\( C_4H_{10} \\)", "\\( C_4H_8 \\)", "\\( C_3H_8 \\)", "\\( C_5H_{12} \\)"],
    answer: 0
  },
  {
    question: "Un hydrocarbure cyclique est :",
    options: ["Toujours aromatique", "Toujours saturé", "Peut être saturé ou insaturé", "Toujours un alcène"],
    answer: 2
  },
  {
    question: "Le benzène est un :",
    options: ["Alcène", "Alcyne", "Hydrocarbure aromatique", "Alcool"],
    answer: 2
  },
  {
    question: "Les isomères ont :",
    options: ["La même formule brute mais des structures différentes", "Des masses différentes", "Des atomes différents", "Des groupes fonctionnels identiques"],
    answer: 0
  },

  // GROUPES FONCTIONNELS (suite)
  {
    question: "Le groupe \\( -CHO \\) correspond à :",
    options: ["Un alcool", "Un aldéhyde", "Un acide", "Un ester"],
    answer: 1
  },
  {
    question: "Un composé avec \\( -COOCH_3 \\) est :",
    options: ["Un ester", "Un acide", "Un alcool", "Un alcyne"],
    answer: 0
  },
  {
    question: "Les acides carboxyliques réagissent avec les alcools pour former :",
    options: ["Des aldéhydes", "Des esters", "Des cétones", "Des alcènes"],
    answer: 1
  },
  {
    question: "Les cétones possèdent le groupe :",
    options: ["\\( -COOH \\)", "\\( -OH \\)", "\\( >C=O \\)", "\\( -NH_2 \\)"],
    answer: 2
  },
  {
    question: "Un alcool primaire peut être oxydé en :",
    options: ["Cétone", "Ester", "Aldéhyde", "Alcène"],
    answer: 2
  },

  // RÉACTIONS ORGANIQUES (suite)
  {
    question: "Une réaction de substitution est typique des :",
    options: ["Alcanes", "Alcènes", "Esters", "Acides"],
    answer: 0
  },
  {
    question: "Une réaction d’addition est typique des :",
    options: ["Alcanes", "Alcènes et alcynes", "Esters", "Acides"],
    answer: 1
  },
  {
    question: "Une réaction d’élimination peut produire :",
    options: ["Un alcène", "Un ester", "Un alcool", "Un acide"],
    answer: 0
  },
  {
    question: "La réaction entre un acide et un alcool est appelée :",
    options: ["Hydrolyse", "Estérification", "Addition", "Substitution"],
    answer: 1
  },
  {
    question: "Une réaction d’oxydation augmente :",
    options: ["Le nombre d’électrons", "Le nombre de liaisons \\( C-H \\)", "Le nombre de liaisons \\( C-O \\)", "La masse molaire"],
    answer: 2
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Un ester est souvent utilisé pour :",
    options: ["Colorer les solutions", "Donner des arômes", "Neutraliser les acides", "Produire du gaz"],
    answer: 1
  },
  {
    question: "Un alcène peut être transformé en alcane par :",
    options: ["Oxydation", "Hydrogénation", "Estérification", "Substitution"],
    answer: 1
  },
  {
    question: "Un acide carboxylique est plus acide qu’un alcool car :",
    options: ["Il contient plus d’oxygène", "Il libère plus facilement \\( H^+ \\)", "Il est plus lourd", "Il est plus soluble"],
    answer: 1
  },
  {
    question: "Un composé organique est toujours :",
    options: ["À base de carbone", "Soluble dans l’eau", "Un gaz", "Un acide"],
    answer: 0
  },
  {
    question: "Les alcynes sont plus réactifs que les alcènes car :",
    options: ["Ils sont plus lourds", "Ils ont une triple liaison", "Ils sont saturés", "Ils sont aromatiques"],
    answer: 1
  },
  {
    question: "Une liaison \\( \\pi \\) est :",
    options: ["Plus faible qu’une liaison \\( \\sigma \\)", "Plus forte qu’une liaison \\( \\sigma \\)", "Toujours présente dans les alcanes", "Une liaison ionique"],
    answer: 0
  },
  {
    question: "Un alcool secondaire peut être oxydé en :",
    options: ["Aldéhyde", "Cétone", "Acide", "Ester"],
    answer: 1
  },
  {
    question: "Le groupe \\( -OH \\) rend la molécule :",
    options: ["Hydrophobe", "Hydrophile", "Neutre", "Volatile"],
    answer: 1
  }
];
