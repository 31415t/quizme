const physique = [
  // CINÉMATIQUE
  {
    question: "La vitesse moyenne est définie par :",
    options: ["\\( v = \\frac{d}{t} \\)", "\\( v = d \\times t \\)", "\\( v = \\frac{t}{d} \\)", "\\( v = d + t \\)"],
    answer: 0
  },
  {
    question: "Si un mobile parcourt 60 m en 3 s, sa vitesse est :",
    options: ["20 m/s", "18 m/s", "15 m/s", "12 m/s"],
    answer: 0
  },
  {
    question: "L’accélération est définie comme :",
    options: ["\\( a = \\frac{v}{t} \\)", "\\( a = v \\times t \\)", "\\( a = \\frac{t}{v} \\)", "\\( a = v + t \\)"],
    answer: 0
  },
  {
    question: "Un mouvement circulaire uniforme a une accélération :",
    options: ["Nulle", "Radiale", "Tangente", "Variable"],
    answer: 1
  },
  {
    question: "Complétez : la position est la ... du mobile à un instant donné.",
    options: ["vitesse", "direction", "localisation", "accélération"],
    answer: 2
  },

  // DYNAMIQUE
  {
    question: "La première loi de Newton est aussi appelée :",
    options: ["Principe d’inertie", "Principe d’action-réaction", "Principe fondamental", "Principe de conservation"],
    answer: 0
  },
  {
    question: "La force résultante est nulle, alors le corps :",
    options: ["Accélère", "Décélère", "Reste au repos ou en mouvement rectiligne uniforme", "Tourne"],
    answer: 2
  },
  {
    question: "La deuxième loi de Newton s’écrit :",
    options: ["\\( F = ma \\)", "\\( F = \\frac{m}{a} \\)", "\\( F = m + a \\)", "\\( F = a - m \\)"],
    answer: 0
  },
  {
    question: "L’unité de la force est :",
    options: ["kg", "m/s", "N", "J"],
    answer: 2
  },
  {
    question: "La troisième loi de Newton implique que :",
    options: ["Les forces sont égales et opposées", "La masse est constante", "L’accélération est nulle", "La vitesse est maximale"],
    answer: 0
  },

  // ÉNERGIE
  {
    question: "Le travail d’une force constante est donné par :",
    options: ["\\( W = F \\cdot d \\cdot \\cos(\\theta) \\)", "\\( W = F + d \\)", "\\( W = \\frac{F}{d} \\)", "\\( W = F \\cdot d^2 \\)"],
    answer: 0
  },
  {
    question: "L’unité du travail est :",
    options: ["W", "N", "J", "kg"],
    answer: 2
  },
  {
    question: "La puissance est définie comme :",
    options: ["\\( P = \\frac{W}{t} \\)", "\\( P = W \\cdot t \\)", "\\( P = W + t \\)", "\\( P = \\frac{t}{W} \\)"],
    answer: 0
  },
  {
    question: "L’énergie cinétique est donnée par :",
    options: ["\\( E_c = \\frac{1}{2}mv^2 \\)", "\\( E_c = mv \\)", "\\( E_c = m + v \\)", "\\( E_c = \\frac{mv}{2} \\)"],
    answer: 0
  },
  {
    question: "L’énergie potentielle gravitationnelle est :",
    options: ["\\( E_p = mgh \\)", "\\( E_p = \\frac{1}{2}mv^2 \\)", "\\( E_p = mg \\)", "\\( E_p = h \\cdot v \\)"],
    answer: 0
  },
  {
    question: "L’énergie mécanique est la somme de :",
    options: ["Travail et puissance", "Cinétique et potentielle", "Force et masse", "Vitesse et accélération"],
    answer: 1
  },

  // MÉCANIQUE DES FLUIDES
  {
    question: "La pression est définie par :",
    options: ["\\( P = \\frac{F}{S} \\)", "\\( P = F \\cdot S \\)", "\\( P = F + S \\)", "\\( P = \\frac{S}{F} \\)"],
    answer: 0
  },
  {
    question: "L’unité de la pression est :",
    options: ["N", "Pa", "J", "kg"],
    answer: 1
  },
  {
    question: "Le théorème de Pascal affirme que :",
    options: ["La pression diminue avec la profondeur", "La pression se transmet intégralement dans un fluide", "La masse est conservée", "La vitesse est constante"],
    answer: 1
  },
  {
    question: "Le principe d’Archimède concerne :",
    options: ["La force de frottement", "La poussée exercée par un fluide", "La pression atmosphérique", "La gravité"],
    answer: 1
  },
  {
    question: "La poussée d’Archimède est égale au poids :",
    options: ["Du fluide déplacé", "Du corps immergé", "De l’air", "De la surface"],
    answer: 0
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Un corps en chute libre sans frottement :",
    options: ["Accélère", "Décélère", "Reste immobile", "Tourne"],
    answer: 0
  },
  {
    question: "Si la vitesse est constante, alors l’accélération est :",
    options: ["Nulle", "Maximale", "Variable", "Inconnue"],
    answer: 0
  },
  {
    question: "Un objet lancé vers le haut a une accélération :",
    options: ["Vers le haut", "Vers le bas", "Nulle", "Horizontale"],
    answer: 1
  },
  {
    question: "Complétez : la masse est une grandeur ..., le poids est une grandeur ...",
    options: ["vectorielle / scalaire", "scalaire / vectorielle", "constante / variable", "fixe / mobile"],
    answer: 1
  },
  {
    question: "La pression augmente avec :",
    options: ["La profondeur", "La température", "La vitesse", "La masse volumique"],
    answer: 0
  },
  {
    question: "Un fluide incompressible a :",
    options: ["Une masse variable", "Un volume constant", "Une pression nulle", "Une température constante"],
    answer: 1
  },
  {
    question: "La vitesse angulaire \\( \\omega \\) est liée à la période \\( T \\) par :",
    options: ["\\( \\omega = \\frac{2\\pi}{T} \\)", "\\( \\omega = 2\\pi T \\)", "\\( \\omega = \\frac{T}{2\\pi} \\)", "\\( \\omega = \\pi T \\)"],
    answer: 0
  },
  {
    question: "La trajectoire d’un mouvement rectiligne uniforme est :",
    options: ["Une droite", "Un cercle", "Une parabole", "Une spirale"],
    answer: 0
  },
  {
    question: "La force de gravité agit :",
    options: ["Vers le haut", "Vers le centre de la Terre", "Horizontalement", "En rotation"],
    answer: 1
  },
  // ÉLECTROSTATIQUE
  {
    question: "La charge élémentaire \\( e \\) vaut :",
    options: ["\\( 1.6 \\times 10^{-19} \\text{C} \\)", "\\( 9.8 \\text{N/kg} \\)", "\\( 3.0 \\times 10^8 \\text{m/s} \\)", "\\( 6.02 \\times 10^{23} \\)"],
    answer: 0
  },
  {
    question: "Deux charges de même signe :",
    options: ["S’attirent", "Se repoussent", "S’annulent", "Ne réagissent pas"],
    answer: 1
  },
  {
    question: "La loi de Coulomb s’écrit :",
    options: ["\\( F = k \\frac{q_1 q_2}{r^2} \\)", "\\( F = qE \\)", "\\( F = ma \\)", "\\( F = \\frac{q}{r^2} \\)"],
    answer: 0
  },
  {
    question: "Le champ électrique \\( E \\) créé par une charge ponctuelle est :",
    options: ["\\( E = \\frac{q}{r} \\)", "\\( E = \\frac{kq}{r^2} \\)", "\\( E = q \\cdot r \\)", "\\( E = \\frac{r^2}{q} \\)"],
    answer: 1
  },
  {
    question: "Le potentiel électrique \\( V \\) est lié au champ \\( E \\) par :",
    options: ["\\( E = -\\frac{dV}{dx} \\)", "\\( V = \\frac{E}{d} \\)", "\\( E = V \\cdot d \\)", "\\( V = Ed \\)"],
    answer: 0
  },

  // COURANT ÉLECTRIQUE
  {
    question: "La loi d’Ohm s’écrit :",
    options: ["\\( U = RI \\)", "\\( R = UI \\)", "\\( I = UR \\)", "\\( U = \\frac{R}{I} \\)"],
    answer: 0
  },
  {
    question: "L’unité de la résistance est :",
    options: ["Ampère", "Volt", "Ohm", "Watt"],
    answer: 2
  },
  {
    question: "Dans un circuit série, l’intensité est :",
    options: ["La même partout", "Divisée entre les composants", "Nulle", "Variable"],
    answer: 0
  },
  {
    question: "La puissance électrique est donnée par :",
    options: ["\\( P = UI \\)", "\\( P = \\frac{U}{I} \\)", "\\( P = IR \\)", "\\( P = U^2 \\)"],
    answer: 0
  },
  {
    question: "Dans un circuit parallèle, la tension est :",
    options: ["La même pour chaque branche", "Divisée par le nombre de branches", "Nulle", "Variable"],
    answer: 0
  },

  // MAGNÉTISME
  {
    question: "Le champ magnétique est noté :",
    options: ["\\( \\vec{E} \\)", "\\( \\vec{F} \\)", "\\( \\vec{B} \\)", "\\( \\vec{V} \\)"],
    answer: 2
  },
  {
    question: "L’unité du champ magnétique \\( B \\) est :",
    options: ["Tesla", "Volt", "Newton", "Ampère"],
    answer: 0
  },
  {
    question: "La force de Lorentz s’écrit :",
    options: ["\\( \\vec{F} = q \\vec{v} \\times \\vec{B} \\)", "\\( \\vec{F} = q \\vec{E} \\)", "\\( \\vec{F} = m \\vec{a} \\)", "\\( \\vec{F} = qB \\cdot v \\)"],
    answer: 0
  },
  {
    question: "La force de Laplace agit sur :",
    options: ["Une charge ponctuelle", "Un conducteur parcouru par un courant", "Un champ électrique", "Un aimant fixe"],
    answer: 1
  },
  {
    question: "La force de Laplace s’écrit :",
    options: ["\\( \\vec{F} = I \\vec{L} \\times \\vec{B} \\)", "\\( \\vec{F} = q \\vec{v} \\times \\vec{B} \\)", "\\( \\vec{F} = m \\vec{a} \\)", "\\( \\vec{F} = ILB \\cdot \\cos(\\theta) \\)"],
    answer: 0
  },
  {
    question: "L’induction électromagnétique est décrite par :",
    options: ["La loi de Faraday", "La loi d’Ohm", "La loi de Coulomb", "La loi de Newton"],
    answer: 0
  },
  {
    question: "Une variation du flux magnétique induit :",
    options: ["Un courant", "Une tension constante", "Une force gravitationnelle", "Une résistance"],
    answer: 0
  },
  {
    question: "Le flux magnétique \\( \\Phi \\) est donné par :",
    options: ["\\( \\Phi = B \\cdot S \\cdot \\cos(\\theta) \\)", "\\( \\Phi = B + S \\)", "\\( \\Phi = \\frac{B}{S} \\)", "\\( \\Phi = B \\cdot S^2 \\)"],
    answer: 0
  },
  {
    question: "La loi de Lenz indique que le courant induit :",
    options: ["Renforce la variation du flux", "S’oppose à la variation du flux", "Est nul", "Est constant"],
    answer: 1
  },
  {
    question: "Un aimant en mouvement dans une bobine crée :",
    options: ["Un champ électrique", "Un courant induit", "Une résistance", "Une force de Laplace"],
    answer: 1
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Une charge négative dans un champ électrique se déplace :",
    options: ["Dans le sens du champ", "Contre le champ", "En spirale", "Sans mouvement"],
    answer: 1
  },
  {
    question: "Un conducteur parfait a une résistance :",
    options: ["Nulle", "Faible", "Élevée", "Variable"],
    answer: 0
  },
  {
    question: "Le courant circule de :",
    options: ["La borne négative vers la positive", "La borne positive vers la négative", "Du neutre vers la terre", "Du champ vers la tension"],
    answer: 1
  },
  {
    question: "Un champ magnétique est créé par :",
    options: ["Une charge immobile", "Un courant électrique", "Une masse", "Une tension"],
    answer: 1
  },
  {
    question: "Le champ magnétique autour d’un fil rectiligne est :",
    options: ["Radial", "Circulaire", "Rectiligne", "Nul"],
    answer: 1
  },
  // CARACTÉRISTIQUES DES ONDES
  {
    question: "La vitesse d’une onde est donnée par :",
    options: ["\\( v = \\lambda f \\)", "\\( v = \\frac{f}{\\lambda} \\)", "\\( v = f + \\lambda \\)", "\\( v = \\lambda^2 f \\)"],
    answer: 0
  },
  {
    question: "L’unité de la fréquence est :",
    options: ["m/s", "Hz", "s", "J"],
    answer: 1
  },
  {
    question: "Une onde transversale se propage :",
    options: ["Dans le sens de la vibration", "Perpendiculairement à la vibration", "Sans vibration", "En spirale"],
    answer: 1
  },
  {
    question: "La période \\( T \\) est liée à la fréquence \\( f \\) par :",
    options: ["\\( T = \\frac{1}{f} \\)", "\\( T = f \\)", "\\( T = f^2 \\)", "\\( T = \\lambda f \\)"],
    answer: 0
  },
  {
    question: "Complétez : l’amplitude est la ... maximale de l’onde.",
    options: ["vitesse", "déformation", "fréquence", "longueur"],
    answer: 1
  },

  // RÉFLEXION
  {
    question: "La loi de la réflexion affirme que :",
    options: ["L’angle réfléchi est nul", "L’angle réfléchi est égal à l’angle incident", "La lumière change de direction", "La lumière est absorbée"],
    answer: 1
  },
  {
    question: "La réflexion se produit sur :",
    options: ["Un milieu transparent", "Une surface lisse", "Un prisme", "Un filtre"],
    answer: 1
  },
  {
    question: "Un miroir plan donne une image :",
    options: ["Inversée et réelle", "Droite et virtuelle", "Renversée et virtuelle", "Droite et réelle"],
    answer: 1
  },

  // RÉFRACTION
  {
    question: "La réfraction est due à :",
    options: ["Un changement de milieu", "Une surface réfléchissante", "Une absorption", "Une diffraction"],
    answer: 0
  },
  {
    question: "La loi de Snell-Descartes s’écrit :",
    options: ["\\( n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2) \\)", "\\( n_1 \\cos(\\theta_1) = n_2 \\cos(\\theta_2) \\)", "\\( n_1 = n_2 \\)", "\\( \\theta_1 = \\theta_2 \\)"],
    answer: 0
  },
  {
    question: "Quand la lumière passe de l’air à l’eau, elle :",
    options: ["Accélère", "Ralentit", "Ne change pas", "Disparaît"],
    answer: 1
  },
  {
    question: "L’indice de réfraction de l’air est environ :",
    options: ["1", "1.33", "0.5", "2"],
    answer: 0
  },

  // LENTILLES
  {
    question: "Une lentille convergente donne une image :",
    options: ["Toujours virtuelle", "Toujours réelle", "Parfois réelle, parfois virtuelle", "Toujours inversée"],
    answer: 2
  },
  {
    question: "La distance focale \\( f \\) d’une lentille est :",
    options: ["La distance entre le centre et l’image", "La distance entre le foyer et le centre optique", "La distance entre l’objet et l’image", "La distance entre le miroir et l’objet"],
    answer: 1
  },
  {
    question: "La vergence \\( C \\) est donnée par :",
    options: ["\\( C = \\frac{1}{f} \\)", "\\( C = f \\)", "\\( C = \\frac{f}{2} \\)", "\\( C = 2f \\)"],
    answer: 0
  },
  {
    question: "Une lentille divergente donne une image :",
    options: ["Réelle et inversée", "Virtuelle et droite", "Réelle et droite", "Virtuelle et inversée"],
    answer: 1
  },

  // MIROIRS
  {
    question: "Un miroir concave peut produire une image :",
    options: ["Toujours virtuelle", "Toujours réelle", "Réelle ou virtuelle selon la position", "Toujours inversée"],
    answer: 2
  },
  {
    question: "Un miroir convexe donne une image :",
    options: ["Réelle et agrandie", "Virtuelle et réduite", "Inversée et réelle", "Droite et réelle"],
    answer: 1
  },
  {
    question: "La formule des lentilles s’écrit :",
    options: ["\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\)", "\\( f = d_o + d_i \\)", "\\( f = \\frac{d_o}{d_i} \\)", "\\( f = \\frac{1}{d_o + d_i} \\)"],
    answer: 0
  },

  // QUESTIONS DE BON SENS ET PIÈGES
  {
    question: "Une onde sonore est :",
    options: ["Transversale", "Électromagnétique", "Longitudinale", "Stationnaire"],
    answer: 2
  },
  {
    question: "La lumière est une onde :",
    options: ["Mécanique", "Longitudinale", "Électromagnétique", "Sonore"],
    answer: 2
  },
  {
    question: "Une onde ne transporte pas :",
    options: ["Énergie", "Matière", "Fréquence", "Amplitude"],
    answer: 1
  },
  {
    question: "La vitesse de la lumière dans le vide est :",
    options: ["\\( 3 \\times 10^8 \\text{ m/s} \\)", "\\( 1.6 \\times 10^{-19} \\text{ m/s} \\)", "\\( 9.8 \\text{ m/s}^2 \\)", "\\( 6.02 \\times 10^{23} \\text{ m/s} \\)"],
    answer: 0
  },
  {
    question: "Une onde qui change de direction sans changer de milieu subit :",
    options: ["Réflexion", "Réfraction", "Diffraction", "Absorption"],
    answer: 0
  },
  {
    question: "Un objet lancé verticalement vers le haut a une accélération :",
    options: ["Vers le haut", "Vers le bas", "Nulle", "Variable"],
    answer: 1
  },
  {
    question: "Une onde électromagnétique peut se propager :",
    options: ["Uniquement dans l’air", "Dans le vide", "Seulement dans l’eau", "Dans les solides uniquement"],
    answer: 1
  },
  {
    question: "La lumière ralentit lorsqu’elle passe de l’air à l’eau. Cela est dû à :",
    options: ["La réflexion", "La diffraction", "La réfraction", "L’absorption"],
    answer: 2
  },
  {
    question: "Une lentille convergente peut produire une image :",
    options: ["Toujours réelle", "Toujours virtuelle", "Réelle ou virtuelle", "Toujours inversée"],
    answer: 2
  },
  {
    question: "Un courant électrique est dû au déplacement de :",
    options: ["Neutrons", "Photons", "Électrons", "Protons"],
    answer: 2
  },
  {
    question: "La force de Lorentz agit sur :",
    options: ["Une masse", "Une charge en mouvement", "Un champ électrique", "Un miroir"],
    answer: 1
  },
  {
    question: "La pression augmente avec la profondeur dans un liquide car :",
    options: ["La température augmente", "La masse volumique diminue", "Le poids du liquide au-dessus augmente", "Le volume diminue"],
    answer: 2
  },
  {
    question: "Un miroir plan donne une image :",
    options: ["Réelle et inversée", "Virtuelle et droite", "Virtuelle et inversée", "Réelle et droite"],
    answer: 1
  },
  {
    question: "La vitesse d’une onde est donnée par :",
    options: ["\\( v = \\lambda f \\)", "\\( v = \\frac{f}{\\lambda} \\)", "\\( v = f + \\lambda \\)", "\\( v = \\lambda^2 f \\)"],
    answer: 0
  },
  {
    question: "La loi d’Ohm s’écrit :",
    options: ["\\( U = RI \\)", "\\( R = UI \\)", "\\( I = UR \\)", "\\( U = \\frac{R}{I} \\)"],
    answer: 0
  },
  {
    question: "Une charge négative dans un champ électrique se déplace :",
    options: ["Dans le sens du champ", "Contre le champ", "En spirale", "Sans mouvement"],
    answer: 1
  },
  {
    question: "La poussée d’Archimède dépend de :",
    options: ["La masse du corps", "Le volume de fluide déplacé", "La température", "La vitesse du corps"],
    answer: 1
  },
  {
    question: "La fréquence d’une onde est inversement proportionnelle à :",
    options: ["Sa vitesse", "Sa période", "Son amplitude", "Sa longueur d’onde"],
    answer: 1
  },
  {
    question: "Une image virtuelle ne peut pas être :",
    options: ["Vue", "Projetée sur un écran", "Formée par une lentille", "Droite"],
    answer: 1
  },
  {
    question: "La force de Laplace agit sur :",
    options: ["Une charge ponctuelle", "Un conducteur parcouru par un courant", "Un champ électrique", "Un aimant fixe"],
    answer: 1
  },
  {
    question: "La loi de Newton \\( F = ma \\) implique que si \\( F = 0 \\), alors :",
    options: ["\\( a = 0 \\)", "\\( m = 0 \\)", "\\( v = 0 \\)", "\\( F = m \\cdot v \\)"],
    answer: 0
  },
  {
    question: "Le champ magnétique autour d’un fil rectiligne est :",
    options: ["Radial", "Circulaire", "Rectiligne", "Nul"],
    answer: 1
  },
  {
    question: "La lumière est une onde :",
    options: ["Mécanique", "Longitudinale", "Électromagnétique", "Sonore"],
    answer: 2
  },
  {
    question: "La puissance électrique est donnée par :",
    options: ["\\( P = UI \\)", "\\( P = \\frac{U}{I} \\)", "\\( P = IR \\)", "\\( P = U^2 \\)"],
    answer: 0
  },
  {
    question: "Une onde ne transporte pas :",
    options: ["Énergie", "Matière", "Fréquence", "Amplitude"],
    answer: 1
  }
];
