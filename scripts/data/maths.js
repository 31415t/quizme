const maths = [
  {
    question: "Résolvez l'équation \\( 3x + 5 = 20 \\).",
    options: ["\\( x = 1 \\)", "\\( x = 3 \\)", "\\( x = 5 \\)", "\\( x = 15 \\)"],
    answer: 2
  },
  {
    question: "Résolvez l'inéquation \\( 2x - 1 > 5 \\).",
    options: ["\\( x > 3 \\)", "\\( x < 3 \\)", "\\( x > 2 \\)", "\\( x < -2 \\)"],
    answer: 0
  },
  {
    question: "Résolvez \\( |x - 2| = 3 \\).",
    options: ["\\( x = 5 \\) ou \\( x = -1 \\)", "\\( x = 1 \\) ou \\( x = 4 \\)", "\\( x = -5 \\) ou \\( x = -1 \\)", "\\( x = 2 \\pm 3 \\)"],
    answer: 0
  },
  {
    question: "Système : \\( \\begin{cases} x + y = 3 \\\\ x - y = 1 \\end{cases} \\). Quel est \\( (x, y) \\) ?",
    options: ["\\( (1, 2) \\)", "\\( (2, 1) \\)", "\\( (3, 0) \\)", "\\( (0, 3) \\)"],
    answer: 1
  },
  {
    question: "Système : \\( \\begin{cases} 2x + 3y = 6 \\\\ x - y = 1 \\end{cases} \\). Quel est \\( (x, y) \\) ?",
    options: ["\\( (2, 0) \\)", "\\( (1.8, 0.8) \\)", "\\( (1, 5) \\)", "\\( (0, 2) \\)"],
    answer: 1
  },
  {
    question: "Quel est le degré du polynôme \\( 4x^3 - x + 2 \\) ?",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    question: "Simplifiez \\( \\frac{x^2 - 1}{x - 1} \\) pour \\( x \\neq 1 \\).",
    options: ["\\( x - 1 \\)", "\\( x + 1 \\)", "\\( x^2 - 1 \\)", "\\( 1 \\)"],
    answer: 1
  },
  {
    question: "Quelles sont les racines de \\( x^2 - 5x + 6 = 0 \\) ?",
    options: ["\\( \\{2, 3\\} \\)", "\\( \\{1, 6\\} \\)", "\\( \\{-2, -3\\} \\)", "\\( \\{3, 2\\} \\)"],
    answer: 0
  },
  {
    question: "Lequel de ces ensembles est un espace vectoriel ?",
    options: ["\\( \\mathbb{R}^2 \\)", "\\( \\mathbb{R}^2 \\setminus \\{0\\} \\)", "Polynômes de degré \\( \\leq 2 \\)", "Les deux premiers"],
    answer: 2
  },
  {
    question: "Quelle est la dimension de \\( \\mathbb{R}^3 \\) ?",
    options: ["2", "3", "n", "1"],
    answer: 1
  },
  {
    question: "Les vecteurs \\( (1,0,0) \\) et \\( (2,0,0) \\) sont-ils linéairement indépendants ?",
    options: ["Oui", "Non", "Cela dépend du corps", "Seulement sur \\( \\mathbb{R} \\)"],
    answer: 1
  },
  {
    question: "L'ensemble \\( \\{(1,0), (0,1), (1,1)\\} \\) engendre-t-il \\( \\mathbb{R}^2 \\) ?",
    options: ["Oui", "Non", "Seulement les deux premiers", "Seulement les deux derniers"],
    answer: 0
  },
  {
    question: "Lequel de ces ensembles est une base de \\( \\mathbb{R}^2 \\) ?",
    options: [
      "\\( \\{(1,0), (0,1)\\} \\)",
      "\\( \\{(1,1), (2,2)\\} \\)",
      "\\( \\{(1,0), (1,1)\\} \\)",
      "\\( \\{(0,1), (1,2)\\} \\)"
    ],
    answer: 0
  },
  {
    question: "Quelle est la dimension de l'espace des polynômes de degré \\( \\leq 2 \\) ?",
    options: ["2", "3", "4", "Variable"],
    answer: 1
  },
  {
    question: "Lequel est une base de \\( \\mathbb{P}_2 \\) (polynômes de degré \\( \\leq 2 \\)) ?",
    options: ["\\( \\{1, x\\} \\)", "\\( \\{1, x, x^2\\} \\)", "\\( \\{x, x^2, x^3\\} \\)", "\\( \\{1, x^2\\} \\)"],
    answer: 1
  },
  {
    question: "Quelle application est linéaire ?",
    options: ["\\( f(x) = 3x \\)", "\\( g(x) = 2x + 1 \\)", "Les deux", "Aucune"],
    answer: 0
  },
  {
    question: "Soit \\( f(x, y) = (2x - y, x + 3y) \\). Quelle est \\( f(1, 2) \\) ?",
    options: ["\\( (0, 7) \\)", "\\( (1, 5) \\)", "\\( (2, 1) \\)", "\\( (3, 4) \\)"],
    answer: 0
  },
  {
    question: "Calculez \\( \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix} \\times \\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix} \\).",
    options: [
      "\\( \\begin{bmatrix}2 & 1\\\\4 & 3\\end{bmatrix} \\)",
      "\\( \\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix} \\)",
      "\\( \\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix} \\)",
      "\\( \\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix} \\)"
    ],
    answer: 0
  },
  {
    question: "Quel est le déterminant de \\( \\begin{bmatrix}2 & 3\\\\5 & 7\\end{bmatrix} \\) ?",
    options: ["1", "-1", "-5", "35"],
    answer: 1
  },
  {
    question: "Quel est le déterminant de la matrice triangulaire \\( \\begin{bmatrix}2 & 5 & 1\\\\0 & 3 & 4\\\\0 & 0 & 6\\end{bmatrix} \\) ?",
    options: ["36", "\\( 2 + 3 + 6 \\)", "120", "0"],
    answer: 0
  },
  {
    question: "Quelle est la négation de la proposition \\( P : x > 3 \\) ?",
    options: ["\\( x \\geq 3 \\)", "\\( x \\leq 3 \\)", "\\( x = 3 \\)", "\\( x < 3 \\)"],
    answer: 1
  },
  {
    question: "La proposition \\( P \\Rightarrow Q \\) est fausse uniquement lorsque :",
    options: ["P est faux et Q est vrai", "P est vrai et Q est faux", "P est vrai et Q est vrai", "P est faux et Q est faux"],
    answer: 1
  },
  {
    question: "Quel est le connecteur logique correspondant à « et » ?",
    options: ["Conjonction", "Disjonction", "Implication", "Négation"],
    answer: 0
  },
  {
    question: "La proposition \\( \\forall x \\in \\mathbb{R}, x^2 \\geq 0 \\) est :",
    options: ["Fausse", "Vraie seulement pour \\( x > 0 \\)", "Indéterminée", "Vraie"],
    answer: 3
  },
  {
    question: "Quel quantificateur est utilisé dans \\( \\exists x \\in \\mathbb{N}, x^2 = 4 \\) ?",
    options: ["Conditionnel", "Universel", "Conjonctif", "Existentiel"],
    answer: 3
  },
  {
    question: "La négation de \\( \\forall x, P(x) \\) est :",
    options: ["\\( \\neg P(x) \\Rightarrow x \\)", "\\( \\forall x, \\neg P(x) \\)", "\\( \\exists x, \\neg P(x) \\)", "\\( \\neg \\exists x, P(x) \\)"],
    answer: 2
  },
  {
    question: "Si \\( P(x) : x \\) est pair, alors \\( \\neg P(x) \\) signifie :",
    options: ["x est divisible par 4", "x est impair", "x est nul", "x est pair"],
    answer: 1
  },
  {
    question: "Quel est le symbole de la disjonction logique ?",
    options: ["\\( \\lor \\)", "\\( \\Rightarrow \\)", "\\( \\neg \\)", "\\( \\land \\)"],
    answer: 0
  },
  {
    question: "La proposition \\( \\neg(P \\lor Q) \\) est équivalente à :",
    options: ["\\( \\neg P \\lor \\neg Q \\)", "\\( P \\land Q \\)", "\\( \\neg P \\Rightarrow \\neg Q \\)", "\\( \\neg P \\land \\neg Q \\)"],
    answer: 3
  },
  {
    question: "La proposition \\( P \\Leftrightarrow Q \\) signifie :",
    options: ["P implique Q", "P et Q sont opposés", "P et Q sont équivalents", "Q implique P"],
    answer: 2
  },
  {
    question: "Quel est le prédicat dans \\( P(x) : x > 0 \\) ?",
    options: ["x", "0", "x > 0", "P"],
    answer: 2
  },
  {
    question: "La proposition \\( \\exists x \\in \\mathbb{R}, x^2 + 1 = 0 \\) est :",
    options: ["Vraie", "Indéterminée", "Fausse", "Vraie pour \\( x = -1 \\)"],
    answer: 2
  },
  {
    question: "La négation de \\( \\exists x, P(x) \\) est :",
    options: ["\\( \\neg P(x) \\Rightarrow x \\)", "\\( \\exists x, \\neg P(x) \\)", "\\( \\forall x, \\neg P(x) \\)", "\\( \\neg \\forall x, P(x) \\)"],
    answer: 2
  },
  {
    question: "Quel est le rôle d’un prédicat en logique ?",
    options: ["Relier deux propositions", "Définir une constante", "Créer une équation", "Exprimer une propriété dépendant d’une variable"],
    answer: 3
  },
  {
    question: "La proposition \\( \\forall x \\in \\mathbb{N}, x \\geq 0 \\) est :",
    options: ["Vraie seulement pour \\( x > 0 \\)", "Vraie", "Fausse", "Indéterminée"],
    answer: 1
  },
  {
    question: "Quel est le périmètre d’un carré de côté \\( 5 \\text{ cm} \\) ?",
    options: ["\\( 10 \\text{ cm} \\)", "\\( 20 \\text{ cm} \\)", "\\( 25 \\text{ cm} \\)", "\\( 15 \\text{ cm} \\)"],
    answer: 1
  },
  {
    question: "Quel est le volume d’un cube de côté \\( 3 \\text{ cm} \\) ?",
    options: ["\\( 18 \\text{ cm}^3 \\)", "\\( 27 \\text{ cm}^3 \\)", "\\( 12 \\text{ cm}^3 \\)", "\\( 9 \\text{ cm}^3 \\)"],
    answer: 1
  },
  {
    question: "Quel est le sinus d’un angle de \\( 30^\\circ \\) ?",
    options: ["\\( 1 \\)", "\\( \\frac{1}{2} \\)", "\\( 0 \\)", "\\( \\frac{\\sqrt{3}}{2} \\)"],
    answer: 1
  },
  {
    question: "Deux vecteurs sont orthogonaux si leur produit scalaire est :",
    options: ["\\( 0 \\)", "\\( -1 \\)", "\\( 1 \\)", "\\( \\infty \\)"],
    answer: 0
  },
  {
    question: "Le barycentre de deux points A et B de masses égales est :",
    options: ["A", "Le point le plus proche de A", "B", "Le milieu de [AB]"],
    answer: 3
  },
  {
    question: "Quel est le produit vectoriel de \\( \\vec{i} \\) et \\( \\vec{j} \\) ?",
    options: ["\\( \\vec{i} \\)", "\\( \\vec{0} \\)", "\\( -\\vec{k} \\)", "\\( \\vec{k} \\)"],
    answer: 3
  },
  {
    question: "Une rotation conserve :",
    options: ["Toutes les réponses", "Les longueurs", "L’orientation", "Les angles"],
    answer: 0
  },
  {
    question: "Quel est l’angle entre deux droites perpendiculaires ?",
    options: ["\\( 90^\\circ \\)", "\\( 0^\\circ \\)", "\\( 180^\\circ \\)", "\\( 45^\\circ \\)"],
    answer: 0
  },
  {
    question: "Quel est le cosinus de \\( 0^\\circ \\) ?",
    options: ["0", "1", "\\( \\frac{1}{2} \\)", "\\( \\sqrt{2} \\)"],
    answer: 1
  },
  {
    question: "Le triangle équilatéral a :",
    options: ["Un sommet plus grand", "Un angle droit", "Trois angles égaux", "Deux côtés égaux"],
    answer: 2
  },
  {
    question: "Une symétrie centrale conserve :",
    options: ["L’orientation", "Les distances", "Les angles", "Rien"],
    answer: 1
  },
  {
    question: "Le produit scalaire de \\( \\vec{u} \\) et \\( \\vec{v} \\) est maximal quand :",
    options: ["Ils sont opposés", "Ils sont nuls", "Ils sont perpendiculaires", "Ils sont colinéaires et dans le même sens"],
    answer: 3
  },
  {
    question: "Quel est le rayon d’un cercle de diamètre \\( 10 \\text{ cm} \\) ?",
    options: ["\\( 20 \\text{ cm} \\)", "\\( 10 \\text{ cm} \\)", "\\( 2.5 \\text{ cm} \\)", "\\( 5 \\text{ cm} \\)"],
    answer: 3
  },
  {
    question: "Le volume d’une pyramide est donné par :",
    options: ["\\( B \\times h \\)", "\\( \\frac{1}{2} B \\times h \\)", "\\( B + h \\)", "\\( \\frac{1}{3} B \\times h \\)"],
    answer: 3
  },
  {
    question: "Si \\( \\vec{u} \\cdot \\vec{v} = 0 \\), alors :",
    options: ["\\( \\vec{u} = \\vec{v} \\)", "Les vecteurs sont égaux", "Les vecteurs sont orthogonaux", "Les vecteurs sont parallèles"],
    answer: 2
  },
  {
    question: "Une suite arithmétique a pour premier terme \\( u_0 = 3 \\) et raison \\( r = 2 \\). Quel est \\( u_3 \\) ?",
    options: ["5", "6", "7", "9"],
    answer: 3
  },
  {
    question: "Une suite géométrique a pour premier terme \\( v_0 = 4 \\) et raison \\( q = 3 \\). Quel est \\( v_2 \\) ?",
    options: ["12", "36", "16", "24"],
    answer: 1
  },
  {
    question: "La différence entre deux termes consécutifs d’une suite arithmétique est appelée :",
    options: ["Raison", "Terme", "Quotient", "Indice"],
    answer: 0
  },
  {
    question: "La suite \\( u_n = 5n + 1 \\) est :",
    options: ["Géométrique", "Arithmétique", "Constante", "Exponentielle"],
    answer: 1
  },
  {
    question: "La suite \\( v_n = 2^n \\) est :",
    options: ["Arithmétique", "Géométrique", "Logarithmique", "Quadratique"],
    answer: 1
  },
  {
    question: "Si \\( u_n = 7 \\) pour tout \\( n \\), alors la suite est :",
    options: ["Arithmétique", "Géométrique", "Constante", "Croissante"],
    answer: 2
  },
  {
    question: "La somme des 3 premiers termes de \\( u_n = 2n \\) est :",
    options: ["6", "12", "10", "14"],
    answer: 1
  },
  {
    question: "Une suite géométrique de raison \\( q = 1 \\) est :",
    options: ["Croissante", "Décroissante", "Constante", "Alternée"],
    answer: 2
  },
  {
    question: "La suite \\( u_n = (-1)^n \\) est :",
    options: ["Arithmétique", "Alternée", "Croissante", "Géométrique"],
    answer: 1
  },
  {
    question: "Si \\( u_n = 3n - 2 \\), alors \\( u_5 = \\) ?",
    options: ["13", "15", "17", "12"],
    answer: 0
  },
  {
    question: "La suite \\( v_n = 5 \\times 2^n \\) est :",
    options: ["Arithmétique", "Exponentielle", "Géométrique", "Logarithmique"],
    answer: 2
  },
  {
    question: "La somme des 4 premiers termes de \\( u_n = 1 + n \\) est :",
    options: ["10", "14", "12", "16"],
    answer: 1
  },
  {
    question: "Dans une suite arithmétique, si \\( u_0 = 2 \\) et \\( u_4 = 10 \\), alors la raison est :",
    options: ["2", "4", "8", "10"],
    answer: 0
  },
  {
    question: "Une suite est croissante si :",
    options: ["\\( u_{n+1} > u_n \\)", "\\( u_{n+1} < u_n \\)", "\\( u_n = u_{n+1} \\)", "Elle est géométrique"],
    answer: 0
  },
  {
    question: "La suite \\( u_n = n^2 \\) est-elle arithmétique ?",
    options: ["Oui", "Non", "Seulement pour \\( n < 3 \\)", "Cela dépend de \\( n \\)"],
    answer: 1
  },
  {
    question: "Combien de façons peut-on ordonner les lettres du mot 'MATH' ?",
    options: ["4", "12", "24", "16"],
    answer: 2
  },
  {
    question: "Combien de combinaisons de 2 éléments peut-on faire avec \\( \\{A, B, C\\} \\) ?",
    options: ["3", "6", "2", "1"],
    answer: 0
  },
  {
    question: "Dans un lancer de dé à 6 faces, quelle est la probabilité d’obtenir un nombre pair ?",
    options: ["\\( \\frac{1}{2} \\)", "\\( \\frac{1}{3} \\)", "\\( \\frac{2}{3} \\)", "\\( \\frac{5}{6} \\)"],
    answer: 0
  },
  {
    question: "Combien de permutations possibles pour 5 objets distincts ?",
    options: ["25", "120", "60", "20"],
    answer: 1
  },
  {
    question: "Quelle est la probabilité d’obtenir 'pile' en lançant une pièce ?",
    options: ["\\( 0 \\)", "\\( \\frac{1}{2} \\)", "\\( 1 \\)", "\\( \\frac{2}{3} \\)"],
    answer: 1
  },
  {
    question: "Une urne contient 3 boules rouges et 2 bleues. Probabilité de tirer une rouge ?",
    options: ["\\( \\frac{2}{5} \\)", "\\( \\frac{3}{5} \\)", "\\( \\frac{1}{2} \\)", "\\( \\frac{1}{3} \\)"],
    answer: 1
  },
  {
    question: "Combien de combinaisons de 3 éléments parmi 5 ?",
    options: ["10", "15", "20", "5"],
    answer: 0
  },
  {
    question: "La probabilité d’un événement impossible est :",
    options: ["1", "\\( \\frac{1}{2} \\)", "0", "\\( \\frac{1}{3} \\)"],
    answer: 2
  },
  {
    question: "La probabilité d’un événement certain est :",
    options: ["0", "\\( \\frac{1}{2} \\)", "1", "\\( \\frac{2}{3} \\)"],
    answer: 2
  },
  {
    question: "Dans un tirage sans remise, les événements sont :",
    options: ["Indépendants", "Mutuellement exclusifs", "Dépendants", "Impossibles"],
    answer: 2
  },
  {
    question: "Combien de façons de choisir 2 personnes parmi 4 ?",
    options: ["6", "8", "4", "12"],
    answer: 0
  },
  {
    question: "Si \\( P(A) = 0.3 \\) et \\( P(B) = 0.4 \\), alors \\( P(A \\cup B) \\leq \\) ?",
    options: ["0.7", "1", "0.3", "0.4"],
    answer: 0
  },
  {
    question: "Combien de mots de 3 lettres peut-on former avec \\( \\{A, B, C\\} \\) sans répétition ?",
    options: ["6", "9", "3", "27"],
    answer: 0
  },
  {
    question: "La probabilité que deux événements indépendants se produisent est :",
    options: ["\\( P(A) + P(B) \\)", "\\( P(A) \\times P(B) \\)", "\\( P(A) - P(B) \\)", "\\( P(A \\cup B) \\)"],
    answer: 1
  },
  {
    question: "Combien de façons de placer 3 objets dans 3 cases ?",
    options: ["6", "3", "9", "27"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = x^2 \\) est :",
    options: ["Linéaire", "Affine", "Quadratique", "Exponentielle"],
    answer: 2
  },
  {
    question: "La dérivée de \\( f(x) = x^3 \\) est :",
    options: ["\\( 3x^2 \\)", "\\( x^2 \\)", "\\( 2x \\)", "\\( 3x \\)"],
    answer: 0
  },
  {
    question: "La limite de \\( \\frac{1}{x} \\) quand \\( x \\to +\\infty \\) est :",
    options: ["0", "1", "\\( +\\infty \\)", "Indéterminée"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = \\ln(x) \\) est définie pour :",
    options: ["\\( x > 0 \\)", "\\( x \\geq 0 \\)", "Tous les \\( x \\)", "\\( x < 0 \\)"],
    answer: 0
  },
  {
    question: "La dérivée de \\( \\ln(x) \\) est :",
    options: ["\\( \\frac{1}{x} \\)", "\\( \\ln(x) \\)", "\\( x \\)", "\\( \\frac{x}{2} \\)"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = e^x \\) est :",
    options: ["Croissante", "Décroissante", "Constante", "Alternée"],
    answer: 0
  },
  {
    question: "La dérivée de \\( e^x \\) est :",
    options: ["\\( x \\cdot e^x \\)", "\\( e^x \\)", "\\( \\ln(x) \\)", "\\( x^e \\)"],
    answer: 1
  },
  {
    question: "La fonction \\( f(x) = \\frac{1}{x} \\) est continue sur :",
    options: ["\\( \\mathbb{R} \\)", "\\( \\mathbb{R} \\setminus \\{0\\} \\)", "\\( \\mathbb{R}^+ \\)", "\\( \\mathbb{R}^- \\)"],
    answer: 1
  },
  {
    question: "La primitive de \\( f(x) = x \\) est :",
    options: ["\\( \\frac{x^2}{2} + C \\)", "\\( x^2 + C \\)", "\\( \\ln(x) + C \\)", "\\( x + C \\)"],
    answer: 0
  },
  {
    question: "La dérivée de \\( \\sqrt{x} \\) est :",
    options: ["\\( \\frac{1}{2\\sqrt{x}} \\)", "\\( \\sqrt{x} \\)", "\\( x \\)", "\\( \\frac{2}{x} \\)"],
    answer: 0
  },
  {
    question: "La limite de \\( \\frac{x^2 - 1}{x - 1} \\) quand \\( x \\to 1 \\) est :",
    options: ["0", "1", "2", "Indéterminée"],
    answer: 2
  },
  {
    question: "La fonction \\( f(x) = \\frac{1}{x^2} \\) tend vers \\( +\\infty \\) quand :",
    options: ["\\( x \\to 0 \\)", "\\( x \\to +\\infty \\)", "\\( x \\to -\\infty \\)", "\\( x \\to 1 \\)"],
    answer: 0
  },
  {
    question: "La dérivée de \\( f(x) = \\cos(x) \\) est :",
    options: ["\\( \\sin(x) \\)", "\\( -\\sin(x) \\)", "\\( \\cos(x) \\)", "\\( -\\cos(x) \\)"],
    answer: 1
  },
  {
    question: "La dérivée de \\( f(x) = \\sin(x) \\) est :",
    options: ["\\( \\cos(x) \\)", "\\( -\\cos(x) \\)", "\\( \\sin(x) \\)", "\\( -\\sin(x) \\)"],
    answer: 0
  },
  {
    question: "La primitive de \\( f(x) = \\frac{1}{x} \\) est :",
    options: ["\\( \\ln|x| + C \\)", "\\( \\frac{1}{x^2} + C \\)", "\\( x + C \\)", "\\( \\ln(x^2) + C \\)"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = x^2 \\) est :",
    options: ["Strictement croissante sur \\( \\mathbb{R} \\)", "Croissante sur \\( \\mathbb{R}^+ \\)", "Décroissante sur \\( \\mathbb{R}^+ \\)", "Constante"],
    answer: 1
  },
  {
    question: "La dérivée seconde de \\( f(x) = x^3 \\) est :",
    options: ["\\( 6x \\)", "\\( 3x^2 \\)", "\\( x \\)", "\\( 0 \\)"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = \\frac{x^2 - 4}{x - 2} \\) est discontinue en :",
    options: ["\\( x = 0 \\)", "\\( x = 2 \\)", "\\( x = 4 \\)", "Aucune"],
    answer: 1
  },
  {
    question: "La dérivée de \\( f(x) = \\ln(x^2) \\) est :",
    options: ["\\( \\frac{2}{x} \\)", "\\( \\frac{1}{x^2} \\)", "\\( \\frac{1}{x} \\)", "\\( 2x \\)"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = \\frac{1}{x} \\) est :",
    options: ["Croissante sur \\( \\mathbb{R}^+ \\)", "Décroissante sur \\( \\mathbb{R}^+ \\)", "Constante", "Croissante sur \\( \\mathbb{R}^- \\)"],
    answer: 1
  },
  {
    question: "La limite de \\( \\ln(x) \\) quand \\( x \\to 0^+ \\) est :",
    options: ["\\( +\\infty \\)", "\\( -\\infty \\)", "0", "1"],
    answer: 1
  },
  {
    question: "La dérivée de \\( f(x) = e^{-x} \\) est :",
    options: ["\\( -e^{-x} \\)", "\\( e^{-x} \\)", "\\( -x \\cdot e^{-x} \\)", "\\( x \\cdot e^{-x} \\)"],
    answer: 0
  },
  {
    question: "La primitive de \\( f(x) = \\cos(x) \\) est :",
    options: ["\\( \\sin(x) + C \\)", "\\( -\\sin(x) + C \\)", "\\( \\cos(x) + C \\)", "\\( -\\cos(x) + C \\)"],
    answer: 0
  },
  {
    question: "La dérivée de \\( f(x) = \\ln(e^x) \\) est :",
    options: ["\\( x \\)", "\\( 1 \\)", "\\( e^x \\)", "\\( \\ln(x) \\)"],
    answer: 1
  },
  {
    question: "La fonction \\( f(x) = \\frac{x^2 + 1}{x^2} \\) tend vers :",
    options: ["1", "0", "2", "1 quand \\( x \\to \\infty \\)"],
    answer: 3
  },
  {
    question: "Dans une enquête, l’ensemble des individus étudiés forme :",
    options: ["L’échantillon", "La population", "Le caractère", "La variable"],
    answer: 1
  },
  {
    question: "Un caractère quantitatif est :",
    options: ["Une couleur", "Un genre", "Une taille", "Un nom"],
    answer: 2
  },
  {
    question: "La moyenne de 4, 6 et 10 est :",
    options: ["6", "7", "8", "5"],
    answer: 1
  },
  {
    question: "L’écart-type mesure :",
    options: ["La tendance centrale", "La dispersion", "La fréquence", "La médiane"],
    answer: 1
  },
  {
    question: "Si tous les individus ont la même valeur, l’écart-type est :",
    options: ["1", "0", "Infini", "La moyenne"],
    answer: 1
  },
  {
    question: "La médiane est :",
    options: ["La valeur la plus fréquente", "La moyenne", "La valeur centrale", "La somme des valeurs"],
    answer: 2
  },
  {
    question: "Le mode est :",
    options: ["La valeur la plus fréquente", "La moyenne", "La médiane", "L’écart-type"],
    answer: 0
  },
  {
    question: "Dans une série : 2, 4, 4, 6, 8, le mode est :",
    options: ["2", "4", "6", "8"],
    answer: 1
  },
  {
    question: "Une variable qualitative peut être :",
    options: ["La taille", "Le poids", "La couleur", "L’âge"],
    answer: 2
  },
  {
    question: "La moyenne de 5 valeurs toutes égales à 7 est :",
    options: ["7", "35", "5", "0"],
    answer: 0
  },
  {
    question: "Le nombre \\( i \\) est défini comme :",
    options: ["\\( i = \\sqrt{2} \\)", "\\( i = \\sqrt{-1} \\)", "\\( i = -1 \\)", "\\( i = 1 \\)"],
    answer: 1
  },
  {
    question: "Le carré de \\( i \\) est :",
    options: ["\\( 1 \\)", "\\( -1 \\)", "\\( i \\)", "\\( 0 \\)"],
    answer: 1
  },
  {
    question: "Le conjugué de \\( z = 3 + 2i \\) est :",
    options: ["\\( 3 - 2i \\)", "\\( -3 + 2i \\)", "\\( 2 + 3i \\)", "\\( 3 + 2i \\)"],
    answer: 0
  },
  {
    question: "Le module de \\( z = 3 + 4i \\) est :",
    options: ["5", "7", "1", "25"],
    answer: 0
  },
  {
    question: "Si \\( z = a + ib \\), alors \\( |z|^2 = \\) ?",
    options: ["\\( a^2 + b^2 \\)", "\\( a + b \\)", "\\( ab \\)", "\\( a^2 - b^2 \\)"],
    answer: 0
  },
  {
    question: "Le produit \\( (1 + i)(1 - i) \\) est :",
    options: ["0", "1", "2", "2i"],
    answer: 2
  },
  {
    question: "Le plan complexe associe \\( z = a + ib \\) au point :",
    options: ["\\( (a, b) \\)", "\\( (b, a) \\)", "\\( (a, -b) \\)", "\\( (b, -a) \\)"],
    answer: 0
  },
  {
    question: "La forme trigonométrique de \\( z = 1 + i \\) est :",
    options: ["\\( \\sqrt{2}(\\cos(\\frac{\\pi}{4}) + i\\sin(\\frac{\\pi}{4})) \\)", "\\( 2(\\cos(\\frac{\\pi}{2}) + i\\sin(\\frac{\\pi}{2})) \\)", "\\( 1 + i \\)", "\\( \\sqrt{2}(\\cos(\\frac{\\pi}{2}) + i\\sin(\\frac{\\pi}{2})) \\)"],
    answer: 0
  },
  {
    question: "Si \\( z = 2i \\), alors \\( \\text{Re}(z) = \\) ?",
    options: ["2", "0", "i", "-2"],
    answer: 1
  },
  {
    question: "Le quotient \\( \\frac{1}{i} \\) est égal à :",
    options: ["\\( i \\)", "\\( -i \\)", "\\( 1 \\)", "\\( 0 \\)"],
    answer: 1
  },
  {
    question: "Si \\( f(x) = x^2 \\), alors \\( f(-x) = \\) ?",
    options: ["\\( -x^2 \\)", "\\( x^2 \\)", "\\( -x \\)", "\\( x \\)"],
    answer: 1
  },
  {
    question: "La suite \\( u_n = (-1)^n \\) est :",
    options: ["Arithmétique", "Géométrique", "Alternée", "Constante"],
    answer: 2
  },
  {
    question: "La probabilité d’un événement impossible est :",
    options: ["1", "0", "\\( \\frac{1}{2} \\)", "Variable"],
    answer: 1
  },
  {
    question: "La moyenne de 5 valeurs toutes égales à 7 est :",
    options: ["7", "35", "5", "0"],
    answer: 0
  },
  {
    question: "Le conjugué de \\( z = 3 - 2i \\) est :",
    options: ["\\( 3 + 2i \\)", "\\( -3 + 2i \\)", "\\( 2 - 3i \\)", "\\( 3 - 2i \\)"],
    answer: 0
  },
  {
    question: "La somme des probabilités de tous les événements élémentaires est :",
    options: ["0", "1", "\\( \\frac{1}{2} \\)", "Variable"],
    answer: 1
  },
  {
    question: "La dérivée de \\( f(x) = \\ln(x^2) \\) est :",
    options: ["\\( \\frac{2}{x} \\)", "\\( \\frac{1}{x^2} \\)", "\\( \\frac{1}{x} \\)", "\\( 2x \\)"],
    answer: 0
  },
  {
    question: "La suite \\( u_n = n^2 \\) est-elle arithmétique ?",
    options: ["Oui", "Non", "Seulement pour \\( n < 3 \\)", "Cela dépend de \\( n \\)"],
    answer: 1
  },
  {
    question: "La probabilité d’obtenir un nombre pair avec un dé à 6 faces est :",
    options: ["\\( \\frac{1}{2} \\)", "\\( \\frac{1}{3} \\)", "\\( \\frac{2}{3} \\)", "\\( \\frac{5}{6} \\)"],
    answer: 0
  },
  {
    question: "La fonction \\( f(x) = \\frac{1}{x} \\) est continue sur :",
    options: ["\\( \\mathbb{R} \\)", "\\( \\mathbb{R} \\setminus \\{0\\} \\)", "\\( \\mathbb{R}^+ \\)", "\\( \\mathbb{R}^- \\)"],
    answer: 1
  },
  {
    question: "La négation de \\( \\forall x, P(x) \\) est :",
    options: ["\\( \\exists x, \\neg P(x) \\)", "\\( \\forall x, \\neg P(x) \\)", "\\( \\neg \\exists x, P(x) \\)", "\\( \\neg P(x) \\Rightarrow x \\)"],
    answer: 0
  },
  {
    question: "La somme des angles d’un triangle est toujours :",
    options: ["\\( 180^\\circ \\)", "\\( 90^\\circ \\)", "\\( 360^\\circ \\)", "Variable"],
    answer: 0
  },
  {
    question: "Le produit \\( (1 + i)(1 - i) \\) est :",
    options: ["0", "1", "2", "2i"],
    answer: 2
  },
  {
    question: "La fonction \\( f(x) = x^2 \\) est :",
    options: ["Strictement croissante sur \\( \\mathbb{R} \\)", "Croissante sur \\( \\mathbb{R}^+ \\)", "Décroissante sur \\( \\mathbb{R}^+ \\)", "Constante"],
    answer: 1
  },
  {
    question: "La moyenne est sensible aux valeurs extrêmes :",
    options: ["Vrai", "Faux", "Seulement si la série est paire", "Seulement si la médiane est nulle"],
    answer: 0
  },
  {
    question: "La dérivée de \\( f(x) = \\sqrt{x} \\) est :",
    options: ["\\( \\frac{1}{2\\sqrt{x}} \\)", "\\( \\sqrt{x} \\)", "\\( x \\)", "\\( \\frac{2}{x} \\)"],
    answer: 0
  },
  {
    question: "La probabilité que deux événements indépendants se produisent est :",
    options: ["\\( P(A) + P(B) \\)", "\\( P(A) \\times P(B) \\)", "\\( P(A) - P(B) \\)", "\\( P(A \\cup B) \\)"],
    answer: 1
  },
  {
    question: "La fonction \\( f(x) = \\frac{x^2 + 1}{x^2} \\) tend vers :",
    options: ["1", "0", "2", "1 quand \\( x \\to \\infty \\)"],
    answer: 3
  },
  {
    question: "Une suite géométrique de raison \\( q = 1 \\) est :",
    options: ["Croissante", "Décroissante", "Constante", "Alternée"],
    answer: 2
  },
  {
    question: "La logique mathématique utilise des connecteurs comme :",
    options: ["\\( \\land, \\lor, \\Rightarrow \\)", "\\( +, -, \\times \\)", "\\( \\sin, \\cos \\)", "\\( \\int, \\sum \\)"],
    answer: 0
  }
];
