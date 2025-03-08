var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-equations-differentielles-lineaires",
  "level": "1",
  "url": "sec-equations-differentielles-lineaires.html",
  "type": "Section",
  "number": "1.1",
  "title": "Équations différentielles linéaires d’ordre <span class=\"process-math\">\\(1\\)<\/span>",
  "body": " Équations différentielles linéaires d'ordre   Rappels   L'application est bilinéaire.  Donc si est une application dérivable de dans et est une application dérivable de dans alors l'application est dérivable et on a     Soient des réels et un autre -evn de dimension finie .  Soit une fonction CPM . Pour toute application linéaire de dans        Solution d'une équation différentielle linéaire du premier ordre   Dans toute cette section, on considère des applications continues Les notations suivantes seront valables tout au long de la première section de ce chapitre.  Une solution de sur est en fait de classe sur . En général si les fonctions et sont de classe alors les solutions de sont au moins de classe .    Forme générale  L'équation différentielle est dite une équation différentielle linéaire du premier ordre. L'inconnue est une fonction dérivable de dans .  Solutions de  On appelle solution de sur toute fonction telle que :  est dérivable sur ;  .  On notera l'ensemble des solutions de sur l'intervalle .  Équation homogène de  L'équation différenteielle linéaire du premier ordre est dite équation homogène (ou équation sans second membre) de .   Système différentiel asscocié  On fixe une base de l'espace et on note les applications composantes de et celles de dans la base . Alors équivaut au système d'équation où on a posé . Le système est dit système différentiel associé à dans la base . On notera celui associé à l'équation homogène et on les écrira sous forme compacte où , et .        est le sous-espace affine de passant par est de direction .     est un -ev.  Si une solution de sur alors .     Pour résoudre , il suffit de résoudre et de déterminer une solution particulière de .     de Cauchy-Lipchitz  Soit . Le problème de Cauchy admet une solution unique sur . C'est la seule fonction vérifiant    Ce résultat revient à démontrer qu'il n'y a qu'une fonction de classe qui vérifie     Existence On introduit la suite de fonctions définie par et En constantant ensuite que et en posant , on démontre par récurrence que Ce qui permet de justifier que la série de fonctions continues converge uniformément sur tout segment de . La suite de fonctions converge donc uniformément sur tout segment de vers une fonction continue sur et qui vérifie naturellement l'équation intégrale.  Unicité Si et sont des solutions du problème alors Ce qui permet de justifier par récurrence que pour tout  et donc que puisque ce dernier majorant converge vers .       Pour tout , l'application définie sur par est un isomorphisme de dans . En particulier     Principe de superposition   On considére deux EDL du premier ordre partageant la même équation homogène : Si est une solution de et est une solution de alors est une solution de l'equation       On considère un système différentiel homogène réel  étant une fonction continue de dans . Les solutions réelles de sont les parties réelles des solutions complexes.   Toute solution réelle de est sa propre partie réelle. Si maintenant est une solution complexe de alors, du fait que est une matrice réelle, est une solution de . L'ensemble des solution complexes de étant un -espace vectoriel, est une solution de .  Ce qui montre que les solutions réelles de sont les parties réelles de ses solutions complexes.     L'ensemble des solutions réelles est aussi l'ensemble des solutions à priori complexes qui prennent des valeurs réelles. Concrètement, une fois obtenu les solutions complexes, il suffit de déterminer les valeurs des paramètres en jeu qui permettent que la solution prennent uniquement des valeurs réelles.    Résolution pratique  Avertissement Sauf dans des cas très particuliers, il n'y a aucune méthode générale de résoultion des EDL du premier ordre.    On s'interesse au système différentiel homogène  Voir méthode de la variation des constantes pour la résolution du système avec second membre      On suppose que la matrice admet un vecteur propre qui ne dépend pas de associé à une valeur propre . En multipliant par et en posant on voit que Ce qui permet de calculer sachant qu'elle est une combinaison linéaire des composantes de . Cela permet d'exprimer l'une des fonctions inconnues en fonction des autres et donc, par report dans , de réduire le nombre de fonctions inconnues.    Dans le cas où les matrices se réduisent toutes sous la forme où est une matrice inversible qui ne dépend pas de et est une matrice plus simple (diagonale, triangulaire supérieure ou même diagonale par blocs) alors  Les solutions de sont les fonctions où est une solution quelconque du système qui est plus simple à traiter :   si est diagonale alors il est formé d'équations indépendantes en les composantes de     si est triangualaire supérieur alors il peut être résolu de proche en proche en commençant par la dernière équation.    Si est diagonale par bloc alors il peut être éclaté en plusieurs systèmes différentiels de tailles plus petites.          Résoudre le système différentiel     Le système s'ecrit La matrice est orthogonale directe donc en est un vecteur propre. C'est aussi un vecteur propre de . En multipliant la relation par on obtient l'equation en : En suivant la procédure standard de résoltion pour une EDL linéaire du premier ordre on a alors il existe tel que dans l'expression on reconnait le module et l'argument de donc En posant avec et en identifiant les parties réelle et imaginaire  est effectivement un -espace vectoriel de dimension . Il est engendré par les fonctions       Résoudre sur l'intervalle le système différentiel     Le système équivaut à avec On constate que la somme des deux colonnes de vaut avec . Donc est une vecteur propre de associé à la valeur propre . Comme alors l'autre valeur propre de est et après un calcul rapide le vecteur est un vecteur propre qui lui est associé. Ainsi En posant avec on obtient le système différentiel d'inconnues  Il existe donc tels que La relation se traduit pas et donc       Résoudre sur le système différentiel     Ici le système différentiel s'écrit avec    Ce qui prouve que est semblable dans à la matrice diagonale . Clairement est un vecteur propre de associé à la valeur propre et pour tout on a Comme prévu est une droite vectorielle. Elle est engendrée par le vecteur  étant une matrice réelle, est la droite engendrée par . Ainsi avec Si on pose maintenant avec alors Il existe donc tels que de quoi on déduit que les solutions complexes de sont données par cette solution est réelle si et donc en posant on peut écrire où . L'ensemble des solutions de cette forme est de dimension sur donc il est l'ensemble des solutions réelles de .      Système fondamental de solutions de l'équation homogène     On appelle système fondamental de solutions de l'équation homogène  toute base de .  Soient des solution de . On appelle wronksien dans la base du système de solutions de la fonction définie par       Soient des solution de . Soit leurs wronksien. Les assertions suivantes sont équivalentes :  est un système fondamental de solutions de ;  pour tout , la famille est une base de ;  il existe tel que soit une base de ;  pour tout , ;  il existe tel que .      Avec les notations de la proposition précédente :    Une famille de fonctions de dans peut très bien être libre sans que soit libre pour tout .   la fonction est soit partout nulle sur , soit ne s'annule en aucun point de ;   la famille est soit une base de pour tout soit elle est liée pour tout .      Équation du wronksien  Soient des solution de . Soit leurs wronksien dans . Alors      Ainsi la fonction est une solution sur de l'équation différentielle linéaire scalaire homogène du premier ordre Ce qui implique que son expression est de la forme où et est une primitive sur de la fonction . Ce qui confirme que est soit partout nulle, soit ne s'annule pas sur .    Méthode de la variation des constantes   Soit un système fondamental de solutions de . Pour toute fonction de classe  , il existe des fonctions uniques de classe de dans telles que     Méthode de la variation des constantes  On suppose qu'on connait un système fondamental de l'équation homogène et on pose    Grâce aux formules de Cramer,   Alors l'équation équivaut à      On veut résoudre complétement le système différentiel sachant que les fonctions et sont des solutions du système homogène.    Les fonctions et sont des solutions du système homogène associé à . Elles en constituent un SFS . Les solutions de sont donc données par où . En posant et , la métode de la variation des consantes aboutit à Système linéaire d'inconnues et et de déterminant . Il se résout en ce qui donne : où et sont des constantes quelconques. Les solutions du système différentiel de départ sont donc données par       Équation différentielle linéaire du premier ordre à coefficients constants   Soient un endomorphisme de et une application continue. Dans toute cette section, on considère l'équation différentielle et le système différentiel associé à dans la base   est dite une équation différentielle linéaire du premier ordre à coefficients constants. On notera l'équation homogène de et celle de .    Solutions d'une équation homogène à coefficients constants    Les solutions de l'équation homogène sur sont les fonctions où est un vecteur quelconque de .  Soit . L'unique solution sur du problème de Cauchy de l'équation homogène en est donnée par       Propriétés de l'exponentielle    On considère une algèbre de dimension finie . Pour tout , l'application est l'unique solution du problème de Cauchy Grâce à cette identification, on établit rapidement la propriété :   On se place dans l'algèbre . Si est un endomorphisme de alors      Remarques pratiques   Solutions propres de l'équation homogène  Soit une VAP éventuelle de . Pour tout VEP  de associé à , la fonction est une solution de sur .   Solution de l'équation homogène dans le cas où est diagonalisable  On suppose que est diagonalisable. On considère une base de diagonalisation de et on pose . Alors les solutions de sur sont les fonctions où sont des scalaires quelconques.   Méthode pratique de résolution du système homogène  On suppose que la matrice se réduit sous la forme . Alors la résolution du système différentiel passe donc par celle du système «plus simple» .  Noter aussi que puisque on peut directement fournir les solutions de en calculant . Ces solutions sont de la forme :  Quelque soit la méthode de calcul choisie, le calcul explicite de n'est pas nécessaire.   où est un vecteur quelconque de .      SFS et variation des constantes   Système fondamental de solution et wronksien  Soient et posons pour tout , .  Ces notions ont toutefois peu d'intérêt dans le cas d'une EDL à coefficients constants car on sait expliciter les solutions.    est un SFS de sur si et seulement si est une base de .  Le wronksien de dans la base est donné par       Variation des constantes  Les solutions de l'équation homogène étant les fonctions où est un vecteur quelconque de , faire varier les constantes revient à faire varier le vecteur . On pose donc de telle sorte que Cette présentation n'offre toutefois pas d'avantage pratique par rapport à la méthode générale de la variation des constantes puisqu'elle exige le calcul de l'exponentielle et donc le calcul de l'inverse de la matrice de passage dans une base de réduction. .     Expression intégrale de la solution du problème de Cauchy  Soient et . L'unique solution de l'équation complète vérifiant la condition initiale est donnée par     "
},
{
  "id": "sec-equations-differentielles-lineaires-3-2",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-2",
  "type": "Conventions et notations",
  "number": "1",
  "title": "",
  "body": " Dans toute cette section, on considère des applications continues Les notations suivantes seront valables tout au long de la première section de ce chapitre.  Une solution de sur est en fait de classe sur . En général si les fonctions et sont de classe alors les solutions de sont au moins de classe .    Forme générale  L'équation différentielle est dite une équation différentielle linéaire du premier ordre. L'inconnue est une fonction dérivable de dans .  Solutions de  On appelle solution de sur toute fonction telle que :  est dérivable sur ;  .  On notera l'ensemble des solutions de sur l'intervalle .  Équation homogène de  L'équation différenteielle linéaire du premier ordre est dite équation homogène (ou équation sans second membre) de .   Système différentiel asscocié  On fixe une base de l'espace et on note les applications composantes de et celles de dans la base . Alors équivaut au système d'équation où on a posé . Le système est dit système différentiel associé à dans la base . On notera celui associé à l'équation homogène et on les écrira sous forme compacte où , et .     "
},
{
  "id": "sec-equations-differentielles-lineaires-3-3",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-3",
  "type": "Proposition",
  "number": "2",
  "title": "",
  "body": "  est le sous-espace affine de passant par est de direction .     est un -ev.  Si une solution de sur alors .     Pour résoudre , il suffit de résoudre et de déterminer une solution particulière de .   "
},
{
  "id": "cauchy-lipchitz",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#cauchy-lipchitz",
  "type": "Théorème",
  "number": "3",
  "title": "de Cauchy-Lipchitz.",
  "body": " de Cauchy-Lipchitz  Soit . Le problème de Cauchy admet une solution unique sur . C'est la seule fonction vérifiant    Ce résultat revient à démontrer qu'il n'y a qu'une fonction de classe qui vérifie     Existence On introduit la suite de fonctions définie par et En constantant ensuite que et en posant , on démontre par récurrence que Ce qui permet de justifier que la série de fonctions continues converge uniformément sur tout segment de . La suite de fonctions converge donc uniformément sur tout segment de vers une fonction continue sur et qui vérifie naturellement l'équation intégrale.  Unicité Si et sont des solutions du problème alors Ce qui permet de justifier par récurrence que pour tout  et donc que puisque ce dernier majorant converge vers .     "
},
{
  "id": "sec-equations-differentielles-lineaires-3-5",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-5",
  "type": "Corollaire",
  "number": "4",
  "title": "",
  "body": " Pour tout , l'application définie sur par est un isomorphisme de dans . En particulier   "
},
{
  "id": "prop-superposition",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#prop-superposition",
  "type": "Proposition",
  "number": "5",
  "title": "Principe de superposition.",
  "body": " Principe de superposition   On considére deux EDL du premier ordre partageant la même équation homogène : Si est une solution de et est une solution de alors est une solution de l'equation    "
},
{
  "id": "prop-solreelle",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#prop-solreelle",
  "type": "Proposition",
  "number": "6",
  "title": "",
  "body": "  On considère un système différentiel homogène réel  étant une fonction continue de dans . Les solutions réelles de sont les parties réelles des solutions complexes.   Toute solution réelle de est sa propre partie réelle. Si maintenant est une solution complexe de alors, du fait que est une matrice réelle, est une solution de . L'ensemble des solution complexes de étant un -espace vectoriel, est une solution de .  Ce qui montre que les solutions réelles de sont les parties réelles de ses solutions complexes.   "
},
{
  "id": "sec-equations-differentielles-lineaires-3-8",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-8",
  "type": "Remarque",
  "number": "7",
  "title": "",
  "body": " L'ensemble des solutions réelles est aussi l'ensemble des solutions à priori complexes qui prennent des valeurs réelles. Concrètement, une fois obtenu les solutions complexes, il suffit de déterminer les valeurs des paramètres en jeu qui permettent que la solution prennent uniquement des valeurs réelles.  "
},
{
  "id": "sec-equations-differentielles-lineaires-3-10",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-10",
  "type": "Exemple",
  "number": "8",
  "title": "",
  "body": "  Résoudre le système différentiel     Le système s'ecrit La matrice est orthogonale directe donc en est un vecteur propre. C'est aussi un vecteur propre de . En multipliant la relation par on obtient l'equation en : En suivant la procédure standard de résoltion pour une EDL linéaire du premier ordre on a alors il existe tel que dans l'expression on reconnait le module et l'argument de donc En posant avec et en identifiant les parties réelle et imaginaire  est effectivement un -espace vectoriel de dimension . Il est engendré par les fonctions    "
},
{
  "id": "sec-equations-differentielles-lineaires-3-11",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-11",
  "type": "Exemple",
  "number": "9",
  "title": "",
  "body": "  Résoudre sur l'intervalle le système différentiel     Le système équivaut à avec On constate que la somme des deux colonnes de vaut avec . Donc est une vecteur propre de associé à la valeur propre . Comme alors l'autre valeur propre de est et après un calcul rapide le vecteur est un vecteur propre qui lui est associé. Ainsi En posant avec on obtient le système différentiel d'inconnues  Il existe donc tels que La relation se traduit pas et donc    "
},
{
  "id": "sec-equations-differentielles-lineaires-3-12",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-3-12",
  "type": "Exemple",
  "number": "10",
  "title": "",
  "body": "  Résoudre sur le système différentiel     Ici le système différentiel s'écrit avec    Ce qui prouve que est semblable dans à la matrice diagonale . Clairement est un vecteur propre de associé à la valeur propre et pour tout on a Comme prévu est une droite vectorielle. Elle est engendrée par le vecteur  étant une matrice réelle, est la droite engendrée par . Ainsi avec Si on pose maintenant avec alors Il existe donc tels que de quoi on déduit que les solutions complexes de sont données par cette solution est réelle si et donc en posant on peut écrire où . L'ensemble des solutions de cette forme est de dimension sur donc il est l'ensemble des solutions réelles de .   "
},
{
  "id": "sec-equations-differentielles-lineaires-4-2",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-4-2",
  "type": "Vocabulaire",
  "number": "11",
  "title": "",
  "body": "   On appelle système fondamental de solutions de l'équation homogène  toute base de .  Soient des solution de . On appelle wronksien dans la base du système de solutions de la fonction définie par     "
},
{
  "id": "sec-equations-differentielles-lineaires-4-3",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-4-3",
  "type": "Proposition",
  "number": "12",
  "title": "",
  "body": " Soient des solution de . Soit leurs wronksien. Les assertions suivantes sont équivalentes :  est un système fondamental de solutions de ;  pour tout , la famille est une base de ;  il existe tel que soit une base de ;  pour tout , ;  il existe tel que .    "
},
{
  "id": "sec-equations-differentielles-lineaires-4-4",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-4-4",
  "type": "Remarque",
  "number": "13",
  "title": "",
  "body": " Avec les notations de la proposition précédente :    Une famille de fonctions de dans peut très bien être libre sans que soit libre pour tout .   la fonction est soit partout nulle sur , soit ne s'annule en aucun point de ;   la famille est soit une base de pour tout soit elle est liée pour tout .    "
},
{
  "id": "sec-equations-differentielles-lineaires-4-5",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-4-5",
  "type": "Proposition",
  "number": "14",
  "title": "Équation du wronksien.",
  "body": " Équation du wronksien  Soient des solution de . Soit leurs wronksien dans . Alors   "
},
{
  "id": "sec-equations-differentielles-lineaires-5",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-5",
  "type": "Remarque",
  "number": "15",
  "title": "",
  "body": " Ainsi la fonction est une solution sur de l'équation différentielle linéaire scalaire homogène du premier ordre Ce qui implique que son expression est de la forme où et est une primitive sur de la fonction . Ce qui confirme que est soit partout nulle, soit ne s'annule pas sur .  "
},
{
  "id": "sec-varconst-2",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-varconst-2",
  "type": "Lemme",
  "number": "16",
  "title": "",
  "body": " Soit un système fondamental de solutions de . Pour toute fonction de classe  , il existe des fonctions uniques de classe de dans telles que   "
},
{
  "id": "variation-des-constantes",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#variation-des-constantes",
  "type": "Théorème",
  "number": "17",
  "title": "Méthode de la variation des constantes.",
  "body": " Méthode de la variation des constantes  On suppose qu'on connait un système fondamental de l'équation homogène et on pose    Grâce aux formules de Cramer,   Alors l'équation équivaut à   "
},
{
  "id": "sec-varconst-4",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-varconst-4",
  "type": "Exemple",
  "number": "18",
  "title": "",
  "body": "  On veut résoudre complétement le système différentiel sachant que les fonctions et sont des solutions du système homogène.    Les fonctions et sont des solutions du système homogène associé à . Elles en constituent un SFS . Les solutions de sont donc données par où . En posant et , la métode de la variation des consantes aboutit à Système linéaire d'inconnues et et de déterminant . Il se résout en ce qui donne : où et sont des constantes quelconques. Les solutions du système différentiel de départ sont donc données par    "
},
{
  "id": "sec-equations-differentielles-lineaires-7-2",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-7-2",
  "type": "Conventions et notations",
  "number": "19",
  "title": "",
  "body": " Soient un endomorphisme de et une application continue. Dans toute cette section, on considère l'équation différentielle et le système différentiel associé à dans la base   est dite une équation différentielle linéaire du premier ordre à coefficients constants. On notera l'équation homogène de et celle de .  "
},
{
  "id": "solutions-homogenes-coefficients-constants",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#solutions-homogenes-coefficients-constants",
  "type": "Théorème",
  "number": "20",
  "title": "Solutions d’une équation homogène à coefficients constants.",
  "body": " Solutions d'une équation homogène à coefficients constants    Les solutions de l'équation homogène sur sont les fonctions où est un vecteur quelconque de .  Soit . L'unique solution sur du problème de Cauchy de l'équation homogène en est donnée par     "
},
{
  "id": "sec-equations-differentielles-lineaires-7-4",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-7-4",
  "type": "Corollaire",
  "number": "21",
  "title": "Propriétés de l’exponentielle.",
  "body": " Propriétés de l'exponentielle    On considère une algèbre de dimension finie . Pour tout , l'application est l'unique solution du problème de Cauchy Grâce à cette identification, on établit rapidement la propriété :   On se place dans l'algèbre . Si est un endomorphisme de alors     "
},
{
  "id": "sec-equations-differentielles-lineaires-7-6",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#sec-equations-differentielles-lineaires-7-6",
  "type": "Remarque",
  "number": "22",
  "title": "SFS et variation des constantes.",
  "body": "SFS et variation des constantes   Système fondamental de solution et wronksien  Soient et posons pour tout , .  Ces notions ont toutefois peu d'intérêt dans le cas d'une EDL à coefficients constants car on sait expliciter les solutions.    est un SFS de sur si et seulement si est une base de .  Le wronksien de dans la base est donné par       Variation des constantes  Les solutions de l'équation homogène étant les fonctions où est un vecteur quelconque de , faire varier les constantes revient à faire varier le vecteur . On pose donc de telle sorte que Cette présentation n'offre toutefois pas d'avantage pratique par rapport à la méthode générale de la variation des constantes puisqu'elle exige le calcul de l'exponentielle et donc le calcul de l'inverse de la matrice de passage dans une base de réduction. .   "
},
{
  "id": "expression-solution-cauchy",
  "level": "2",
  "url": "sec-equations-differentielles-lineaires.html#expression-solution-cauchy",
  "type": "Théorème",
  "number": "23",
  "title": "Expression intégrale de la solution du problème de Cauchy.",
  "body": " Expression intégrale de la solution du problème de Cauchy  Soient et . L'unique solution de l'équation complète vérifiant la condition initiale est donnée par   "
},
{
  "id": "eqdiff-scal2",
  "level": "1",
  "url": "eqdiff-scal2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Équations différentielles linéaires scalaires, étude générale",
  "body": " Équations différentielles linéaires scalaires, étude générale   Le cadre général   désignera un entier strictement positif.  On considère des fonctions continues de dans .    L'équation différentielle   est dite une équation différentielle linéaire scalaire d'ordre . Une solution de sur est par définition une fonction de classe telle que   On notera l'ensemble de ces solutions.    L'équation homogène de est l'équation différentielle     Soient et . Une fonction est dite une solution sur du problème de Cauchy :   si c'est une solution de sur qui vérifie     En posant , l'équation se ramène au système différentiel linéaire du premier ordre :   est une matrice compagne pour tout .   avec  On notera le système homogène de .      Une fonction de classe est une solution de (resp. de ) sur si et seulement si la fonction définie par   est une solution du système différentiel (resp. de ) sur .  En outre, l'application   induit une bijection de sur (resp. de sur ).   induit un isomorphisme entre les -espaces vectoriels et .     Cauchy-Lipschitz  Pour tout , il existe une unique solution de sur telle que      est un -espace vectoriel de dimension .  pour toute solution de sur .     Soient des solutions de l'équation homogène . Nous dirons que est un système fondamental de solutions de si c'est une base de . Nous appellerons wronskien des solutions , le wronskien de dans la base canonique de :     Soient des solutions de l'équation homogène . Soit leur wronskien. Grâce à l'isomorphisme induit par , les assertions suivantes sont équivalentes :   est un système fondamental de solutions de ;  est un système fondamental de solutions de ;  ;  .    Équation du wronksien  Rappelons l'écriture de l'équation homogène :   Les wronskiens des solutions de ne dépendent que de la fonction .   Avec les notations de la proposition précédente, l'équation du wronskien donne ici :     Variation des constantes  Rappelons l'écriture de l'équation complète :   On suppose qu'on connaît un système fondamental de solutions de l'équation homogène . En posant   on a      Le cas d'une équation à coefficients constants   Solution d'une EDLS homogène à coefficients constants  Soient des scalaires . On considère l'équation différentielle linéaire scalaire homogène d'ordre dite à coefficients constants :   On appelle polynôme caractéristique de le polynôme :   Les solutions de sont en fait de classe sur .     Si est scindé sur , où sont les racines distinctes de , alors     Si mais n'est pas scindé sur :   où sont les racines réelles éventuelles de et ses racines complexes non réelles, alors les solutions réelles de sur sont les fonctions    Les solutions réelles de sont les parties réelles de ses solutions complexes.   où et sont des polynômes quelconques.      Commentaires sur la démonstration du théorème   Quelques aspects qui sont à la base de la démonstration du théorème précédent mais qui ont un intérêt intrinsèque . On introduit l'opérateur    Soit . La famille formée des fonctions est libre.   Il suffit de remarquer que si pour tout , étant un polynôme de , alors pour tout , soit .     Soit un polynôme de degré donné. Considérons l'EDLS homogène d'ordre :   Alors est un polynôme associé au polynôme caractéristique de et on a   En particulier, .    Si où et , alors    Observons que si et , alors   Et donc pour tout ,   Si , alors .  est de dimension et il contient les fonctions , , qui forment une famille libre. Elles en constituent donc une base. D'où le résultat.     Si est scindé sous la forme , où sont deux à deux distincts, alors le résultat précédent et le théorème de décomposition des noyaux impliquent que     Une conséquence de ce qui précède : si sont des scalaires deux à deux distincts et des polynômes quelconques, alors       Solution particulière quand  Soient et . Considérons l'EDLS à coefficients constants :   Une fonction de la forme plus générale avec est une solution de si et seulement si est une solution de l'équation homogène . Comme , alors ceci n'est possible que si est un polynôme de degré .   Alors admet une solution unique de la forme , où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ).   En posant pour l'instant , alors selon la remarque  est une solution de si et seulement si   Par définition de , on a et , donc cela équivaut à   Le polynôme à gauche de cette égalité a le même degré que , soit , d'où l'idée de remplacer par . Dans ce cas, serait de même degré que et l'égalité précédente équivaudrait à   En posant , il suffit maintenant de remarquer que l'application   est un endomorphisme de qui est injectif car il conserve le degré. C'est donc un isomorphisme de . Il existe donc un unique polynôme de degré (et donc ) qui vérifie l'égalité précédente. La fonction est une solution de .      Trouver les solutions complexes de l'EDLS : .  Trouver les solutions réelles de l'EDLS : .     "
},
{
  "id": "eqdiff-scal2-2-2",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-2",
  "type": "Conventions et notations",
  "number": "24",
  "title": "",
  "body": " désignera un entier strictement positif.  On considère des fonctions continues de dans .    L'équation différentielle   est dite une équation différentielle linéaire scalaire d'ordre . Une solution de sur est par définition une fonction de classe telle que   On notera l'ensemble de ces solutions.    L'équation homogène de est l'équation différentielle     Soient et . Une fonction est dite une solution sur du problème de Cauchy :   si c'est une solution de sur qui vérifie     En posant , l'équation se ramène au système différentiel linéaire du premier ordre :   est une matrice compagne pour tout .   avec  On notera le système homogène de .    "
},
{
  "id": "eqdiff-scal2-2-3",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-3",
  "type": "Proposition",
  "number": "25",
  "title": "",
  "body": " Une fonction de classe est une solution de (resp. de ) sur si et seulement si la fonction définie par   est une solution du système différentiel (resp. de ) sur .  En outre, l'application   induit une bijection de sur (resp. de sur ).   induit un isomorphisme entre les -espaces vectoriels et .   "
},
{
  "id": "theo-cauchy-lipschitz",
  "level": "2",
  "url": "eqdiff-scal2.html#theo-cauchy-lipschitz",
  "type": "Théorème",
  "number": "26",
  "title": "Cauchy-Lipschitz.",
  "body": " Cauchy-Lipschitz  Pour tout , il existe une unique solution de sur telle que   "
},
{
  "id": "eqdiff-scal2-2-5",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-5",
  "type": "Corollaire",
  "number": "27",
  "title": "",
  "body": "  est un -espace vectoriel de dimension .  pour toute solution de sur .   "
},
{
  "id": "eqdiff-scal2-2-6",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-6",
  "type": "Vocabulaire",
  "number": "28",
  "title": "",
  "body": " Soient des solutions de l'équation homogène . Nous dirons que est un système fondamental de solutions de si c'est une base de . Nous appellerons wronskien des solutions , le wronskien de dans la base canonique de :   "
},
{
  "id": "eqdiff-scal2-2-7",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-7",
  "type": "Proposition",
  "number": "29",
  "title": "",
  "body": " Soient des solutions de l'équation homogène . Soit leur wronskien. Grâce à l'isomorphisme induit par , les assertions suivantes sont équivalentes :   est un système fondamental de solutions de ;  est un système fondamental de solutions de ;  ;  .   "
},
{
  "id": "eqdiff-scal2-2-8",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-8",
  "type": "Proposition",
  "number": "30",
  "title": "Équation du wronksien.",
  "body": "Équation du wronksien  Rappelons l'écriture de l'équation homogène :   Les wronskiens des solutions de ne dépendent que de la fonction .   Avec les notations de la proposition précédente, l'équation du wronskien donne ici :   "
},
{
  "id": "eqdiff-scal2-2-9",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-2-9",
  "type": "Proposition",
  "number": "31",
  "title": "Variation des constantes.",
  "body": " Variation des constantes  Rappelons l'écriture de l'équation complète :   On suppose qu'on connaît un système fondamental de solutions de l'équation homogène . En posant   on a   "
},
{
  "id": "theo-eqscal",
  "level": "2",
  "url": "eqdiff-scal2.html#theo-eqscal",
  "type": "Théorème",
  "number": "32",
  "title": "Solution d’une EDLS homogène à coefficients constants.",
  "body": " Solution d'une EDLS homogène à coefficients constants  Soient des scalaires . On considère l'équation différentielle linéaire scalaire homogène d'ordre dite à coefficients constants :   On appelle polynôme caractéristique de le polynôme :   Les solutions de sont en fait de classe sur .     Si est scindé sur , où sont les racines distinctes de , alors     Si mais n'est pas scindé sur :   où sont les racines réelles éventuelles de et ses racines complexes non réelles, alors les solutions réelles de sur sont les fonctions    Les solutions réelles de sont les parties réelles de ses solutions complexes.   où et sont des polynômes quelconques.    "
},
{
  "id": "eqdiff-scal2-3-3-4-1-1-2",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-3-3-4-1-1-2",
  "type": "Explication",
  "number": "1.1",
  "title": "",
  "body": " Il suffit de remarquer que si pour tout , étant un polynôme de , alors pour tout , soit .  "
},
{
  "id": "eqdiff-scal2-3-3-4-1-3-3",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-3-3-4-1-3-3",
  "type": "Explication",
  "number": "3.1",
  "title": "",
  "body": " Observons que si et , alors   Et donc pour tout ,   Si , alors .  est de dimension et il contient les fonctions , , qui forment une famille libre. Elles en constituent donc une base. D'où le résultat.  "
},
{
  "id": "eqdiff-scal2-3-4",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-3-4",
  "type": "Proposition",
  "number": "33",
  "title": "Solution particulière quand <span class=\"process-math\">\\(\\varphi(t) = R(t) \\e^{\\lambda t}\\)<\/span>.",
  "body": " Solution particulière quand  Soient et . Considérons l'EDLS à coefficients constants :   Une fonction de la forme plus générale avec est une solution de si et seulement si est une solution de l'équation homogène . Comme , alors ceci n'est possible que si est un polynôme de degré .   Alors admet une solution unique de la forme , où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ).   En posant pour l'instant , alors selon la remarque  est une solution de si et seulement si   Par définition de , on a et , donc cela équivaut à   Le polynôme à gauche de cette égalité a le même degré que , soit , d'où l'idée de remplacer par . Dans ce cas, serait de même degré que et l'égalité précédente équivaudrait à   En posant , il suffit maintenant de remarquer que l'application   est un endomorphisme de qui est injectif car il conserve le degré. C'est donc un isomorphisme de . Il existe donc un unique polynôme de degré (et donc ) qui vérifie l'égalité précédente. La fonction est une solution de .   "
},
{
  "id": "eqdiff-scal2-3-5",
  "level": "2",
  "url": "eqdiff-scal2.html#eqdiff-scal2-3-5",
  "type": "Exemple",
  "number": "34",
  "title": "",
  "body": "  Trouver les solutions complexes de l'EDLS : .  Trouver les solutions réelles de l'EDLS : .   "
},
{
  "id": "ch-eqdiff-cours-5",
  "level": "1",
  "url": "ch-eqdiff-cours-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Équations linéaires scalaires du deuxième ordre",
  "body": " Équations linéaires scalaires du deuxième ordre   Sous le thème des équations différentielles, les équations linéaires scalaires du deuxième ordre sont les équations les plus fréquemment abordées dans les sujets de concours.    Soient et des applications continues de dans . On considère l'EDLS du deuxième ordre :  Une solution de sur est une fonction telle que :  est deux fois dérivable sur ;  .   L'équation est dite normalisée si est constante de valeur et normalisable si ne s'annule pas sur .   Remarque  Si est normalisable, alors elle est équivalente à l'équation normalisée obtenue en la divisant par . En général, est équivalente à toute équation de la forme :  où est une fonction continue qui ne s'annule pas sur .   Attention donc, les résultats du cadre général ne sont applicables à que si elle est normalisable. En particulier, la dimension de l'ensemble des solutions de l'équation homogène peut être strictement supérieure à .  Dans le cas où est normalisable, elle équivaut au système différentiel : où   On notera l'équation homogène de et celle de .    Récapitulatif  Dans cette rubrique, on ne fera qu'adapter les énoncés du cadre général au cas particulier d'une EDLS du deuxième ordre normalisable.  On suppose donc que l'équation est normalisable.   Théorème de Cauchy-Lipschitz  Pour tout , il existe une unique solution de telle que :     Structure des ensembles de solutions  est un -espace vectoriel de dimension , et pour toute solution de sur .    Système de solutions et wronskien  Si et sont des solutions de l'équation homogène , on appelle wronskien de et la fonction définie par :   La famille est une base de si et seulement si ne s'annule pas sur . Pour cela, il suffit qu'il ne s'annule pas en un point de .    Équation du wronskien   Le wronskien de deux solutions de ne dépend donc pas de la fonction .   Soit le wronskien de deux solutions quelconques de . Alors :     Variations des constantes  On suppose qu'on connaît une base de . On note leur wronskien. En remplaçant par dans le système différentiel , alors :   Les solutions de sur sont donc les fonctions :   où les fonctions et sont données par :    Une solution particulière  En fixant un point , on obtient une solution particulière de en posant  en dérivant la relation on voit en outre que De quoi on déduit que est l'unique solution de qui vérifie .    Expression complète des solutions de  Les solutions de sont ainsi les fonctions de la forme où sont des scalaires quelconques dans .   Solution du problème de Cauchy  Soient . Sur la base de la relation l'unique solution de qui vérifie et est déterminée par le système linéaire d'inconnues et  : dont le déterminant est .        Spécificités des EDLS du second ordre  Dans cette rubrique, on examine quelques spécificités des équations linéaires scalaires du deuxième ordre. On considère les équations différentielles qu'on suppose normalisables sur :    Solutions passant par un même point   Chacune de ces solutions est entièrement déterminée par .   Pour tout , il existe une infinité de solutions de telles que .  Si et sont des solutions distinctes de l'équation homogène vérifiant la condition , alors :   et puisque , alors .     Système fondamental canonique en un point  Soit . On appelle système fondamental canonique de solutions de en le couple de solutions de définies par :   . est bien un système fondamental de solutions de .    , ;  , .   L'intérêt et qu'on obtienne des expressions simplifiées des solutions de et de :   Les solutions de sont données par :   Les solutions de sont données par :     pour rappel, .    Wronskien croisé  On considère deux EDLS homogènes normalisables sur (qui ne diffèrent que par le coefficient de ) :   Soient une solution de sur et une solution de sur . En posant , on a : c'est l'équation du wronksien croisé des équations et .   Par dérivation du déterminant selon les lignes :   En utilisant les équations différentielles, on obtient :   d'où le résultat.       Techniques de résolution  Cette rubrique rassemble quelques remarques pratiques qui peuvent mener à la résolution d'une équation linéaire scalaire du deuxième ordre.   Il n'existe aucune méthode générale qui permet de résoudre toutes les EDLS d'ordre 2.   Dans les deux techniques suivantes, on suppose que est normalisable sur et qu'on connaît une solution de l'équation homogène qui ne s'annule pas sur .    Méthode de Lagrange  On pose et on remplace dans pour obtenir l'équation : Cette équation peut être regardée comme une EDLS du premier ordre en .  Par ailleurs, en multipliant par , on obtient la forme plus mnémonique :   où et . Ce qui donne la forme générale de :   où est quelconque dans et est une primitive de sur .   Méthode du wronskien  L'idée est d'utiliser le fait que les wronskiens de sont les solutions de l'équation :   La méthode du wronskien permet de résoudre l'équation homogène . Celle de Lagrange permet, si on le désire, de résoudre l'équation complète .      Solutions développables en série entière   L'ensemble des solutions de l'équation homogène qui sont développables en série entière en est un sous-espace vectoriel de .   Si les fonctions , et sont polynomiales, il est fort possible que admette des solutions développables en série entière en , parfois polynomiales.       Cas d'une EDLS à coefficients constants  On rappelle ici l'expression des solutions d'une EDLS d'ordre 2 à coefficients constants : On note et les racines dans du polynôme caractéristique de :    Solutions de l'équation homogène  les solutions de sur à valeurs dans sont de la forme :   si et ;  si ;  si et .   À chaque fois, et sont des scalaires quelconques dans .    Solution particulière de dans le cas où  si est de la forme où est une fonction polynomiale à coefficients dans et , alors admet une solution unique de la forme : où est la multiplicité de en tant que racine du polynôme caractéristique de et est un polynôme qui a le même degré que à déterminer.    Solution particulière dans le cas général  sur la base de la relation , étant un point quelconque choisi dans , admet une solution de la forme : où  Tout calcul fait :  si ;  si ;  si .       Exemples non génériques    Résoudre en observant que est une solution :     Résoudre en commençant par chercher des solutions polynomiales de l'équation homogène :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en posant et en étudiant le raccord en :       Équation de Cauchy-Euler   On considère l'équation L'équation n'est pas normalisable en .  On cherche les solutions sur qui sont de la forme . Pour que soit une solution, il faut et il suffit que soit une racine du polynôme :  Si et sont les racines de dans , les solutions de sur sont de la forme :  si ;  si ;  si et .    Autre méthode :  Si on pose , alors équivaut sur à l'EDLS à coefficients constants : équation à coefficients constants qui a pour polynôme caractéristique .    Équation d'Airy   On considère l'équation : On cherche les solutions développables en série entière sur .    En remplaçant par dans , on obtient : Ce qui revient à : ou encore, pour tout : Alors les solutions de sur sont les fonctions données par : où et sont quelconques dans et : On notera que les séries entières qui interviennent dans les expressions de et sont bien de rayon de convergence infini.     Équation d'Hermite :    où est un réel positif ou nul. On cherche les solutions développables en série entière sur .    Comme pour l'équation d'Airy, admet effectivement des solutions développables en série entière sur  En remplaçant dans , on obtient : Et donc pour tout :  Si on prolonge la fonction d'Euler sur par la relation : De cette manière, elle continuera à vérifier l'équation fonctionnelle : et donc : Avec respectivement et , on obtient les écritures : d'où les solutions de : avec :   En fait, les écritures précédentes ne sont valables que si et . Dans le cas contraire, en revenant aux relations précédentes, on aura :   Si , c'est-à-dire avec , alors :    Dans ce cas, la fonction est polynomiale.  Si , c'est-à-dire avec , alors :    Dans ce cas, c'est la fonction qui est polynomiale.   On notera que si est un entier positif, alors admet au moins une solution polynomiale. Cette solution est paire si est pair et impaire si est impair.     Équation de Tchebytchev   On considère l'équation différentielle :   où est un réel positif. On cherche les solutions développables en série entière sur .    En remplaçant par dans l'équation, on obtient la relation de récurrence :   Pour tout , on a :   Par suite, les solutions de l'équation sur sont les fonctions données par : où :   On peut de manière directe prouver que l'équation admet au moins une solution polynomiale si : c'est le polynôme de Tchebychev défini par :   On notera que :   Si est un entier positif pair, avec , alors si et est une fonction polynomiale paire de degré .  Si est un entier positif impair, avec , alors si et est une fonction polynomiale impaire de degré .  Si est un entier positif, alors l'équation admet au moins une solution polynomiale.      Transformation d'une EDLS du second ordre  Pour la simplification de l'étude de certaines proriétés des solutions d'une EDLS du second ordre, on la transforme en des formes plus adaptées. La suite expose les deux transformations les plus utilisées.    Forme normale d'une EDLS du deuxième ordre  On suppose que les fonctions et sont de classe . Alors il existe une fonction de classe qui ne s'annule pas sur telle qu'en posant , soit équivalente à une équation de la forme : Cette équation est dite une forme normale de l'équation .   Supposons pour l'instant qu'une telle fonction existe. On a alors :   sera de ce fait équivalente à l'EDLS d'inconnue :   L'équation du wronskien de est . Tous ses wronskiens sont constants.   En choisissant comme une solution non nulle de l'équation du premier ordre :   elle sera effectivement de classe car et sont supposées de classe , ne s'annulera pas sur et on aura :   Les équations de type sont souvent associées à l'étude de la distribution des zéros d'une solution sur , de l'existence de solutions périodiques dans le cas où la fonction est périodique...   avec :     Forme auto-adjointe  On suppose que la fonction est de classe sur . Alors il existe une fonction de classe ne s'annulant pas sur et une fonction continue sur telle que soit équivalente à l'équation :   L'équation du wronskien de est . Tous les wronskiens de sont proportionnels à .     Cette équation est dite une forme auto-adjointe de l'équation homogène .   Contrairement à une forme normale de , on conserve la même fonction inconnue .    Considérons pour l'instant une fonction quelconque de classe et ne s'annulant pas sur . Alors :   Si on choisit comme une solution non nulle sur de l'EDLS du premier ordre :   on aura et se ramène donc à :   Il suffit de poser qui est bien de classe et ne s'annule pas sur et .      "
},
{
  "id": "ch-eqdiff-cours-5-2",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-2",
  "type": "Mise en garde",
  "number": "35",
  "title": "",
  "body": " Sous le thème des équations différentielles, les équations linéaires scalaires du deuxième ordre sont les équations les plus fréquemment abordées dans les sujets de concours.  "
},
{
  "id": "ch-eqdiff-cours-5-3",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-3",
  "type": "Conventions et notations",
  "number": "36",
  "title": "",
  "body": " Soient et des applications continues de dans . On considère l'EDLS du deuxième ordre :  Une solution de sur est une fonction telle que :  est deux fois dérivable sur ;  .   L'équation est dite normalisée si est constante de valeur et normalisable si ne s'annule pas sur .   Remarque  Si est normalisable, alors elle est équivalente à l'équation normalisée obtenue en la divisant par . En général, est équivalente à toute équation de la forme :  où est une fonction continue qui ne s'annule pas sur .   Attention donc, les résultats du cadre général ne sont applicables à que si elle est normalisable. En particulier, la dimension de l'ensemble des solutions de l'équation homogène peut être strictement supérieure à .  Dans le cas où est normalisable, elle équivaut au système différentiel : où   On notera l'équation homogène de et celle de .  "
},
{
  "id": "ch-eqdiff-cours-5-5-3-1-1-5",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-5-3-1-1-5",
  "type": "Explication",
  "number": "1.1",
  "title": "",
  "body": " et puisque , alors .  "
},
{
  "id": "ch-eqdiff-cours-5-5-3-1-3-4",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-5-3-1-3-4",
  "type": "Explication",
  "number": "3.1",
  "title": "",
  "body": " Par dérivation du déterminant selon les lignes :   En utilisant les équations différentielles, on obtient :   d'où le résultat.  "
},
{
  "id": "ch-eqdiff-cours-5-8",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-8",
  "type": "Exemple",
  "number": "37",
  "title": "Exemples non génériques.",
  "body": " Exemples non génériques    Résoudre en observant que est une solution :     Résoudre en commençant par chercher des solutions polynomiales de l'équation homogène :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en commençant par chercher les solutions développables en série entière :     Résoudre sur , en posant et en étudiant le raccord en :     "
},
{
  "id": "ch-eqdiff-cours-5-9",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-9",
  "type": "Exemple",
  "number": "38",
  "title": "Équation de Cauchy-Euler.",
  "body": " Équation de Cauchy-Euler   On considère l'équation L'équation n'est pas normalisable en .  On cherche les solutions sur qui sont de la forme . Pour que soit une solution, il faut et il suffit que soit une racine du polynôme :  Si et sont les racines de dans , les solutions de sur sont de la forme :  si ;  si ;  si et .    Autre méthode :  Si on pose , alors équivaut sur à l'EDLS à coefficients constants : équation à coefficients constants qui a pour polynôme caractéristique .   "
},
{
  "id": "ch-eqdiff-cours-5-10",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-10",
  "type": "Exemple",
  "number": "39",
  "title": "Équation d’Airy.",
  "body": "Équation d'Airy   On considère l'équation : On cherche les solutions développables en série entière sur .    En remplaçant par dans , on obtient : Ce qui revient à : ou encore, pour tout : Alors les solutions de sur sont les fonctions données par : où et sont quelconques dans et : On notera que les séries entières qui interviennent dans les expressions de et sont bien de rayon de convergence infini.   "
},
{
  "id": "ch-eqdiff-cours-5-11",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-11",
  "type": "Exemple",
  "number": "40",
  "title": "Équation d’Hermite :.",
  "body": " Équation d'Hermite :    où est un réel positif ou nul. On cherche les solutions développables en série entière sur .    Comme pour l'équation d'Airy, admet effectivement des solutions développables en série entière sur  En remplaçant dans , on obtient : Et donc pour tout :  Si on prolonge la fonction d'Euler sur par la relation : De cette manière, elle continuera à vérifier l'équation fonctionnelle : et donc : Avec respectivement et , on obtient les écritures : d'où les solutions de : avec :   En fait, les écritures précédentes ne sont valables que si et . Dans le cas contraire, en revenant aux relations précédentes, on aura :   Si , c'est-à-dire avec , alors :    Dans ce cas, la fonction est polynomiale.  Si , c'est-à-dire avec , alors :    Dans ce cas, c'est la fonction qui est polynomiale.   On notera que si est un entier positif, alors admet au moins une solution polynomiale. Cette solution est paire si est pair et impaire si est impair.   "
},
{
  "id": "ch-eqdiff-cours-5-12",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-12",
  "type": "Exemple",
  "number": "41",
  "title": "Équation de Tchebytchev.",
  "body": " Équation de Tchebytchev   On considère l'équation différentielle :   où est un réel positif. On cherche les solutions développables en série entière sur .    En remplaçant par dans l'équation, on obtient la relation de récurrence :   Pour tout , on a :   Par suite, les solutions de l'équation sur sont les fonctions données par : où :   On peut de manière directe prouver que l'équation admet au moins une solution polynomiale si : c'est le polynôme de Tchebychev défini par :   On notera que :   Si est un entier positif pair, avec , alors si et est une fonction polynomiale paire de degré .  Si est un entier positif impair, avec , alors si et est une fonction polynomiale impaire de degré .  Si est un entier positif, alors l'équation admet au moins une solution polynomiale.    "
},
{
  "id": "ch-eqdiff-cours-5-13-3-1-1-3",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-13-3-1-1-3",
  "type": "Explication",
  "number": "1.1",
  "title": "",
  "body": " Supposons pour l'instant qu'une telle fonction existe. On a alors :   sera de ce fait équivalente à l'EDLS d'inconnue :   L'équation du wronskien de est . Tous ses wronskiens sont constants.   En choisissant comme une solution non nulle de l'équation du premier ordre :   elle sera effectivement de classe car et sont supposées de classe , ne s'annulera pas sur et on aura :   Les équations de type sont souvent associées à l'étude de la distribution des zéros d'une solution sur , de l'existence de solutions périodiques dans le cas où la fonction est périodique...   avec :  "
},
{
  "id": "ch-eqdiff-cours-5-13-3-1-2-7",
  "level": "2",
  "url": "ch-eqdiff-cours-5.html#ch-eqdiff-cours-5-13-3-1-2-7",
  "type": "Explication",
  "number": "2.1",
  "title": "",
  "body": " Considérons pour l'instant une fonction quelconque de classe et ne s'annulant pas sur . Alors :   Si on choisit comme une solution non nulle sur de l'EDLS du premier ordre :   on aura et se ramène donc à :   Il suffit de poser qui est bien de classe et ne s'annule pas sur et .  "
},
{
  "id": "sec-eqdiff-exerises-approfondissement",
  "level": "1",
  "url": "sec-eqdiff-exerises-approfondissement.html",
  "type": "Exercices",
  "number": "1.4",
  "title": "Exercices d’approfondissement",
  "body": " Exercices d'approfondissement  Lemme de Gronwall Soit un intervalle de . On fixe un point de . Version réelle  Soit une application continue positive . On suppose qu'il existe continue positive et tels que Montrer que   On introduit la fonction définie sur par  est de classe et on a Si , la fonction étant positive, on a et donc . La fonction est donc décroissante sur l'intervalle . Ce qui conduit à pour tout et ainsi Soit  Version vectorielle  On considère une fonction continue . On suppose qu'il existe continue et tels que Montrer que   Il suffit d'appliquer le résultat précédent aux fonctions continues positives et en remarquant que  Application  Utiliser ce résultat pour montrer l'unicité de la solution d'un problème de Cauchy relatif à une EDL du premier ordre.      Expression des solutions quand   On considère une EDL du premier ordre homogène et on suppose que pour tous . On fixe . Montrer que les solutions de sont les fonctions où est un vecteur quelconque de . Quel est l'unique solution de telle que lorsque est donnée ?   Résoudre sur le système différentiel lorsque      Soit et considérons les fonctions  est dérivable de dérivée et on a pour tout  Un résultat usuel affirme que dans ce cas, l'application est dérivable de dérivée . Ensuite, cela implique que la fonction est dérivable et que La fonction est donc une solution de . C'est l'unique solution de qui vérifie . Le vecteur étant quelconque dans , cela prouve que toutes les solutions de sont de la forme de .   La condition est bien vérifiée et on a et ensuite Alors les solutions du système différentiel sont les fonctions     Solutions bornées d'une équation différentielle linéaire à coefficients constants  Soit .  Montrer que l'application est bornée sur si et seulement si      Quelles sont les solutions du système différentiel qui sont bornées ?      Considérons une formule de trigonalisation où où sont les valeurs propres distinctes de , leurs multiplicités respectives et des matrices nilpotentes. Alors avec L'application est donc bornée sur si et seulement si toutes les applications le sont. Or si et est une matrice nilpotente d'indice de nilpotence , alors Puisque , alors la fonction est bornée si et seulement si ( et ) ou ( et ). On en déduit que la fonction est bornée si et seulement si Et finalement, l'application est bornée si et seulement si   Soit et considérons la solution . Décomposons sous la forme où pour tout , . On peut poser pour tout  On a alors pour tout , et donc est bornée si et seulement si les fonctions sont toutes bornées.  Si , alors la matrice est bornée et donc est bornée.  Si , on introduit l'entier . On peut alors écrire La fonction est bornée si et seulement si les fonctions sont bornées. Alors ne peut être bornée que si , c'est-à-dire si ou encore .  Si , alors n'est pas bornée et donc ne peut être bornée que si ou encore .  Ainsi, la solution de est bornée si et seulement si où et .     Théorème de l'application spectrale  Soit une série entière de rayon de convergence infini. On note sa somme sur .   Montrer que pour toute matrice , la série converge. On note également sa somme.  Montrer que .  Soit une valeur propre de . On suppose que pour toute valeur propre de telle que . Montrer que   On suppose que induit une injection sur . Soit .   Montrer que les valeurs propres de et de ont la même multiplicité.  Montrer que si , alors        Pour tout , on a . Puisque la série entière a un rayon de convergence infini, la série converge et donc la série converge absolument.  Écrivons une formule de trigonalisation de : où chaque bloc étant triangulaire supérieure avec une même valeur propre de sur sa diagonale. On peut alors justifier que avec et est triangulaire supérieure d'éléments diagonaux tous égaux à . Ainsi,   Posons Soit une valeur propre de telle que . On a alors pour tout  Ainsi, . Par suite, . La réciproque nécessite le recours à la réduction de Jordan. Examinons ce qui se passe avec une cellule de Jordan dans la décomposition de . Pour tout , on peut écrire Avec la convention si . Pour chaque , on a Donc la série est convergente de somme . Par linéarité de la somme d'une série convergente, on a donc Concrètement, est de la forme Ainsi, est triangulaire supérieure stricte et tous les coefficients sur sa deuxième diagonale supérieure valent . Elle est donc échelonnée de rang . Si on écrit maintenant où est la réduite de Jordan de , alors . Soit la liste de toutes les cellules de Jordan de qui correspondent à des valeurs propres de telle que et soit le bloc diagonal qui regroupe toutes les autres cellules et dont la taille sera notée , quitte à réordonner toutes les cellules de , on peut écrire Le bloc est inversible car ne figure pas dans la diagonale de . Donc D'un autre côté, pour chaque valeur propre de , le nombre de cellules de Jordan de relative à est égal à . Ce qui prouve que et ainsi En conclusion,     Reprenons l'expression de donnée précédemment où est la multiplicité de la valeur propre de . Puisque on a supposé que induit une injection sur , alors les nombres sont distincts et donc est une racine de multiplicité de .  On suppose que . Il va falloir passer encore par la réduction de Jordan de la matrice .      Application résolvante d'une équation différentielle linéaire On considère une EDL du premier ordre et on note son équation homogène. On appelle équation résolvante de , l'équation différentielle linéaire homogène d'ordre 1 l'inconnue étant une application de classe de dans . On appelle application résolvante de l'application définie sur par où est l'unique solution de qui vérifie .  Montrer que pour tout , . En déduire que est inversible et que .  Exprimer les solutions de et celles de en fonction de .  Donner l'expression de dans le cas où l'application est constante.  Montrer que si pour tout , alors   On fixe et on considère l'application . Vérifier que pour tout , et en déduire que est de classe sur avec   On suppose que est bornée et on pose . Montrer que En déduire que pour toute solution de l'équation homogène    Soit . Montrer que l'unique solution de l'équation complète telle que est donnée par la formule de Duhamel :      Pour fixé, la fonction est par définition l'unique solution de qui prend la valeur en . Si on fixe et dans , les fonctions et sont des solutions de et on a . On a donc d'après le théorème de Cauchy-Lipschitz, soit pour tout . En particulier lorsque , on obtient donc est inversible d'inverse .  Fixons . Pour tout , l'unique solution de telle que est donnée par . Pour tout , l'unique solution de telle que est donnée par .  On suppose que est constante. Pour tout , l'unique solution de telle que est donnée par . On a donc Ce qui implique que .  On suppose donc que et commutent pour tout . Posons alors Fixons et considérons la fonction . L'application est dérivable sur et on a  est donc une solution de sur . Notons par ailleurs que . Donc par définition de , on a Ces égalités sont valables pour tout donc .  est l'unique solution de telle que . Soient . On a . Les fonctions et sont donc dérivables et on a    On a   On introduit maintenant la fonction réelle continue définie par Si , on a d'après l'inégalité précédente En posant on a Et donc est décroissante sur . Comme , alors sur . Ainsi et donc Si est une solution de , alors et donc   Les solutions de l'équation homogène s'écrivent sous la forme où est un vecteur quelconque de . La variation des constantes revient donc à faire varier le vecteur . Posons donc . On a alors   Dans cette dernière expression de , on a donc L'unique solution de qui vérifie est donnée par la : c'est la formule de Duhamel . Elle généralise l'expression de la solution du problème de Cauchy d'une équation à coefficients constants donnée dans     Déterminant de l'application résolvante On reprend les notations de l'exercice précédent.  Montrer que   On suppose que et que l'application est intégrable sur . Montrer qu'il existe tel que       Fixons . Soit la base qu'on a fixée dans . Les fonctions sont des solutions de et leur wronksien est L'équation du wronksien donne ainsi Il existe donc un scalaire qui dépend de qu'on va noter tel que Mais comme , alors et ainsi   La trace est une forme linéaire continue de donc il existe une constante telle que On a donc Ce qui montre que l'application est intégrable sur . Posons alors Soit un réel . Il existe un réel tel que et donc Ce qui implique que pour tout en dehors du compact , on a Sur le compact , l'application continue est bornée et atteint ses bornes. Comme elle ne s'annule pas sur , alors sa borne inférieure est strictement positive. D'où l'existence d'un réel tel que      Solutions périodiques d'une équation différentielle linéaire On suppose que est un espace euclidien. On considère une équation différentielle linéaire homogène On suppose que pour tout , est un endomorphisme antisymétrique.  Montrer que si est une solution de , alors est constante.  Soit une solution sur de l'équation résolvante de : Montrer que s'il existe tel que soit inversible, alors pour tout , est une isométrie de .      Soit une solution de sur . La fonction est alors de classe sur et on a Donc est constante sur . Ce qui implique que la fonction est constante sur .  Posons pour tout , . La fonction est dérivable et Donc est une solution de . Soit maintenant une base de . Pour tout , on a et comme est inversible, alors est une base de . La famille est donc un système fondamental de solutions de . La famille est ainsi une base de pour tout . Ce qui implique que est inversible pour tout . Par ailleurs, pour tout fixé, il est immédiat que la fonction est une solution de . Donc pour tout , la fonction est une solution de . La fonction est donc constante. Pour , elle prend la valeur donc Ceci pour tout . Alors est une isométrie de pour tous .     Cas où les endomorphismes sont antisymétriques  On suppose que est un espace euclidien. On considère une edl homogène   On suppose que pour tout , est un endomorphisme antisymétrique.    Montrer que si est une solution de alors est constante.    Soit est une solution sur de l'équation dite résolvante de :   Montrer que s'il existe tel que soit inversible alors pour tout , est une isométrie de .       Soit une solution de sur . La fonction est alors de classe sur et on a   Donc est constante sur . Ce qui implique que la fonction est constante sur .    Posons pour tout , . La fonction est dérivable et   Donc est une solution de . Soit maintenant une base de . Pour tout on a et comme est inversible alors est une base de . La famille est donc un sfs de . La famille est ainsi une base de pour tout . Ce qui implique que est inversible pour tout .  Par ailleurs pour tout fixé, il est immédiat que la fonction est une solution de . Donc pour tout la fonction   est une solution de . La fonction est donc constante. Pour elle prend la valeur donc   Ceci pour tout . Alors est une isométrie de pour tous .     Solutions périodiques d'un système différentiel périodique  Soient des applications continues et . On suppose que et sont -périodiques. On considère le système différentiel   et note son système homogène.    Soit une fonction réelle continue -périodique. Donner une cns pour que l' edls  admette des solutions -périodiques non nulle.    Soit une solution du système . Montrer que est -périodique si et seulement si .    On suppose que l'application est constante.    Montrer que admet une solution -périodique si et seulement si admet au moins une VAP  .    On suppose que est -périodique. Soit une solution de . Montrer que est -périodique si et seulement si   Montrer que si n'admet aucune solution périodique alors admet une unique solution -périodique.      On note l'application résolvante de . Montrer que     Montrer que admet une solution -périodique non nulle si et seulement si est une VAP de la matrice .    Soit . Montrer que admet une solution -périodique non nulle si et seulement si admet une VAP  telle que .    Montrer que si admet au moins une VAP  telle que et alors admet au moins une solution -périodique non constante.    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.       Les solutions de l'équation différentielle sont les fonctions où est une primitive de . Si alors est -périodique si et seulement si pour tout , , ce qui équivaut à   Puisque est -périodique, ceci équivaut à  Avec , l'équation n'aurait par exemple aucune solution -périodique non nulle bien que est -périodique.    Si est -périodique alors .  Réciproquement supposons que et considérons . Pour tout on a   donc est une solution de . En outre on a donc selon le théorème de Cauchy-Lipschitz, . Ce qui signifie que est -périodique.      Soit une solution non nulle de . On a alors pour tout . La fonction constante est -périodique donc selon la question précédente est -périodique si et seulement si . Ce qui équivaut à   Comme est non nulle alors et donc est -périodique si et seulement si est une VAP de et .  D'après l'exercice , les VAP de sont les nombres de la forme où est une VAP de donc est une VAP de si et seulement s'il existe tel que . Ce qui équivaut à .    est une solution de l'équation complète. Son expression intégrale est   Elle est -périodique si et seulement si , ce qui équivaut à   Supposons que n'a aucune solution périodique. Selon la question précédente n'est pas une VAP de et donc de son inverse . La matrice est alors inversible et il existe donc un vecteur unique tel que   L'unique solution de qui est alors -périodique est celle qui vérifie la condition initiale .  Si admet des solutions -périodiques alors est une VAP de . L'existence de vecteurs qui vérifient dépend alors de la condition   Si cette condition se réalise alors une solution de sera -périodique si et seulement si   où est une solution quelconque de l'équation .      Considérons l'équation résolvante de :   et rappelons que pour un fixé la fonction est l'unique solution de qui vérifie .  Fixons maintenant et considérons la fonction .   Donc est une solution de et elle vérifie . Alors par définition de   ceci pour tout .  Ensuite pour tout , on a selon les résultats de l'exercice et la relation précédente   est donc semblable à .    Considérons une solution non nulle de . Alors pour tout on a . est -périodique si et seulement si ou encore   Sachant que , ceci équivaut à ce que soit une VAP de et que . Ainsi admet des solutions non nulles -périodiques si et seulement si est une VAP de et dans ce cas ces solutions sont les fonctions où .    est -périodique donc elle est -périodique. La question précédente implique que admet une solution -périodique non nulle si et seulement si est une VAP de . En s'appuyant sur les propriétés de on s'aperçoit par ailleurs que pour tout   Et donc pour tout . D'après l'exercice  est donc une VAP de si et seulement s'il existe une VAP  de telle que . Dans ce cas ces solutions sont les fonctions où est un vecteur non nul quelconque de .    Soit . Puisque alors la fonction est une solution -périodique non nulle de . Supposons qu'elle est constante. On aura alors . Le vecteur serait donc associé à , ce qui est contradictoire puisqu'on a supposé que .    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.     Équations différentielles linéaires scalaires à coefficients constants Dans cet exercice, on résume les connaissances de base sur la résolution d'une équation différentielle linéaire scalaire à coefficients constants. Soit . On note l'opérateur de dérivation de et pour tout , l'endomorphisme de défini par On considère dans la suite un polynôme non constant .   Montrer que pour tout ,     Montrer que pour tous et ,     Décrire les solutions de l'EDLS :     Soit . Montrer que induit un endomorphisme inversible sur si et seulement si .    Soient et . Montrer que l'EDLS   admet une solution unique de la forme où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ). Décrire les solutions de .    solutions DSE d'une EDLS normalisable  On considère une EDLS normalisée d'ordre  et on suppose que et sont DSE en sur un intervalle : On considère une fonction  DSE en qu'on écrit sous la forme .   Montrer que si est une solution de alors    En injectant l'expression dans l'équation on obtient   Cette relation implique que la suite est entièrement déterminée par ses deux premiers termes et . L'ensemble de ces suites est un -ev de dimension .   De quoi on déduit que    Réciproquement, soit une suite non nulle qui vérifie la relation . On considère et tels que et pour tout . On pose et    Montrer que , pour tout .    Montrer que .    En déduire que a un RC  .     L'existence de tel que et découle du fait que est plue petit que les rayons de convergence des séries entières et .  Ensuite la relation précédente sur les termes implique que pour tout     Une récurrence évidente établit donc que pour tout .  le rôle du terme dans la définition de deviendra claire dans la suite.    Simplifions l'écriture de . Pour tout  C'est l'ajout du terme dans la définition de qui a permis l'obtention d'une relation aussi simple entre et .     La suite est non nulle donc est non nulle, et comme alors pour tout dès que pour un certain . Par suite La série entière a donc un RC qui vaut . Notons le RC de . Comme alors pour tout . Donc .     Montrer que pour tous , il existe une unique solution de  DSE sur telle que et .   En compilant les résultats de la question précédente, on voit que est une solution de sur si et seulement si la suite vérifie la relation .  Reformulons : si les fonctions et sont continues sur un intervalle et sont DSE en sur alors toutes les solutions de sur sont DSE en sur .  La suite elle même est entièrement déterminée par les termes et . Comme et alors pour tout il existe une unique solution de  DSE en telle que et .   Solutions pseudo-DSE d'une EDLS non normalisable  On considère une edls homogène d'ordre 2 de la forme   et on suppose que les fonctions et sont dse en sur un intervalle :   On cherche les solutions de qui se prolongent sur sous la forme   où et qui reste à déterminer. On note le rc de .    Montrer que si induit une solution de sur alors    où est le polynôme donné par .    Réciproquement soit la racine de qui a la plus grande partie réelle. On suppose que la suite vérifie la relation de récurrence .  Montrer que et que induit une solution de sur .    Étudier la possibilité de prolonger en une solution de sur .       Supposons que soit une solution de sur .  est continue sur si , mais Il faudra que pour qu'elle soit deux fois dérivable sur .  On peut dériver terme à terme la somme de la série de fonctions pour les mêmes raisons que pour une série entière, à savoir une cvu sur tout segment de de cette série et de ses séries dérivées.  En remplaçant par dans , on obtient   Maintenant en multipliant par on fait apparaitre la somme d'une série entière nulle. Ces coefficients sont donc tous nuls.   Sachant qu'on a supposé que , on peut donc écrire  Soit est une racine de . Si pour tout alors la suite est bien définie et elle est entièrement déterminée par son premier terme .    Soit la racine de ayant la plus grande partie réelle. Alors pour tout , on ne peut avoir et donc les relations définissent complètement la suite à partir de son premier terme . Il reste à justifier que le rc  de la série entière vérifie . Pour cela, comme dans l'exercice précédent, en prenant et tel que et pour tout , on a   En introduisant maintenant la suite définie par et   On aura pour tout   Ici donc la relation implique que pour tout . Par suite pour tout réel   est unitaire de degré donc et donc   La série entière a donc pour rc  . Comme par construction alors , ceci pour tout . Ainsi .  La fonction est donc bien définie et de classe sur . La suite vérifiant la relation , la fonction induit une solution sur de .  La condition imposée à la racine de n'a servi qu'à assurer que pour tout . Si les deux racines et de sont distinctes et vérifient alors cette dernière condition est remplie à la fois pour et pour . Ce qui permet de déterminer deux solutions linéairement indépendantes de sur .  Si les nombres et sont réels alors le polynôme est à coefficients réels. S'il admet deux racines complexes non réelles et alors est imaginaire pure et ne peut donc être un élément de . En revenant aux équations , on peut observer que si est la suite associée à alors est la suite associée à . On obtient ainsi les deux solutions indépendantes de sur :     Par ailleurs en posant , les relations se traduisent par   La suite est donc unique et on a   La fonction ainsi introduite est de classe sur et vérifie . La fonction est donc deux fois dérivable en si et seulement c'est la cas de la fonction . Ce qui n'est possible que si ou .  ne dépend que de et .     Zéros des solutions d'une EDLS du second ordre  On considère une edls homogène normalisée     Montrer toute solution non nulle de admet au plus un nombre fini de zéros dans tout segment de . En déduire que l'ensemble de ces zéros dans est au plus dénombrable.    On suppose que est une solution non nulle de qui admet au moins deux zéros dans et on considère deux zéros successifs de . Montrer que toute solution de non colinéaire à admet exactement un zéro entre et .       Soit une solution non nulle de et considérons un segment . Supposons que admet une infinité de zéros dans . Il est alors possible de construire une suite injective formée de zéros de dans . Le segment étant un compact, cette suite aurait au moins une suite extraite qui converge. Notons cette sous-suite et sa limite.  On a pour tout et est continue donc . Ensuite, la suite étant injective, au plus un terme peut prendre la valeurs , il existe donc un rang à partir duquel . On a alors   et donc . Pour résumer, est une solution de et il existe tel que et . La fonction nulle étant une solution de qui vérifie aussi ces conditions on a donc . Ce qui contredit l'hypothèse faite sur .  Ce résultat permet de justifier que si est un zéro de alors il existe un segment de tel que pour tout . On dit que les zéros de sont isolés. De plus si admet au moins un zéro , alors il existe un zéro de tel que ne contienne aucun zéro de . On dira que les zéros et de sont successifs.  Ensuite, tout intervalle de peut être écrit comme une réunion dénombrable de segments, donc l'ensemble des zéros de dans est au plus dénombrable.    Soit une solution de non colinéaire à . La famille est donc un sfs de . Son wronksien garde un signe constant sur . Quitte à remplacer par on peut supposer que partout sur . On a alors   Par ailleurs ne s'annule pas sur donc elle y garde un signe constant donc les fonctions et ont des signes contraires dans . Leurs limites respectives en et en sont et donc et ont des signes contraires. Les inégalités montrent alors que . Selon le tvi , admet au moins un zéro dans . Ce zéro ne peut être qu'unique car sinon selon cette même propriété qu'on vient de démontrer, aurait au moins un zéro entre et .  Une conséquence de ce résultat et que si admet une solution non nulle qui admet une infinité de zéros dans alors toutes les solutions de ont une infinité de zéros. Deux solutions non nulles ont les mêmes zéros si elles sont colinéaires, des zéros entrelacés sinon.     Solurions périodiques d'une EDLS du second ordre  Soit une fonction continue -périodique sur . On considère l'équation   Soit le sfs canonique de en . On note son wronksien.    Montrer que .    Montrer que admet au moins une solution -périodique non nulle si et seulement si .    Montrer que admet au moins une solution non nulle telle que si et seulement si .       Puisque l'équation est normale tous ses wronksiens sont constants ( ). Les solutions et sont définies par les conditions et donc leurs wronksien vérifie . Alors .    Soit une solution de . Posons   On considère la fonction . Puisque est -périodique alors est aussi une solution de . Elle est égale à si et seulement si et . Ce qui équivaut à et . Ainsi admet une solution -périodique non nulle si et seulement si le système linéaire d'inconnues et   admet au moins une solution non nulle. Ce qui équivaut à dire que le déterminant de ce système est nul. Comme   alors admet au moins une solution -périodique non nulle si et seulement si . Dans ce cas toute solution de qui vérifie et où est une solution de est -péridodique.  Pour faire le lien avec les résultats déjà démontrés en exercice concernant les solutions périodique d'un système différentiel linéaire du premier ordre observons que :    La condition donnée équivaut à ce que soit une VAP de la matrice    Si alors l'application est l'unique solution de l' edl  telle que .      Une solution non nulle de vérifiera si et seulement si et . En posant , ces conditions équivalent à   Ce qui équivaut cette fois à .     "
},
{
  "id": "lemme-de-gronwall",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#lemme-de-gronwall",
  "type": "Exercice",
  "number": "1.4.1",
  "title": "Lemme de Gronwall.",
  "body": "Lemme de Gronwall Soit un intervalle de . On fixe un point de . Version réelle  Soit une application continue positive . On suppose qu'il existe continue positive et tels que Montrer que   On introduit la fonction définie sur par  est de classe et on a Si , la fonction étant positive, on a et donc . La fonction est donc décroissante sur l'intervalle . Ce qui conduit à pour tout et ainsi Soit  Version vectorielle  On considère une fonction continue . On suppose qu'il existe continue et tels que Montrer que   Il suffit d'appliquer le résultat précédent aux fonctions continues positives et en remarquant que  Application  Utiliser ce résultat pour montrer l'unicité de la solution d'un problème de Cauchy relatif à une EDL du premier ordre.     "
},
{
  "id": "expression-solutions-commutatives",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#expression-solutions-commutatives",
  "type": "Exercice",
  "number": "1.4.2",
  "title": "Expression des solutions quand <span class=\"process-math\">\\(a(t) \\circ a(s) = a(s) \\circ a(t)\\)<\/span>.",
  "body": "Expression des solutions quand   On considère une EDL du premier ordre homogène et on suppose que pour tous . On fixe . Montrer que les solutions de sont les fonctions où est un vecteur quelconque de . Quel est l'unique solution de telle que lorsque est donnée ?   Résoudre sur le système différentiel lorsque      Soit et considérons les fonctions  est dérivable de dérivée et on a pour tout  Un résultat usuel affirme que dans ce cas, l'application est dérivable de dérivée . Ensuite, cela implique que la fonction est dérivable et que La fonction est donc une solution de . C'est l'unique solution de qui vérifie . Le vecteur étant quelconque dans , cela prouve que toutes les solutions de sont de la forme de .   La condition est bien vérifiée et on a et ensuite Alors les solutions du système différentiel sont les fonctions    "
},
{
  "id": "solutions-bornees",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#solutions-bornees",
  "type": "Exercice",
  "number": "1.4.3",
  "title": "Solutions bornées d’une équation différentielle linéaire à coefficients constants.",
  "body": "Solutions bornées d'une équation différentielle linéaire à coefficients constants  Soit .  Montrer que l'application est bornée sur si et seulement si      Quelles sont les solutions du système différentiel qui sont bornées ?      Considérons une formule de trigonalisation où où sont les valeurs propres distinctes de , leurs multiplicités respectives et des matrices nilpotentes. Alors avec L'application est donc bornée sur si et seulement si toutes les applications le sont. Or si et est une matrice nilpotente d'indice de nilpotence , alors Puisque , alors la fonction est bornée si et seulement si ( et ) ou ( et ). On en déduit que la fonction est bornée si et seulement si Et finalement, l'application est bornée si et seulement si   Soit et considérons la solution . Décomposons sous la forme où pour tout , . On peut poser pour tout  On a alors pour tout , et donc est bornée si et seulement si les fonctions sont toutes bornées.  Si , alors la matrice est bornée et donc est bornée.  Si , on introduit l'entier . On peut alors écrire La fonction est bornée si et seulement si les fonctions sont bornées. Alors ne peut être bornée que si , c'est-à-dire si ou encore .  Si , alors n'est pas bornée et donc ne peut être bornée que si ou encore .  Ainsi, la solution de est bornée si et seulement si où et .    "
},
{
  "id": "spectral-mapping-theorem",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#spectral-mapping-theorem",
  "type": "Exercice",
  "number": "1.4.4",
  "title": "Théorème de l’application spectrale.",
  "body": "Théorème de l'application spectrale  Soit une série entière de rayon de convergence infini. On note sa somme sur .   Montrer que pour toute matrice , la série converge. On note également sa somme.  Montrer que .  Soit une valeur propre de . On suppose que pour toute valeur propre de telle que . Montrer que   On suppose que induit une injection sur . Soit .   Montrer que les valeurs propres de et de ont la même multiplicité.  Montrer que si , alors        Pour tout , on a . Puisque la série entière a un rayon de convergence infini, la série converge et donc la série converge absolument.  Écrivons une formule de trigonalisation de : où chaque bloc étant triangulaire supérieure avec une même valeur propre de sur sa diagonale. On peut alors justifier que avec et est triangulaire supérieure d'éléments diagonaux tous égaux à . Ainsi,   Posons Soit une valeur propre de telle que . On a alors pour tout  Ainsi, . Par suite, . La réciproque nécessite le recours à la réduction de Jordan. Examinons ce qui se passe avec une cellule de Jordan dans la décomposition de . Pour tout , on peut écrire Avec la convention si . Pour chaque , on a Donc la série est convergente de somme . Par linéarité de la somme d'une série convergente, on a donc Concrètement, est de la forme Ainsi, est triangulaire supérieure stricte et tous les coefficients sur sa deuxième diagonale supérieure valent . Elle est donc échelonnée de rang . Si on écrit maintenant où est la réduite de Jordan de , alors . Soit la liste de toutes les cellules de Jordan de qui correspondent à des valeurs propres de telle que et soit le bloc diagonal qui regroupe toutes les autres cellules et dont la taille sera notée , quitte à réordonner toutes les cellules de , on peut écrire Le bloc est inversible car ne figure pas dans la diagonale de . Donc D'un autre côté, pour chaque valeur propre de , le nombre de cellules de Jordan de relative à est égal à . Ce qui prouve que et ainsi En conclusion,     Reprenons l'expression de donnée précédemment où est la multiplicité de la valeur propre de . Puisque on a supposé que induit une injection sur , alors les nombres sont distincts et donc est une racine de multiplicité de .  On suppose que . Il va falloir passer encore par la réduction de Jordan de la matrice .     "
},
{
  "id": "application-resolvante",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#application-resolvante",
  "type": "Exercice",
  "number": "1.4.5",
  "title": "Application résolvante d’une équation différentielle linéaire.",
  "body": "Application résolvante d'une équation différentielle linéaire On considère une EDL du premier ordre et on note son équation homogène. On appelle équation résolvante de , l'équation différentielle linéaire homogène d'ordre 1 l'inconnue étant une application de classe de dans . On appelle application résolvante de l'application définie sur par où est l'unique solution de qui vérifie .  Montrer que pour tout , . En déduire que est inversible et que .  Exprimer les solutions de et celles de en fonction de .  Donner l'expression de dans le cas où l'application est constante.  Montrer que si pour tout , alors   On fixe et on considère l'application . Vérifier que pour tout , et en déduire que est de classe sur avec   On suppose que est bornée et on pose . Montrer que En déduire que pour toute solution de l'équation homogène    Soit . Montrer que l'unique solution de l'équation complète telle que est donnée par la formule de Duhamel :      Pour fixé, la fonction est par définition l'unique solution de qui prend la valeur en . Si on fixe et dans , les fonctions et sont des solutions de et on a . On a donc d'après le théorème de Cauchy-Lipschitz, soit pour tout . En particulier lorsque , on obtient donc est inversible d'inverse .  Fixons . Pour tout , l'unique solution de telle que est donnée par . Pour tout , l'unique solution de telle que est donnée par .  On suppose que est constante. Pour tout , l'unique solution de telle que est donnée par . On a donc Ce qui implique que .  On suppose donc que et commutent pour tout . Posons alors Fixons et considérons la fonction . L'application est dérivable sur et on a  est donc une solution de sur . Notons par ailleurs que . Donc par définition de , on a Ces égalités sont valables pour tout donc .  est l'unique solution de telle que . Soient . On a . Les fonctions et sont donc dérivables et on a    On a   On introduit maintenant la fonction réelle continue définie par Si , on a d'après l'inégalité précédente En posant on a Et donc est décroissante sur . Comme , alors sur . Ainsi et donc Si est une solution de , alors et donc   Les solutions de l'équation homogène s'écrivent sous la forme où est un vecteur quelconque de . La variation des constantes revient donc à faire varier le vecteur . Posons donc . On a alors   Dans cette dernière expression de , on a donc L'unique solution de qui vérifie est donnée par la : c'est la formule de Duhamel . Elle généralise l'expression de la solution du problème de Cauchy d'une équation à coefficients constants donnée dans    "
},
{
  "id": "determinant-resolvante",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#determinant-resolvante",
  "type": "Exercice",
  "number": "1.4.6",
  "title": "Déterminant de l’application résolvante.",
  "body": "Déterminant de l'application résolvante On reprend les notations de l'exercice précédent.  Montrer que   On suppose que et que l'application est intégrable sur . Montrer qu'il existe tel que       Fixons . Soit la base qu'on a fixée dans . Les fonctions sont des solutions de et leur wronksien est L'équation du wronksien donne ainsi Il existe donc un scalaire qui dépend de qu'on va noter tel que Mais comme , alors et ainsi   La trace est une forme linéaire continue de donc il existe une constante telle que On a donc Ce qui montre que l'application est intégrable sur . Posons alors Soit un réel . Il existe un réel tel que et donc Ce qui implique que pour tout en dehors du compact , on a Sur le compact , l'application continue est bornée et atteint ses bornes. Comme elle ne s'annule pas sur , alors sa borne inférieure est strictement positive. D'où l'existence d'un réel tel que     "
},
{
  "id": "solutions-periodiques",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#solutions-periodiques",
  "type": "Exercice",
  "number": "1.4.7",
  "title": "Solutions périodiques d’une équation différentielle linéaire.",
  "body": "Solutions périodiques d'une équation différentielle linéaire On suppose que est un espace euclidien. On considère une équation différentielle linéaire homogène On suppose que pour tout , est un endomorphisme antisymétrique.  Montrer que si est une solution de , alors est constante.  Soit une solution sur de l'équation résolvante de : Montrer que s'il existe tel que soit inversible, alors pour tout , est une isométrie de .      Soit une solution de sur . La fonction est alors de classe sur et on a Donc est constante sur . Ce qui implique que la fonction est constante sur .  Posons pour tout , . La fonction est dérivable et Donc est une solution de . Soit maintenant une base de . Pour tout , on a et comme est inversible, alors est une base de . La famille est donc un système fondamental de solutions de . La famille est ainsi une base de pour tout . Ce qui implique que est inversible pour tout . Par ailleurs, pour tout fixé, il est immédiat que la fonction est une solution de . Donc pour tout , la fonction est une solution de . La fonction est donc constante. Pour , elle prend la valeur donc Ceci pour tout . Alors est une isométrie de pour tous .    "
},
{
  "id": "sec-eqdiff-exerises-approfondissement-9",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#sec-eqdiff-exerises-approfondissement-9",
  "type": "Exercice",
  "number": "1.4.8",
  "title": "Cas où les endomorphismes <span class=\"process-math\">\\(a(t)\\)<\/span> sont antisymétriques.",
  "body": "Cas où les endomorphismes sont antisymétriques  On suppose que est un espace euclidien. On considère une edl homogène   On suppose que pour tout , est un endomorphisme antisymétrique.    Montrer que si est une solution de alors est constante.    Soit est une solution sur de l'équation dite résolvante de :   Montrer que s'il existe tel que soit inversible alors pour tout , est une isométrie de .       Soit une solution de sur . La fonction est alors de classe sur et on a   Donc est constante sur . Ce qui implique que la fonction est constante sur .    Posons pour tout , . La fonction est dérivable et   Donc est une solution de . Soit maintenant une base de . Pour tout on a et comme est inversible alors est une base de . La famille est donc un sfs de . La famille est ainsi une base de pour tout . Ce qui implique que est inversible pour tout .  Par ailleurs pour tout fixé, il est immédiat que la fonction est une solution de . Donc pour tout la fonction   est une solution de . La fonction est donc constante. Pour elle prend la valeur donc   Ceci pour tout . Alors est une isométrie de pour tous .    "
},
{
  "id": "sysdiff-solutions-periodiques",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#sysdiff-solutions-periodiques",
  "type": "Exercice",
  "number": "1.4.9",
  "title": "Solutions périodiques d’un système différentiel périodique.",
  "body": "Solutions périodiques d'un système différentiel périodique  Soient des applications continues et . On suppose que et sont -périodiques. On considère le système différentiel   et note son système homogène.    Soit une fonction réelle continue -périodique. Donner une cns pour que l' edls  admette des solutions -périodiques non nulle.    Soit une solution du système . Montrer que est -périodique si et seulement si .    On suppose que l'application est constante.    Montrer que admet une solution -périodique si et seulement si admet au moins une VAP  .    On suppose que est -périodique. Soit une solution de . Montrer que est -périodique si et seulement si   Montrer que si n'admet aucune solution périodique alors admet une unique solution -périodique.      On note l'application résolvante de . Montrer que     Montrer que admet une solution -périodique non nulle si et seulement si est une VAP de la matrice .    Soit . Montrer que admet une solution -périodique non nulle si et seulement si admet une VAP  telle que .    Montrer que si admet au moins une VAP  telle que et alors admet au moins une solution -périodique non constante.    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.       Les solutions de l'équation différentielle sont les fonctions où est une primitive de . Si alors est -périodique si et seulement si pour tout , , ce qui équivaut à   Puisque est -périodique, ceci équivaut à  Avec , l'équation n'aurait par exemple aucune solution -périodique non nulle bien que est -périodique.    Si est -périodique alors .  Réciproquement supposons que et considérons . Pour tout on a   donc est une solution de . En outre on a donc selon le théorème de Cauchy-Lipschitz, . Ce qui signifie que est -périodique.      Soit une solution non nulle de . On a alors pour tout . La fonction constante est -périodique donc selon la question précédente est -périodique si et seulement si . Ce qui équivaut à   Comme est non nulle alors et donc est -périodique si et seulement si est une VAP de et .  D'après l'exercice , les VAP de sont les nombres de la forme où est une VAP de donc est une VAP de si et seulement s'il existe tel que . Ce qui équivaut à .    est une solution de l'équation complète. Son expression intégrale est   Elle est -périodique si et seulement si , ce qui équivaut à   Supposons que n'a aucune solution périodique. Selon la question précédente n'est pas une VAP de et donc de son inverse . La matrice est alors inversible et il existe donc un vecteur unique tel que   L'unique solution de qui est alors -périodique est celle qui vérifie la condition initiale .  Si admet des solutions -périodiques alors est une VAP de . L'existence de vecteurs qui vérifient dépend alors de la condition   Si cette condition se réalise alors une solution de sera -périodique si et seulement si   où est une solution quelconque de l'équation .      Considérons l'équation résolvante de :   et rappelons que pour un fixé la fonction est l'unique solution de qui vérifie .  Fixons maintenant et considérons la fonction .   Donc est une solution de et elle vérifie . Alors par définition de   ceci pour tout .  Ensuite pour tout , on a selon les résultats de l'exercice et la relation précédente   est donc semblable à .    Considérons une solution non nulle de . Alors pour tout on a . est -périodique si et seulement si ou encore   Sachant que , ceci équivaut à ce que soit une VAP de et que . Ainsi admet des solutions non nulles -périodiques si et seulement si est une VAP de et dans ce cas ces solutions sont les fonctions où .    est -périodique donc elle est -périodique. La question précédente implique que admet une solution -périodique non nulle si et seulement si est une VAP de . En s'appuyant sur les propriétés de on s'aperçoit par ailleurs que pour tout   Et donc pour tout . D'après l'exercice  est donc une VAP de si et seulement s'il existe une VAP  de telle que . Dans ce cas ces solutions sont les fonctions où est un vecteur non nul quelconque de .    Soit . Puisque alors la fonction est une solution -périodique non nulle de . Supposons qu'elle est constante. On aura alors . Le vecteur serait donc associé à , ce qui est contradictoire puisqu'on a supposé que .    On suppose que est l'application -périodique :   Montrer que   En déduire que admet des solutions -périodiques non constantes.    "
},
{
  "id": "sec-eqdiff-exerises-approfondissement-11",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#sec-eqdiff-exerises-approfondissement-11",
  "type": "Exercice",
  "number": "1.4.10",
  "title": "Équations différentielles linéaires scalaires à coefficients constants.",
  "body": "Équations différentielles linéaires scalaires à coefficients constants Dans cet exercice, on résume les connaissances de base sur la résolution d'une équation différentielle linéaire scalaire à coefficients constants. Soit . On note l'opérateur de dérivation de et pour tout , l'endomorphisme de défini par On considère dans la suite un polynôme non constant .   Montrer que pour tout ,     Montrer que pour tous et ,     Décrire les solutions de l'EDLS :     Soit . Montrer que induit un endomorphisme inversible sur si et seulement si .    Soient et . Montrer que l'EDLS   admet une solution unique de la forme où est un polynôme de même degré que et est la multiplicité de en tant que racine de (avec si n'est pas une racine de ). Décrire les solutions de .   "
},
{
  "id": "act-eqdse",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#act-eqdse",
  "type": "Exercice",
  "number": "1.4.11",
  "title": "solutions DSE d’une EDLS normalisable.",
  "body": "solutions DSE d'une EDLS normalisable  On considère une EDLS normalisée d'ordre  et on suppose que et sont DSE en sur un intervalle : On considère une fonction  DSE en qu'on écrit sous la forme .   Montrer que si est une solution de alors    En injectant l'expression dans l'équation on obtient   Cette relation implique que la suite est entièrement déterminée par ses deux premiers termes et . L'ensemble de ces suites est un -ev de dimension .   De quoi on déduit que    Réciproquement, soit une suite non nulle qui vérifie la relation . On considère et tels que et pour tout . On pose et    Montrer que , pour tout .    Montrer que .    En déduire que a un RC  .     L'existence de tel que et découle du fait que est plue petit que les rayons de convergence des séries entières et .  Ensuite la relation précédente sur les termes implique que pour tout     Une récurrence évidente établit donc que pour tout .  le rôle du terme dans la définition de deviendra claire dans la suite.    Simplifions l'écriture de . Pour tout  C'est l'ajout du terme dans la définition de qui a permis l'obtention d'une relation aussi simple entre et .     La suite est non nulle donc est non nulle, et comme alors pour tout dès que pour un certain . Par suite La série entière a donc un RC qui vaut . Notons le RC de . Comme alors pour tout . Donc .     Montrer que pour tous , il existe une unique solution de  DSE sur telle que et .   En compilant les résultats de la question précédente, on voit que est une solution de sur si et seulement si la suite vérifie la relation .  Reformulons : si les fonctions et sont continues sur un intervalle et sont DSE en sur alors toutes les solutions de sur sont DSE en sur .  La suite elle même est entièrement déterminée par les termes et . Comme et alors pour tout il existe une unique solution de  DSE en telle que et .  "
},
{
  "id": "act-eqdsen",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#act-eqdsen",
  "type": "Exercice",
  "number": "1.4.12",
  "title": "Solutions pseudo-DSE d’une EDLS non normalisable.",
  "body": "Solutions pseudo-DSE d'une EDLS non normalisable  On considère une edls homogène d'ordre 2 de la forme   et on suppose que les fonctions et sont dse en sur un intervalle :   On cherche les solutions de qui se prolongent sur sous la forme   où et qui reste à déterminer. On note le rc de .    Montrer que si induit une solution de sur alors    où est le polynôme donné par .    Réciproquement soit la racine de qui a la plus grande partie réelle. On suppose que la suite vérifie la relation de récurrence .  Montrer que et que induit une solution de sur .    Étudier la possibilité de prolonger en une solution de sur .       Supposons que soit une solution de sur .  est continue sur si , mais Il faudra que pour qu'elle soit deux fois dérivable sur .  On peut dériver terme à terme la somme de la série de fonctions pour les mêmes raisons que pour une série entière, à savoir une cvu sur tout segment de de cette série et de ses séries dérivées.  En remplaçant par dans , on obtient   Maintenant en multipliant par on fait apparaitre la somme d'une série entière nulle. Ces coefficients sont donc tous nuls.   Sachant qu'on a supposé que , on peut donc écrire  Soit est une racine de . Si pour tout alors la suite est bien définie et elle est entièrement déterminée par son premier terme .    Soit la racine de ayant la plus grande partie réelle. Alors pour tout , on ne peut avoir et donc les relations définissent complètement la suite à partir de son premier terme . Il reste à justifier que le rc  de la série entière vérifie . Pour cela, comme dans l'exercice précédent, en prenant et tel que et pour tout , on a   En introduisant maintenant la suite définie par et   On aura pour tout   Ici donc la relation implique que pour tout . Par suite pour tout réel   est unitaire de degré donc et donc   La série entière a donc pour rc  . Comme par construction alors , ceci pour tout . Ainsi .  La fonction est donc bien définie et de classe sur . La suite vérifiant la relation , la fonction induit une solution sur de .  La condition imposée à la racine de n'a servi qu'à assurer que pour tout . Si les deux racines et de sont distinctes et vérifient alors cette dernière condition est remplie à la fois pour et pour . Ce qui permet de déterminer deux solutions linéairement indépendantes de sur .  Si les nombres et sont réels alors le polynôme est à coefficients réels. S'il admet deux racines complexes non réelles et alors est imaginaire pure et ne peut donc être un élément de . En revenant aux équations , on peut observer que si est la suite associée à alors est la suite associée à . On obtient ainsi les deux solutions indépendantes de sur :     Par ailleurs en posant , les relations se traduisent par   La suite est donc unique et on a   La fonction ainsi introduite est de classe sur et vérifie . La fonction est donc deux fois dérivable en si et seulement c'est la cas de la fonction . Ce qui n'est possible que si ou .  ne dépend que de et .    "
},
{
  "id": "sec-eqdiff-exerises-approfondissement-14",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#sec-eqdiff-exerises-approfondissement-14",
  "type": "Exercice",
  "number": "1.4.13",
  "title": "Zéros des solutions d’une EDLS du second ordre.",
  "body": "Zéros des solutions d'une EDLS du second ordre  On considère une edls homogène normalisée     Montrer toute solution non nulle de admet au plus un nombre fini de zéros dans tout segment de . En déduire que l'ensemble de ces zéros dans est au plus dénombrable.    On suppose que est une solution non nulle de qui admet au moins deux zéros dans et on considère deux zéros successifs de . Montrer que toute solution de non colinéaire à admet exactement un zéro entre et .       Soit une solution non nulle de et considérons un segment . Supposons que admet une infinité de zéros dans . Il est alors possible de construire une suite injective formée de zéros de dans . Le segment étant un compact, cette suite aurait au moins une suite extraite qui converge. Notons cette sous-suite et sa limite.  On a pour tout et est continue donc . Ensuite, la suite étant injective, au plus un terme peut prendre la valeurs , il existe donc un rang à partir duquel . On a alors   et donc . Pour résumer, est une solution de et il existe tel que et . La fonction nulle étant une solution de qui vérifie aussi ces conditions on a donc . Ce qui contredit l'hypothèse faite sur .  Ce résultat permet de justifier que si est un zéro de alors il existe un segment de tel que pour tout . On dit que les zéros de sont isolés. De plus si admet au moins un zéro , alors il existe un zéro de tel que ne contienne aucun zéro de . On dira que les zéros et de sont successifs.  Ensuite, tout intervalle de peut être écrit comme une réunion dénombrable de segments, donc l'ensemble des zéros de dans est au plus dénombrable.    Soit une solution de non colinéaire à . La famille est donc un sfs de . Son wronksien garde un signe constant sur . Quitte à remplacer par on peut supposer que partout sur . On a alors   Par ailleurs ne s'annule pas sur donc elle y garde un signe constant donc les fonctions et ont des signes contraires dans . Leurs limites respectives en et en sont et donc et ont des signes contraires. Les inégalités montrent alors que . Selon le tvi , admet au moins un zéro dans . Ce zéro ne peut être qu'unique car sinon selon cette même propriété qu'on vient de démontrer, aurait au moins un zéro entre et .  Une conséquence de ce résultat et que si admet une solution non nulle qui admet une infinité de zéros dans alors toutes les solutions de ont une infinité de zéros. Deux solutions non nulles ont les mêmes zéros si elles sont colinéaires, des zéros entrelacés sinon.    "
},
{
  "id": "solutions-periodiques-scalar-2nd",
  "level": "2",
  "url": "sec-eqdiff-exerises-approfondissement.html#solutions-periodiques-scalar-2nd",
  "type": "Exercice",
  "number": "1.4.14",
  "title": "Solurions périodiques d’une EDLS du second ordre.",
  "body": "Solurions périodiques d'une EDLS du second ordre  Soit une fonction continue -périodique sur . On considère l'équation   Soit le sfs canonique de en . On note son wronksien.    Montrer que .    Montrer que admet au moins une solution -périodique non nulle si et seulement si .    Montrer que admet au moins une solution non nulle telle que si et seulement si .       Puisque l'équation est normale tous ses wronksiens sont constants ( ). Les solutions et sont définies par les conditions et donc leurs wronksien vérifie . Alors .    Soit une solution de . Posons   On considère la fonction . Puisque est -périodique alors est aussi une solution de . Elle est égale à si et seulement si et . Ce qui équivaut à et . Ainsi admet une solution -périodique non nulle si et seulement si le système linéaire d'inconnues et   admet au moins une solution non nulle. Ce qui équivaut à dire que le déterminant de ce système est nul. Comme   alors admet au moins une solution -périodique non nulle si et seulement si . Dans ce cas toute solution de qui vérifie et où est une solution de est -péridodique.  Pour faire le lien avec les résultats déjà démontrés en exercice concernant les solutions périodique d'un système différentiel linéaire du premier ordre observons que :    La condition donnée équivaut à ce que soit une VAP de la matrice    Si alors l'application est l'unique solution de l' edl  telle que .      Une solution non nulle de vérifiera si et seulement si et . En posant , ces conditions équivalent à   Ce qui équivaut cette fois à .    "
},
{
  "id": "eqdiff-5-3",
  "level": "1",
  "url": "eqdiff-5-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "Équation et applications résolvantes",
  "body": " Équation et applications résolvantes    et sont des applications continues définies sur à valeurs respectivement dans et dans . On considère les équations différentielles     Les résultats de cette section sont traités dans les exercices et .    Équation résolvante de   On appelle équation résolvante de , l'équation différentielle linéaire homogène du premier ordre   l'inconnue étant une fonction dérivable de dans .    Espace des solutions de  s'écrit sous la forme , où est l'application continue de dans définie par pour tout et . .   Transfert de solutions  Si est une solution de sur alors   pour tout , est une solution de sur .  pour tout , est une solution de sur .    Conservation du rang  Si est une solution de sur alors le rang de est le même pour tout . En particulier s'il existe tel que est inversible alors est inversible pour tout . On dit alors que est une solution fondamentale de l'équation résolvante .   Solutions de et en fonction d'une solution fondamentale  Si une solution fondamentale de , alors   les solutions de sont les fonctions où .  les solutions de sont les fonctions où .   Les solutions de et celles de peuvent donc toutes s'exprimer à l'aide d'une seule solution de . Mais ce constat est à peu près inutile quand il s'agit de résoudre effectivement . Il est beaucoup moins évident de déterminer une solution de que de déterminer directement des solutions de .  Si est une base de alors les fonctions forment un système fondamental de solutions de . Leurs wronksien dans la base est la fonction .  d'où le titre de solution fondamentale attribué à ce genre d'application.   Expression des solutions avec conditions initiales  Si et est l'unique solution de telle que alors   pour toute solution de : .  pour toute solution de : .       Application résolvante de   Définition de l'application résolvante  On appelle application résolvante de l'équation homogène , l'application définie par   où est l'unique solution de vérifiant . Précisons :   pour tout , donne la position dans à l'instant de la solution de qui est passée, ou passera, par à l'instant .  si on fixe , l'application donne l'évolution au cours du temps de la solution de qui est passé, ou passera, par à l'instant .  si on fixe , l'application est le flot à l'instant de toutes les solutions qui sont passées, ou passeront par à l'instant .    Une application pour les exprimer toutes  Soit   Pour tout , l'unique solution de telle que est donnée par , soit .  pour tout , l'unique solution de telle que est donnée par , soit .    Les propriétés de la résolvante   pour tout , est un endomorphisme inversible de .  pour tout , . En particulier .  est de classe sur et pour tout      Expression de la résolvante en fonction des solutions fondamentales  Pour toute solution fondamentale de l'équation on a       Résolvante et équation complète   Variation des constantes  Sachant que les solutions de sont les fonctions où est un vecteur quelconque de , la méthode de la variation des constantes revient donc à faire varier le vecteur . On pose donc . Alors Ce qui permet en théorie de calculer et donc .   Formule de Duhammel  Soit . L'unique solution de vérifiant la condition initiale est donnée par la formule dite de Duhammel :   Dans cette expression de , l'intégrale représente une solution particulière de l'équation , la solution qui à l'instant passe par le vecteur nul. L'autre partie est la solution de l'équation homogène qui à l'instant passe par le point .      Résolvantes d'une équation à coefficients constants  On suppose ici que l'application est constante. L'équation résolvante de est    Les solutions de sont les fonctions où est un endomorphisme quelconque de . En particulier, l'application   est une solution fondamentale de . Celle qui prend la valeur en .   L'application résolvante de est donc donnée par       Solutions périodiques d'une EDL périodique  Voir et    "
},
{
  "id": "eqdiff-5-3-2",
  "level": "2",
  "url": "eqdiff-5-3.html#eqdiff-5-3-2",
  "type": "Conventions et notations",
  "number": "42",
  "title": "",
  "body": "  et sont des applications continues définies sur à valeurs respectivement dans et dans . On considère les équations différentielles   "
},
{
  "id": "eqdiff-5-3-3",
  "level": "2",
  "url": "eqdiff-5-3.html#eqdiff-5-3-3",
  "type": "Remarque",
  "number": "43",
  "title": "",
  "body": " Les résultats de cette section sont traités dans les exercices et .  "
},
{
  "id": "eqdiff-5-3-4-2",
  "level": "2",
  "url": "eqdiff-5-3.html#eqdiff-5-3-4-2",
  "type": "Vocabulaire",
  "number": "44",
  "title": "",
  "body": " On appelle équation résolvante de , l'équation différentielle linéaire homogène du premier ordre   l'inconnue étant une fonction dérivable de dans .  "
},
{
  "id": "eqdiff-5-4",
  "level": "1",
  "url": "eqdiff-5-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Thèmes sur les équations scalaires du deuxième ordre",
  "body": " Thèmes sur les équations scalaires du deuxième ordre   Dans tout cette section, on se donne une EDLS d'ordre  et son équation homogène qu'on suppose normalisables sur l'intervalle , sauf mention explicite du contraire,   On suppose en outre que l'intervalle est ouvert.    Solutions développables en séries entières  Commençons par quelque résultats sur la possibilité que l'équation homogène admette des solutions qui sont développables en séries entières au voisinage de . Si de telles solutions existent alors elles peuvent contribuer à résoudre complétement l'équation .  On suppose que . On peut démontrer les deux résultats fondamentaux suivants :  Cas d'une équation normalisée   On suppose que l'équation est normalisée et que les fonctions et sont développables en séries entières en sur un intervalle . Alors toutes les solutions de sur sont développables en séries entières en sur .    Voir exercice      Cas d'une équation non normalisable   Dans le cas où n'est pas normalisable en , si on peut la ramener à une équation de la forme   où et sont développables en séries entières en sur un intervalle , alors admet au moins une solution sur de la forme   où est une série entière de rayon de convergence et est une racine du polynôme   La fonction est dite une solution de Frobenius de et est dit polynôme initialisateur de .    Voir exercice .      Transformation de l'équation homogène  Tout au long du chapitre précédent, on a utilisé, de façon éparpillée, quelques idées simples pour transformer une EDLS du second ordre. Le but ici est de les rassembler.   Transformations de type  Soit une fonction de classe qui ne s'annule pas sur . En posant , alors est équivalente à l'équation   On en a dégagé deux applications intéressantes :    La méthode de Lagrange :  Si est une solution de qui ne s'annule pas sur , alors équivaut à l' EDLS d'ordre en   Cette méthode permet de résoudre complètement l'équation par calcul de primitives.    Forme normale de :  Si est une solution non nulle de l'équation , alors on obtient la forme normale de : avec .      Forme exacte, équation adjointe  On suppose que est de classe et est de classe sur .    Transformation en une forme exacte  On dit que admet une forme exacte sur s'il existe une fonction de classe  ne s'annulant pas sur  et une fonction de classe telles que soit équivalente à   où est une fonction continue sur . Si et existent, l'équation est dite une forme exacte de sur .  Une équation exacte peut être résolue par calcul de primitives. Il est donc prévisible que s'y ramener fasse intervenir d'autres équations qu'on ne peut résoudre complètement. En l'occurrence, l'équation ci-dessus.    Existence d'une forme exacte, équation adjointe de  L'équation admet une forme exacte sur si l' EDLS homogène   admet au moins une solution qui ne s'annule pas sur . Les fonctions , et sont alors données par les relations   L'équation est dite équation adjointe de . Une solution de l'équation adjointe qui ne s'annule pas sur est dite un facteur intégrant de l'équation sur . Si on connaît une telle fonction, on peut effectivement résoudre complètement l'équation par calcul de primitives.   Supposons pour l'instant que les fonctions et existent, on aura   D'un autre côté, si est une fonction de classe qui ne s'annule pas sur , alors   Il suffit donc de déterminer des fonctions , et telles que   Une condition nécessaire pour que de telles fonctions existent est que :   La fonction devrait donc être une solution de l' EDLS homogène d'ordre :   Maintenant si admet une solution qui ne s'annule pas sur , il suffit selon les relations ci-dessus de poser , et pour que soit équivalente à l'équation .       L'équation adjointe  On rappelle l'écriture de et de son équation adjointe :   On vérifie que :    L'équation adjointe de est .    Les équations et sont équivalentes si et seulement si . Ce qui ramène l'équation à   D'où le titre d'équation auto-adjointe donné à ce genre d'équations.   Lien entre solutions de et celles de son équation adjointe  Les solutions de sont de la forme où est une solution quelconque de et est l'une des solutions non nulles de l' EDLS homogène d'ordre :   Ce qui implique que si on peut résoudre , alors on peut le faire pour et vice versa.   Fixons une fonction non nulle telle que et considérons une fonction de classe sur . Posons . Alors    En multipliant par , elle équivaut à l'équation auto-adjointe        Problèmes aux limites  Soient deux éléments de . On se donne deux scalaires et et deux formes linéaires et définies sur par   où et sont deux éléments donnés non colinéaires de .  Le système d'équations   est dit un problème aux limites de en et . Il peut avoir l'une des formes particulières suivantes :    Problème aux limites de première espèce :     Problème aux limites de deuxième espèce :     Problème aux limites périodique :     Problème de Sturm-Liouville :     Contrairement aux problèmes de Cauchy, un problème aux limites peut avoir plusieurs solutions comme n'en avoir aucune.   CNS d'existence et d'unicité  Considérons un système fondamental de solutions de . Alors le problème aux limites admet une solution unique si et seulement si    Soit une solution particulière de et posons . On a alors   Ce dernier système d'équations, d'inconnues et , admet une solution unique si et seulement si .      Zéros des solutions d'une EDLS homogène du second ordre   Ce thème sera traité de façon assez exhaustive vu son intérêt. Il concerne la distribution des zéros des solutions d'une EDLS homogène d'ordre .    Le cas général   Zéros communs    Deux solutions de qui ont un zéro en commun sont nécessairement colinéaires.    Si et sont deux solutions de sur qui ont un zéro en commun et est leur wronksien, alors et donc et sont colinéaires.      Répartition des zéros des solutions de dans le cas général    Soit une solution non nulle de sur . Alors elle admet au plus un nombre fini de zéros dans chaque segment de .    Soit un segment . Supposons par l'absurde que admet une infinité de zéros dans et considérons une suite injective dont tous les termes sont des zéros de dans . étant un segment, admet une suite extraite qui converge, on peut donc supposer que elle-même converge. Soit sa limite. Puisque pour tout , alors par continuité de on a . Ensuite   Par unicité de la solution de telle que et , la fonction serait donc nulle sur . Ce qui contredit l'hypothèse faite sur .  Alors admet au plus un nombre fini de zéros dans .     Théorème de  Théorème principal   de séparation de Sturm   Soient et deux solutions non colinéaires de sur . On suppose que admet au moins deux zéros dans . Pour tout couple de zéros successifs de dans , il y a exactement un zéro de entre et .    Les zéros et étant successifs, ne s'annule pas sur l'intervalle . Elle y garde donc un signe constant. Quitte à remplacer par , on peut supposer que pour tout . Par ailleurs, ne peut s'annuler en ou en car sinon serait partout nulle donc   Soit le wronksien de et . On a   Comme ne s'annule pas sur , elle y garde un signe constant et donc . D'après le TVI , admet au moins un zéro dans . Ce zéro est nécessairement unique car sinon, le résultat qu'on vient de démontrer impliquera l'existence d'un zéro de dans .    On en déduit que si admet une solution non nulle qui admet une infinité de zéros dans alors c'est le cas pour toutes les solutions de .     Cas d'une équation normale    On considère dans la suite deux EDLS homogènes normales sur      Cas où la fonction est négative   Si sur et n'est identiquement nulle sur aucun segment de , alors toute solution non nulle de admet au plus un zéro dans .    Soit une solution non nulle de et supposons qu'elle admet au moins deux zéros dans . Soient et deux zéros consécutifs de . Si par exemple sur , alors et n'est partout nulle sur aucun un segment de . La fonction est donc strictement croissante sur . C'est impossible car on a forcément et .     Cas où la fonction est positive non intégrable    On suppose que l'intervalle est non majoré et que sur et n'est identiquement nulle sur aucun segment de . Soit . Si n'est pas intégrable sur , alors toute solution de admet une infinité de zéros dans .     Soit une solution non nulle de . Supposons que admet un nombre fini de zéros dans . Il existe donc tel que sur . Quitte à remplacer par , on peut supposer que sur .  Comme , alors est concave sur et donc pour tout , on a   Et on voit ainsi qu'il suffit qu'il existe tel que pour avoir , contredisant ainsi la stricte positivité de sur .  Introduisons maintenant la fonction définie pour tout par   est de classe sur et pour tout   Par suite   est positive non intégrable sur donc . Il existe donc tel que sur . On en déduit que sur tout entier. Ce qui achève la démonstration.      Théorème de comparaison de Sturm   On suppose que et n'est partout nulle sur aucun segment de . On suppose que admet une solution qui admet au moins deux zéros dans . Alors toute solution de admet au moins un zéro entre chaque deux zéros consécutifs de .    Soient deux zéros successifs de dans . Soit une solution de sur . Soit le wronksien croisé de et . Alors   Comme et , en intégrant cette relation entre et on obtient   Comme pour le résultat précédent, on peut supposer que sur , ce qui implique en outre que et . En analysant les signes des deux membres de l'égalité précédente on voit que ne peut garder un signe constant sur . Elle admet donc au moins un zéro dans .    On en déduit que si admet une solution non nulle qui possède une infinité de zéros dans alors c'est le cas de toutes les solutions de .   Un exemple intéressant   Soit . Considérons l' EDLS d'ordre à coefficients constants   Transformons la en une équation de Cauchy-Euler sur ( ) :   Et ramenons-nous à la forme normale de celle-ci sur ( ) :   ou encore, en posant ,   Au final on aurait effectué le changement mixte .  On en déduit les résultats suivants :    Si , les solutions de ont toutes une infinité de zéros dans .    Si , toute solution non nulle de admet au plus un zéro dans .      Toute solution de sur s'écrit sous la forme où est une solution de . Les zéros de dans sont donc les réels où est un zéro de dans .  Les solutions de sont de la forme si , si et si . D'où le résultat.     Cet exemple montre en particulier que l'hypothèse de non intégrabilité de dans n'est pas nécessaire pour que les solutions de l'équation normale admettent chacune une infinité de zéros.  Grâce au théorème de comparaison de Sturm, on en déduit aussi que si est non majoré alors    si au voisinage de , alors les solutions non nulles de ont chacune au plus un zéro dans .    s'il existe tel que au voisinage de , alors les solutions de ont chacune une infinité de zéros dans .       Cas d'une équation auto-adjointe et déductions sur le cas général   Supposons que l'équation est normalisée :   On la transforme en une équation normale en posant :   où est une solution de et . On la transforme aussi en une équation auto-adjointe :   où est une solution de et .  Si est une primitive de sur , on peut prendre   Puisque , alors les zéros de sont exactement ceux de et on pourrait donc exploiter les résultats énoncés pour les équations normales pour étudier les zéros des solutions de . L'inconvénient est que les propriétés de la fonction , son signe surtout, ne sont pas facilement déductibles de celles de et de . Par contre et ont les mêmes solutions, la fonction est strictement positive et la fonction a partout le même signe que la fonction . Avoir des résultats spécifiques aux équations auto-adjointes présente donc un avantage certain.    Théorème de Leighton   Soit . On suppose que est non majoré, que est positive non intégrable sur et que est non intégrable sur . Alors toutes les solutions de ont une infinité de zéros dans .  C'est une généralisation du théorème     Soit une solution de . Supposons par l'absurde qu'elle admet un nombre fini de zéros dans . Il existe alors tel que ne s'annule pas sur et on peut supposer que sur .  Comme pour le théorème on introduit la fonction , sur , définie par :   On a alors   Par suite   Puisque est non intégrable sur , alors et donc il existe tel que   Une situation à la Gromwall donc.  Si on pose maintenant , alors est une fonction strictement positive et on a pour tout :   et donc   par suite   Ce qui est impossible car cela impliquerait que la fonction est intégrable sur et donc sur . Ainsi admet une infinité de zéros dans .     On peut alléger les conditions sur en supposant que seulement, sans aucune obligation sur son signe.  et où est une primitive de sur . Les hypothèses du théorème sont donc immédiatement vérifiables sur les coefficients et de l'équation originale .      Solutions périodique d'une EDLS du second ordre périodique  Voir    "
},
{
  "id": "eqdiff-5-4-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-2",
  "type": "Conventions et notations",
  "number": "45",
  "title": "",
  "body": " Dans tout cette section, on se donne une EDLS d'ordre  et son équation homogène qu'on suppose normalisables sur l'intervalle , sauf mention explicite du contraire,   On suppose en outre que l'intervalle est ouvert.  "
},
{
  "id": "eqdiff-5-4-3-4",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-3-4",
  "type": "Théorème",
  "number": "46",
  "title": "Cas d’une équation normalisée.",
  "body": "Cas d'une équation normalisée   On suppose que l'équation est normalisée et que les fonctions et sont développables en séries entières en sur un intervalle . Alors toutes les solutions de sur sont développables en séries entières en sur .    Voir exercice    "
},
{
  "id": "eqdiff-5-4-3-5",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-3-5",
  "type": "Théorème",
  "number": "47",
  "title": "Cas d’une équation non normalisable.",
  "body": " Cas d'une équation non normalisable   Dans le cas où n'est pas normalisable en , si on peut la ramener à une équation de la forme   où et sont développables en séries entières en sur un intervalle , alors admet au moins une solution sur de la forme   où est une série entière de rayon de convergence et est une racine du polynôme   La fonction est dite une solution de Frobenius de et est dit polynôme initialisateur de .    Voir exercice .   "
},
{
  "id": "eqdiff-5-4-4-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-4-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "eqdiff-5-4-4-3-5-1-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-4-3-5-1-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "eqdiff-5-4-4-4-3-2-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-4-4-3-2-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "eqdiff-5-4-4-4-3-2-7",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-4-4-3-2-7",
  "type": "Démonstration",
  "number": "2.1",
  "title": "",
  "body": " Supposons pour l'instant que les fonctions et existent, on aura   D'un autre côté, si est une fonction de classe qui ne s'annule pas sur , alors   Il suffit donc de déterminer des fonctions , et telles que   Une condition nécessaire pour que de telles fonctions existent est que :   La fonction devrait donc être une solution de l' EDLS homogène d'ordre :   Maintenant si admet une solution qui ne s'annule pas sur , il suffit selon les relations ci-dessus de poser , et pour que soit équivalente à l'équation .  "
},
{
  "id": "eqdiff-5-4-4-5-5-3-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-4-5-5-3-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "eqdiff-5-4-4-5-5-3-5",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-4-5-5-3-5",
  "type": "Démonstration",
  "number": "3.1",
  "title": "",
  "body": " Fixons une fonction non nulle telle que et considérons une fonction de classe sur . Posons . Alors   "
},
{
  "id": "eqdiff-5-4-5-10",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-5-10",
  "type": "Proposition",
  "number": "48",
  "title": "CNS d’existence et d’unicité.",
  "body": " CNS d'existence et d'unicité  Considérons un système fondamental de solutions de . Alors le problème aux limites admet une solution unique si et seulement si    Soit une solution particulière de et posons . On a alors   Ce dernier système d'équations, d'inconnues et , admet une solution unique si et seulement si .   "
},
{
  "id": "eqdiff-5-4-6-2-1",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-6-2-1",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "eqdiff-5-4-6-3-2-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-6-3-2-2",
  "type": "Proposition",
  "number": "49",
  "title": "",
  "body": "  Deux solutions de qui ont un zéro en commun sont nécessairement colinéaires.    Si et sont deux solutions de sur qui ont un zéro en commun et est leur wronksien, alors et donc et sont colinéaires.   "
},
{
  "id": "prop-",
  "level": "2",
  "url": "eqdiff-5-4.html#prop-",
  "type": "Proposition",
  "number": "50",
  "title": "",
  "body": "  Soit une solution non nulle de sur . Alors elle admet au plus un nombre fini de zéros dans chaque segment de .    Soit un segment . Supposons par l'absurde que admet une infinité de zéros dans et considérons une suite injective dont tous les termes sont des zéros de dans . étant un segment, admet une suite extraite qui converge, on peut donc supposer que elle-même converge. Soit sa limite. Puisque pour tout , alors par continuité de on a . Ensuite   Par unicité de la solution de telle que et , la fonction serait donc nulle sur . Ce qui contredit l'hypothèse faite sur .  Alors admet au plus un nombre fini de zéros dans .   "
},
{
  "id": "eqdiff-5-4-6-3-4-2",
  "level": "2",
  "url": "eqdiff-5-4.html#eqdiff-5-4-6-3-4-2",
  "type": "Théorème",
  "number": "51",
  "title": "de séparation de Sturm.",
  "body": " de séparation de Sturm   Soient et deux solutions non colinéaires de sur . On suppose que admet au moins deux zéros dans . Pour tout couple de zéros successifs de dans , il y a exactement un zéro de entre et .    Les zéros et étant successifs, ne s'annule pas sur l'intervalle . Elle y garde donc un signe constant. Quitte à remplacer par , on peut supposer que pour tout . Par ailleurs, ne peut s'annuler en ou en car sinon serait partout nulle donc   Soit le wronksien de et . On a   Comme ne s'annule pas sur , elle y garde un signe constant et donc . D'après le TVI , admet au moins un zéro dans . Ce zéro est nécessairement unique car sinon, le résultat qu'on vient de démontrer impliquera l'existence d'un zéro de dans .   "
},
{
  "id": "subsubsec-equations-normales-2-1",
  "level": "2",
  "url": "eqdiff-5-4.html#subsubsec-equations-normales-2-1",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "EDLS "
},
{
  "id": "prop-qneg",
  "level": "2",
  "url": "eqdiff-5-4.html#prop-qneg",
  "type": "Proposition",
  "number": "52",
  "title": "Cas où la fonction <span class=\"process-math\">\\(q\\)<\/span> est négative.",
  "body": " Cas où la fonction est négative   Si sur et n'est identiquement nulle sur aucun segment de , alors toute solution non nulle de admet au plus un zéro dans .    Soit une solution non nulle de et supposons qu'elle admet au moins deux zéros dans . Soient et deux zéros consécutifs de . Si par exemple sur , alors et n'est partout nulle sur aucun un segment de . La fonction est donc strictement croissante sur . C'est impossible car on a forcément et .   "
},
{
  "id": "prop-qpos",
  "level": "2",
  "url": "eqdiff-5-4.html#prop-qpos",
  "type": "Proposition",
  "number": "53",
  "title": "Cas où la fonction <span class=\"process-math\">\\(p\\)<\/span> est positive non intégrable.",
  "body": " Cas où la fonction est positive non intégrable    On suppose que l'intervalle est non majoré et que sur et n'est identiquement nulle sur aucun segment de . Soit . Si n'est pas intégrable sur , alors toute solution de admet une infinité de zéros dans .     Soit une solution non nulle de . Supposons que admet un nombre fini de zéros dans . Il existe donc tel que sur . Quitte à remplacer par , on peut supposer que sur .  Comme , alors est concave sur et donc pour tout , on a   Et on voit ainsi qu'il suffit qu'il existe tel que pour avoir , contredisant ainsi la stricte positivité de sur .  Introduisons maintenant la fonction définie pour tout par   est de classe sur et pour tout   Par suite   est positive non intégrable sur donc . Il existe donc tel que sur . On en déduit que sur tout entier. Ce qui achève la démonstration.   "
},
{
  "id": "subsubsec-equations-normales-5",
  "level": "2",
  "url": "eqdiff-5-4.html#subsubsec-equations-normales-5",
  "type": "Théorème",
  "number": "54",
  "title": "Théorème de comparaison de Sturm.",
  "body": " Théorème de comparaison de Sturm   On suppose que et n'est partout nulle sur aucun segment de . On suppose que admet une solution qui admet au moins deux zéros dans . Alors toute solution de admet au moins un zéro entre chaque deux zéros consécutifs de .    Soient deux zéros successifs de dans . Soit une solution de sur . Soit le wronksien croisé de et . Alors   Comme et , en intégrant cette relation entre et on obtient   Comme pour le résultat précédent, on peut supposer que sur , ce qui implique en outre que et . En analysant les signes des deux membres de l'égalité précédente on voit que ne peut garder un signe constant sur . Elle admet donc au moins un zéro dans .   "
},
{
  "id": "subsubsec-equations-normales-7",
  "level": "2",
  "url": "eqdiff-5-4.html#subsubsec-equations-normales-7",
  "type": "Exemple",
  "number": "55",
  "title": "Un exemple intéressant.",
  "body": " Un exemple intéressant   Soit . Considérons l' EDLS d'ordre à coefficients constants   Transformons la en une équation de Cauchy-Euler sur ( ) :   Et ramenons-nous à la forme normale de celle-ci sur ( ) :   ou encore, en posant ,   Au final on aurait effectué le changement mixte .  On en déduit les résultats suivants :    Si , les solutions de ont toutes une infinité de zéros dans .    Si , toute solution non nulle de admet au plus un zéro dans .      Toute solution de sur s'écrit sous la forme où est une solution de . Les zéros de dans sont donc les réels où est un zéro de dans .  Les solutions de sont de la forme si , si et si . D'où le résultat.   "
},
{
  "id": "subsubsec-equations-normales-8",
  "level": "2",
  "url": "eqdiff-5-4.html#subsubsec-equations-normales-8",
  "type": "Remarque",
  "number": "56",
  "title": "",
  "body": " Cet exemple montre en particulier que l'hypothèse de non intégrabilité de dans n'est pas nécessaire pour que les solutions de l'équation normale admettent chacune une infinité de zéros.  Grâce au théorème de comparaison de Sturm, on en déduit aussi que si est non majoré alors    si au voisinage de , alors les solutions non nulles de ont chacune au plus un zéro dans .    s'il existe tel que au voisinage de , alors les solutions de ont chacune une infinité de zéros dans .    "
},
{
  "id": "thm-leigh",
  "level": "2",
  "url": "eqdiff-5-4.html#thm-leigh",
  "type": "Théorème",
  "number": "57",
  "title": "Théorème de Leighton.",
  "body": " Théorème de Leighton   Soit . On suppose que est non majoré, que est positive non intégrable sur et que est non intégrable sur . Alors toutes les solutions de ont une infinité de zéros dans .  C'est une généralisation du théorème     Soit une solution de . Supposons par l'absurde qu'elle admet un nombre fini de zéros dans . Il existe alors tel que ne s'annule pas sur et on peut supposer que sur .  Comme pour le théorème on introduit la fonction , sur , définie par :   On a alors   Par suite   Puisque est non intégrable sur , alors et donc il existe tel que   Une situation à la Gromwall donc.  Si on pose maintenant , alors est une fonction strictement positive et on a pour tout :   et donc   par suite   Ce qui est impossible car cela impliquerait que la fonction est intégrable sur et donc sur . Ainsi admet une infinité de zéros dans .   "
},
{
  "id": "subsubsec--4",
  "level": "2",
  "url": "eqdiff-5-4.html#subsubsec--4",
  "type": "Remarque",
  "number": "58",
  "title": "",
  "body": " On peut alléger les conditions sur en supposant que seulement, sans aucune obligation sur son signe.  et où est une primitive de sur . Les hypothèses du théorème sont donc immédiatement vérifiables sur les coefficients et de l'équation originale .  "
},
{
  "id": "ch-eqdiff-exercices",
  "level": "1",
  "url": "ch-eqdiff-exercices.html",
  "type": "Chapitre",
  "number": "3",
  "title": "Exercices",
  "body": " Exercices   Déterminer les solutions développables en série entière de l'équation différentielle    Déterminer les solutions développables en série entière de l'équation différentielle .   Soit une suite réelle pour laquelle le rayon de convergence de la série entière est strictement positif. On note la somme de cette série entière sur . C’est une fonction indéfiniment dérivable et est solution, sur , de l’équation si et seulement si    et par unicité du développement en série entière cela équivaut à ce que pour tout , .  Conclusion est solution, sur , de l’équation si et seulement si pour tout , . Il reste à constater que le rayon de convergence de la série entière ainsi obtenue est égal à car .   On note la solution DSE qui vérifie et on pose   Étudier le sens de variation de et en déduire que possède une limite finie en .   On a donc, pour tout réel , .  La fonction est évidemment dérivable sur et pour tout réel ,   de sorte que est décroissante sur .  Comme elle est minorée par 0 sur , elle possède une limite finie en .   En déduire que est bornée sur et que .   Pour tout réel , ,  on peut en déduire que est bornée sur . De même,   donc .    Une propriété classique des zéros d’une solution d’une équation différentielle linéaire homogène du second ordre.  Soient intervalle de et . On considère l’équation   Soit une solution sur réelle et non identiquement nulle de .   On suppose qu’il existe deux réels tels que et . Démontrer que l’ensemble   est un ensemble fini.   Supposons au contraire que soit infini : il contient alors une suite formée de réels deux à deux distincts. Quitte à extraire une sous-suite convenable on peut supposer que converge vers .  En tenant compte de la continuité de , on voit que . De plus, par application du théorème de Rolle, pour tout , il existe tel que .  On en déduit que converge vers , puis par continuité de , on obtient .  Conclusion comme , le théorème de Cauchy-Lipschitz montre que est identiquement nulle sur , ce qui a été exclu. L’ensemble est donc fini.   En déduire que l’ensemble des zéros de est un ensemble au plus dénombrable.   On peut écrire comme l’union d’une suite de segments.  D’après la question précédente, l’ensemble est fini, par conséquent l’ensemble des zéros de est fini ou dénombrable.    Soient un réel strictement positif, telle que pour tout réel , . On considère l’équation différentielle   Soit une solution non identiquement nulle de .   Expliquer pourquoi on aura pour tout réel , .   D’après le théorème de Cauchy-Lipschitz, comme n’est pas identiquement nulle, pour tout réel , .   On admet qu’il existe alors deux fonctions et toutes deux de classe et telles que    Exprimer en fonction de et de .  En déduire que est une bijection de sur .  Conclure que possède une infinité de zéros.    On a donc et  d’où ,  de plus, ,  d’où le système d’équations   En résolvant à l’aide des formules de Cramer    Or , donc et de plus la fonction   est continue, -périodique et strictement positive.  On en déduit que .  Conclusion , donc est une bijection décroissante de sur .  De plus, pour tout réel ,   donc et donc .  Pour tout entier tel que , il existe un unique réel tel que . On a alors .  Conclusion possède une infinité de zéros dans .    Soient et tels que   Démontrer que toute solution de l’équation est bornée au voisinage de .  Indication : considérer la fonction .   Démontrer que toute solution de l’équation est bornée au voisinage de .   Comme indiqué, on considère la fonction .  Elle est de classe sur et   On en déduit que sur , donc est décroissante sur cet intervalle. Conclusion est majorée par sur donc est majorée par sur .    Soit une fonction continue et une fonction de classe telle que   On suppose qu’il existe deux réels tels que . Démontrer que .  Indication : si n’est pas la fonction nulle, on utilisera l’exercice 7.2 p. 458 pour se ramener au cas où ne s’annule pas sur .   Démontrer que .   Si n’est pas identiquement nulle, l’exercice 7.2 montre que l’on peut se ramener au cas où s’annule en , en et où ne s’annule pas sur . De plus, grâce au théorème des valeurs intermédiaires, est de signe constant sur et quitte à changer en son opposée, on peut supposer sur . En notant une primitive de et en multipliant (1) par , on obtient   puis en intégrant entre et ,   Enfin, et même (car si , il résulte du théorème de Cauchy-Lipschitz que l’on aurait sur , ce qui n’est pas le cas). De même, .  Conclusion alors que , d’où une contradiction. On en déduit que est identiquement nulle sur . En particulier , donc est identiquement nulle sur .    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .    Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .     Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soient et    Soit telle que et . Démontrer que et sont strictement positives sur et que .   Supposons que s’annule au moins une fois sur .  L’ensemble est alors une partie fermée non vide de , elle possède donc un plus petit élément et . De plus, d’après le théorème des valeurs intermédiaires, est strictement positive sur , donc est positive sur cet intervalle et donc est convexe. On en déduit alors que pour tout ,   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .   Soient telles que    Calculer . Démontrer que sur , et sont monotones de monotonies opposées.  Démontrer que et tendent vers la même limite en .    Posons . Il s’agit d’une fonction de classe et   W est donc constante. De plus, .  Par ailleurs, comme et , la fonction est strictement positive au voisinage de à droite et en reprenant la raisonnement de la question 1), on montre que est strictement positive sur et tend vers en . On en déduit également que est strictement positive et croissante sur cet intervalle. On a alors, sur ,    Conclusion est strictement décroissante sur et est croissante sur cet intervalle.  Écrivons   car pour , et .  Sur , étant croissante et , on en déduit que sur .  De plus, pour , donc la fonction décroissante sur , est minorée par 0 donc converge vers une limite finie en .  Et, bien sûr,    Démontrer qu’il existe une unique telle que soit strictement positive, décroissante sur et telle que .   Le couple est un système fondamental de solutions sur de (car leur wronskien ne s’annule pas). Toute solution de est donc de la forme , où et sont des réels. La condition revient à imposer .  Le fait que soit décroissante et minorée par 0 sur impose à d’être bornée.  Écrivons sur ,   on en déduit que si , on aurait donc aurait une limite infinie en , absurde. Donc, nécessairement, .  Ce qui prouve l’unicité de , cette fonction ne peut s’écrire que sous la forme .  Montrons que cette fonction est bien décroissante et positive.  Sur , car sur , et est strictement décroissante de limite .  Toujours sur , on a car sur , et est strictement croissante de limite .  Conclusion Il existe une unique telle que soit strictement positive, décroissante sur et telle que , c’est .    Une démonstration du théorème de relèvement pour les fonctions de classe .  Soient un intervalle de , , , telles que . On considère également un réel tel que   ainsi que la fonction   Démontrer que pour tout réel ,    Démontrer que pour tout réel ,    La fonction   est de classe sur car est continue sur cet intervalle. De plus, . Afin de conclure, on introduit la fonction   Elle est évidemment de classe sur et   Or , donc par dérivation et donc   Conclusion est constante sur égale à , par conséquent .    Théorème de Sturm.  Soient un intervalle non trivial de , deux fonctions continues telles que . On considère également deux fonctions non identiquement nulles, de classe telles que   Enfin, et désignent deux zéros consécutifs de .   Démontrer que s’annule au moins une fois dans ou que .   Comme ne s’annule pas sur , elle y est de signe constant et quitte à la changer en son opposée on peut supposer qu’elle est strictement positive sur . Supposons que ne s’annule pas dans . Elle y est donc de signe constant et ici aussi, quitte à changer en son opposée, on peut supposer sur .  Considérons alors le wronskien du couple , .  Il s’agit là d’une fonction de classe sur et   Ainsi, est décroissante sur .  Or et .  De même et .  Conclusion   On a donc sur .  En particulier et .   Dans le cas où ne s’annule pas dans , démontrer que est proportionnelle à sur le segment .   Supposons que . En reprenant les précédents calculs, on voit que l’on a toujours décroissante sur avec est nulle sur .  On en déduit que sur ,   Il existe donc tel que sur . Cette relation est encore vraie en et en .    Une application de l’exercice 7.9.  Soit une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .   Démontrer que l’ensemble des zéros de est infini dénombrable.   On sait (voir exercice 7.2) que possède un nombre fini de zéros dans tout segment.  Comme est l’union d’une famille dénombrable de segments, l’ensemble est l’union dénombrable d’ensembles finis, il est donc au plus dénombrable.  Il reste à voir que est infini. Supposons au contraire que soit fini.  Dans ce cas, il existe un réel pour lequel ne s’annule pas sur .  On peut supposer (par application du théorème des valeurs intermédiaires) que est strictement positive sur .  Il s’ensuit que sur , de sorte que est concave sur .  On en déduit que pour ,   Si , alors tendrait vers en , ce qui n’est pas possible.  En définitive, est positive sur , donc est croissante sur .  On en déduit que pour tout ,   L’inégalité des accroissements finis montre que .  Une nouvelle application de l’inégalité des accroissements finis permet de conclure que , d’où une contradiction puis que par hypothèse sur .  Conclusion est un ensemble infini dénombrable.    Une application de l’exercice 7.9.  Soit une fonction continue, -périodique ( ).   On considère une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .  On note l’ensemble des zéros de .  Démontrer que ou bien ou bien est infini.  Indication : si et sont deux zéros consécutifs de , démontrer que s’annule dans tout segment de la forme , où .   Supposons que possède au moins deux zéros . En utilisant la conclusion de l’exercice 7.2, on se ramène au cas où et sont deux zéros consécutifs de .  Dans ce cas (théorème des valeurs intermédiaires), est de signe constant sur et quitte à changer en son opposé, on peut supposer que est strictement positive sur . Pour tout entier , on note   Comme la fonction est -périodique, est solution, sur , de l’équation .  On utilise alors les conclusions de l’exercice 7.9 avec ici .  La fonction s’annule au moins une fois dans ou alors .  Dans les deux cas, on a répondu à la question. Considérons alors un entier tel que . On vérifie que pour , les segments sont deux à deux disjoints car   Conclusion si , alors est infini.    Le lemme de Gronwall.  Soient et un réel positif tels que   Démontrer que pour tout ,    Démontrer que pour tout ,    Supposons d’abord et considérons la fonction   Cette fonction est de classe et pour tout ,   d’où, par intégration   d’où   Supposons à présent que . Dans ce cas, on peut appliquer tout ce qui précède pour tout ,   d’où le résultat cherché en faisant tendre vers 0.    Un problème de conditions aux limites.  Soient . On suppose que . On s’intéresse à l’équation différentielle   où la fonction inconnue est supposée à valeurs réelles.   Soit une solution de l’équation homogène associée vérifiant . En considérant , démontrer que est constante, égale à zéro sur .   On considère comme c’est indiqué dans l’énoncé . Ce nombre est clairement négatif. Par ailleurs, en tenant compte du fait que ,   Conclusion et comme est positive et continue, on peut conclure que sur , donc est constante et nécessairement nulle vu que .    Soit une fonction de classe telle que . Démontrer que les solutions sur de l’équation   sont toutes bornées ainsi que leurs dérivées d’ordre 1. Indication : on pourra considérer la fonction puis utiliser le lemme de Gronwall (exercice 7.12).   Démontrer que les solutions sur de l’équation sont toutes bornées ainsi que leurs dérivées d’ordre 1.   Soit une solution sur de l’équation . On lui associe la fonction . Cette fonction est de classe et . Ainsi, pour tout réel ,    d’où, pour les mêmes valeurs de ,   Le lemme de Gronwall permet alors de conclure que   Conclusion est bornée sur et il en est donc de même de et de .    Soient un intervalle ouvert de , . On considère l’équation différentielle   On suppose connu le fait que les zéros de toute solution sur non identiquement nulle de sont isolés.   Soient . On suppose que et possèdent un zéro commun. Démontrer alors que ces deux fonctions sont proportionnelles.   Supposons qu’il existe tel que . Comme et sont des solutions non identiquement nulles de , et ne sont pas nuls. On considère alors . C’est une solution sur de qui est telle que et . On en déduit que est la fonction nulle, par conséquent et sont proportionnelles.   Soit un système fondamental de solutions sur de . Démontrer qu’entre deux zéros consécutifs de il y a exactement un zéro de .   Soient un système fondamental de solutions sur de et deux zéros consécutifs de . Quitte à changer en , on peut supposer grâce au théorème des valeurs intermédiaires que est strictement positive sur .  Supposons à présent que ne s’annule pas sur . À nouveau, on peut supposer sur . Comme et sont linéairement indépendantes, il résulte de la question 1) que ne s’annule ni en ni en . Ainsi et .  Par ailleurs si on note le wronskien du couple , .  On a et même (car sinon on aurait , ce qui entraînerait ). De même . Ainsi   ce qui entraînerait via le théorème des valeurs intermédiaires l’existence d’un zéro pour dans . Ceci est impossible vu que est un système fondamental de solutions sur de .  Conclusion entre et , s’annule au moins une fois. De plus elle ne peut s’annuler deux fois sans quoi le précédent raisonnement appliqué au couple démontrerait l’existence pour d’un zéro strictement compris entre et .    Soient et   (où la fonction inconnue est à valeurs dans ).  Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .   Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .   On note une norme sur .  Supposons que toutes les solutions sur de sont bornées. Soient et un vecteur propre associé. On sait alors que l’application est une solution sur de . De plus, pour tout réel ,   Comme est bornée sur , cela impose .  Conclusion .  Considérons à présent et . On note . L’application   est aussi une solution bornée sur de . On en déduit que nécessairement .  Ainsi, pour toute , . On démontre (exercice classique) que pour tout entier , .  De plus, le théorème de Cayley-Hamilton ainsi que le lemme de décomposition des noyaux montrent que   Conclusion D’après ce qui précède , donc est diagonalisable.  Réciproquement, supposons est diagonalisable et .  Dans ce cas, toute solution de est combinaison linéaire de solutions de la forme qui sont toutes bornées sur .  Conclusion toutes les solutions sur de sont bornées sur .    Soient et   (où la fonction inconnue est à valeurs dans ).  Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?   Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?   Supposons que toutes les solutions sur de sont 1-périodiques.  Considérons et un vecteur propre associé.  On sait alors que l’application est une solution sur de .  Comme elle est 1-périodique, , donc .  Considérons toujours et cette fois . On note .  L’application   est aussi une solution sur de . Elle est donc 1-périodique, donc   donc .  Ainsi, pour toute , . On suit la même démarche qu’à l’exercice précédent, on montre que pour tout entier , puis le théorème de Cayley-Hamilton et le lemme de décomposition des noyaux montrent que   Conclusion d’après ce qui précède , donc est diagonalisable.  Réciproquement, on vérifie facilement que si est diagonalisable et si , alors toutes les solutions sur de sont 1-périodiques.    Soit une application continue telle que .  On considère également une solution sur , de l’équation   vérifiant en outre .   Que peut-on dire de si ?   Si , le théorème de Cauchy-Lipschitz montre que la fonction est identiquement nulle sur .   On suppose à présent .   Démontrer que s’annule au moins une fois sur .  Démontrer que s’annule une infinité de fois sur .    Afin de résoudre cette question on aura besoin du lemme suivant :  Lemme : Soit une fonction dérivable possédant une limite en . Alors tend vers en .  Preuve du lemme : D’après l’hypothèse faite sur , il existe tels que pour tout . L’inégalité des accroissements finis permet de conclure que pour ces mêmes valeurs de ,   d’où immédiatement la conclusion souhaitée.    Supposons que ne s’annule pas sur . Elle possède donc sur cet intervalle un signe constant et comme , elle y reste strictement positive. Il s’ensuit que est strictement croissante sur , donc et donc (éventuellement ). Le précédent lemme montre qu’alors , ce qui est impossible.  Conclusion s’annule au moins une fois sur .    Ici aussi on raisonne par l’absurde en supposant que ne possède qu’un nombre fini de zéros sur . On note le plus grand d’entre eux. La fonction est alors de signe constant sur . Supposons par exemple qu’elle y est strictement positive.  Dans ce cas, est négative sur et donc est concave sur et donc pour tout et pour tout ,   On en déduit que si , alors , donc , ce qui est impossible.  Conclusion est négative sur , donc décroit sur et comme elle est minorée par 0 sur cet intervalle, elle possède une limite finie en .  De plus on a nécessairement sinon et le précédent lemme montre alors que , puis que ce qui est impossible.  On aboutit à une contradiction car et décroissante sur , donc sur .      Méthode d’Euler – Python.  Cet exercice utilise le lemme de Gronwall, exercice 7.12.  Soit une application continue et intégrable sur .  On lui associe l’équation différentielle   Soit .   Dans cette question uniquement, .  Soit une solution de l’équation telle que . À l’aide de la méthode d’Euler (ou bien l’instruction du module ), tracer le support de la courbe paramétrée   pour diverses valeurs du couple .  Que peut-on conjecturer en ce qui concerne le comportement asymptotique de la fonction en ?   Voici le code Python :   On peut penser que la solution est bornée (surtout en utilisant ).    Soit application continue de dans et non intégrable sur .  On veut démontrer qu’une solution (non identiquement nulle) de l’équation différentielle sur   admet une infinité de zéros.   Vérifier ce résultat sur un cas simple de votre choix.   Il suffit de choisir . Les solutions de l’équation sont toutes les fonctions de la forme   Si ou est nul, il est clair que possède une infinité de zéros. S’ils ne sont pas nuls, on considère un réel tel que . On a alors   et la conclusion s’en suit immédiatement.    Dans cet exercice on s’intéresse à l’équation différentielle   où est une fonction continue pour laquelle la fonction est intégrable sur avec   On note l’espace vectoriel des fonctions qui sont continues et bornées sur . Cet espace est muni de la norme définie par    Soit . Démontrer que la fonction   est définie, bornée et de classe sur l’intervalle .   Soit fixé. La fonction est continue sur et pour tout   ce qui assure l’intégrabilité de sur .  De plus,   Comme les fonctions et sont continues, on en déduit le caractère de et la relation   d’où le caractère de et la relation   Enfin, est bornée car     Soit un polynôme dont les racines ont toutes une partie réelle strictement négative. On considère également une fonction de limite nulle en . On leur associe l’équation différentielle linéaire d’ordre   Démontrer que toute solution de cette équation tend vers 0 en .  Indication : on pourra commencer par examiner le cas où .   Démontrer que toute solution de cette équation tend vers 0 en .   On peut commencer par observer que toute solution de est indéfiniment dérivable (démontrer par récurrence qu’une telle fonction est de classe , pour tout ). Pour la question posée, on procède par récurrence.  Cas : On a donc ici . On considère donc une fonction telle que pour tout réel ,   ce qui équivaut à   d’où l’existence d’un complexe tel que pour tout ,   d’où   On en déduit, pour les mêmes valeurs de ,   Comme , . Il ne reste plus qu’à s’occuper du second terme. Pour cela on se donne un réel . Comme tend vers 0 en , il existe un réel tel que pour tout , . On en déduit, toujours, pour ,       Enfin , donc il existe tel que pour tout , .  En définitive,   donc et donc .  Cas général : Supposons la propriété démontrée au rang . On considère donc l’équation d’ordre ,   On peut remarquer que cette équation peut s’écrire sous la forme où est l’opérateur de dérivation sur l’espace et où . Soit une racine de . Il existe donc , de degré tel que . L’équation peut alors s’écrire   D’après l’étude du cas , la fonction tend vers 0 en et d’après l’hypothèse de récurrence, tend aussi vers 0 en .    Soit une fonction continue strictement négative. On s’intéresse dans cet exercice aux solutions sur de l’équation différentielle   On note la solution de vérifiant .   Démontrer que la fonction est strictement positive, strictement croissante et convexe sur .   Supposons que s’annule au moins une fois dans . On note   Or est une partie fermée de , donc . De plus, comme , le théorème des valeurs intermédiaires montre que sur . On en déduit que sur , donc   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .    Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .      Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.    Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.   "
},
{
  "id": "ch-eqdiff-exercices-2",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-2",
  "type": "Exercice",
  "number": "59",
  "title": "",
  "body": " Déterminer les solutions développables en série entière de l'équation différentielle    Déterminer les solutions développables en série entière de l'équation différentielle .   Soit une suite réelle pour laquelle le rayon de convergence de la série entière est strictement positif. On note la somme de cette série entière sur . C’est une fonction indéfiniment dérivable et est solution, sur , de l’équation si et seulement si    et par unicité du développement en série entière cela équivaut à ce que pour tout , .  Conclusion est solution, sur , de l’équation si et seulement si pour tout , . Il reste à constater que le rayon de convergence de la série entière ainsi obtenue est égal à car .   On note la solution DSE qui vérifie et on pose   Étudier le sens de variation de et en déduire que possède une limite finie en .   On a donc, pour tout réel , .  La fonction est évidemment dérivable sur et pour tout réel ,   de sorte que est décroissante sur .  Comme elle est minorée par 0 sur , elle possède une limite finie en .   En déduire que est bornée sur et que .   Pour tout réel , ,  on peut en déduire que est bornée sur . De même,   donc .  "
},
{
  "id": "ch-eqdiff-exercices-3",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-3",
  "type": "Exercice",
  "number": "60",
  "title": "",
  "body": " Une propriété classique des zéros d’une solution d’une équation différentielle linéaire homogène du second ordre.  Soient intervalle de et . On considère l’équation   Soit une solution sur réelle et non identiquement nulle de .   On suppose qu’il existe deux réels tels que et . Démontrer que l’ensemble   est un ensemble fini.   Supposons au contraire que soit infini : il contient alors une suite formée de réels deux à deux distincts. Quitte à extraire une sous-suite convenable on peut supposer que converge vers .  En tenant compte de la continuité de , on voit que . De plus, par application du théorème de Rolle, pour tout , il existe tel que .  On en déduit que converge vers , puis par continuité de , on obtient .  Conclusion comme , le théorème de Cauchy-Lipschitz montre que est identiquement nulle sur , ce qui a été exclu. L’ensemble est donc fini.   En déduire que l’ensemble des zéros de est un ensemble au plus dénombrable.   On peut écrire comme l’union d’une suite de segments.  D’après la question précédente, l’ensemble est fini, par conséquent l’ensemble des zéros de est fini ou dénombrable.  "
},
{
  "id": "ch-eqdiff-exercices-4",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-4",
  "type": "Exercice",
  "number": "61",
  "title": "",
  "body": " Soient un réel strictement positif, telle que pour tout réel , . On considère l’équation différentielle   Soit une solution non identiquement nulle de .   Expliquer pourquoi on aura pour tout réel , .   D’après le théorème de Cauchy-Lipschitz, comme n’est pas identiquement nulle, pour tout réel , .   On admet qu’il existe alors deux fonctions et toutes deux de classe et telles que    Exprimer en fonction de et de .  En déduire que est une bijection de sur .  Conclure que possède une infinité de zéros.    On a donc et  d’où ,  de plus, ,  d’où le système d’équations   En résolvant à l’aide des formules de Cramer    Or , donc et de plus la fonction   est continue, -périodique et strictement positive.  On en déduit que .  Conclusion , donc est une bijection décroissante de sur .  De plus, pour tout réel ,   donc et donc .  Pour tout entier tel que , il existe un unique réel tel que . On a alors .  Conclusion possède une infinité de zéros dans .  "
},
{
  "id": "ch-eqdiff-exercices-5",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-5",
  "type": "Exercice",
  "number": "62",
  "title": "",
  "body": " Soient et tels que   Démontrer que toute solution de l’équation est bornée au voisinage de .  Indication : considérer la fonction .   Démontrer que toute solution de l’équation est bornée au voisinage de .   Comme indiqué, on considère la fonction .  Elle est de classe sur et   On en déduit que sur , donc est décroissante sur cet intervalle. Conclusion est majorée par sur donc est majorée par sur .  "
},
{
  "id": "ch-eqdiff-exercices-6",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-6",
  "type": "Exercice",
  "number": "63",
  "title": "",
  "body": " Soit une fonction continue et une fonction de classe telle que   On suppose qu’il existe deux réels tels que . Démontrer que .  Indication : si n’est pas la fonction nulle, on utilisera l’exercice 7.2 p. 458 pour se ramener au cas où ne s’annule pas sur .   Démontrer que .   Si n’est pas identiquement nulle, l’exercice 7.2 montre que l’on peut se ramener au cas où s’annule en , en et où ne s’annule pas sur . De plus, grâce au théorème des valeurs intermédiaires, est de signe constant sur et quitte à changer en son opposée, on peut supposer sur . En notant une primitive de et en multipliant (1) par , on obtient   puis en intégrant entre et ,   Enfin, et même (car si , il résulte du théorème de Cauchy-Lipschitz que l’on aurait sur , ce qui n’est pas le cas). De même, .  Conclusion alors que , d’où une contradiction. On en déduit que est identiquement nulle sur . En particulier , donc est identiquement nulle sur .  "
},
{
  "id": "ch-eqdiff-exercices-7",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-7",
  "type": "Exercice",
  "number": "64",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .    Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .     Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-8",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-8",
  "type": "Exercice",
  "number": "65",
  "title": "",
  "body": " Soient et    Soit telle que et . Démontrer que et sont strictement positives sur et que .   Supposons que s’annule au moins une fois sur .  L’ensemble est alors une partie fermée non vide de , elle possède donc un plus petit élément et . De plus, d’après le théorème des valeurs intermédiaires, est strictement positive sur , donc est positive sur cet intervalle et donc est convexe. On en déduit alors que pour tout ,   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .   Soient telles que    Calculer . Démontrer que sur , et sont monotones de monotonies opposées.  Démontrer que et tendent vers la même limite en .    Posons . Il s’agit d’une fonction de classe et   W est donc constante. De plus, .  Par ailleurs, comme et , la fonction est strictement positive au voisinage de à droite et en reprenant la raisonnement de la question 1), on montre que est strictement positive sur et tend vers en . On en déduit également que est strictement positive et croissante sur cet intervalle. On a alors, sur ,    Conclusion est strictement décroissante sur et est croissante sur cet intervalle.  Écrivons   car pour , et .  Sur , étant croissante et , on en déduit que sur .  De plus, pour , donc la fonction décroissante sur , est minorée par 0 donc converge vers une limite finie en .  Et, bien sûr,    Démontrer qu’il existe une unique telle que soit strictement positive, décroissante sur et telle que .   Le couple est un système fondamental de solutions sur de (car leur wronskien ne s’annule pas). Toute solution de est donc de la forme , où et sont des réels. La condition revient à imposer .  Le fait que soit décroissante et minorée par 0 sur impose à d’être bornée.  Écrivons sur ,   on en déduit que si , on aurait donc aurait une limite infinie en , absurde. Donc, nécessairement, .  Ce qui prouve l’unicité de , cette fonction ne peut s’écrire que sous la forme .  Montrons que cette fonction est bien décroissante et positive.  Sur , car sur , et est strictement décroissante de limite .  Toujours sur , on a car sur , et est strictement croissante de limite .  Conclusion Il existe une unique telle que soit strictement positive, décroissante sur et telle que , c’est .  "
},
{
  "id": "ch-eqdiff-exercices-9",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-9",
  "type": "Exercice",
  "number": "66",
  "title": "",
  "body": " Une démonstration du théorème de relèvement pour les fonctions de classe .  Soient un intervalle de , , , telles que . On considère également un réel tel que   ainsi que la fonction   Démontrer que pour tout réel ,    Démontrer que pour tout réel ,    La fonction   est de classe sur car est continue sur cet intervalle. De plus, . Afin de conclure, on introduit la fonction   Elle est évidemment de classe sur et   Or , donc par dérivation et donc   Conclusion est constante sur égale à , par conséquent .  "
},
{
  "id": "ch-eqdiff-exercices-10",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-10",
  "type": "Exercice",
  "number": "67",
  "title": "",
  "body": " Théorème de Sturm.  Soient un intervalle non trivial de , deux fonctions continues telles que . On considère également deux fonctions non identiquement nulles, de classe telles que   Enfin, et désignent deux zéros consécutifs de .   Démontrer que s’annule au moins une fois dans ou que .   Comme ne s’annule pas sur , elle y est de signe constant et quitte à la changer en son opposée on peut supposer qu’elle est strictement positive sur . Supposons que ne s’annule pas dans . Elle y est donc de signe constant et ici aussi, quitte à changer en son opposée, on peut supposer sur .  Considérons alors le wronskien du couple , .  Il s’agit là d’une fonction de classe sur et   Ainsi, est décroissante sur .  Or et .  De même et .  Conclusion   On a donc sur .  En particulier et .   Dans le cas où ne s’annule pas dans , démontrer que est proportionnelle à sur le segment .   Supposons que . En reprenant les précédents calculs, on voit que l’on a toujours décroissante sur avec est nulle sur .  On en déduit que sur ,   Il existe donc tel que sur . Cette relation est encore vraie en et en .  "
},
{
  "id": "ch-eqdiff-exercices-11",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-11",
  "type": "Exercice",
  "number": "68",
  "title": "",
  "body": " Une application de l’exercice 7.9.  Soit une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .   Démontrer que l’ensemble des zéros de est infini dénombrable.   On sait (voir exercice 7.2) que possède un nombre fini de zéros dans tout segment.  Comme est l’union d’une famille dénombrable de segments, l’ensemble est l’union dénombrable d’ensembles finis, il est donc au plus dénombrable.  Il reste à voir que est infini. Supposons au contraire que soit fini.  Dans ce cas, il existe un réel pour lequel ne s’annule pas sur .  On peut supposer (par application du théorème des valeurs intermédiaires) que est strictement positive sur .  Il s’ensuit que sur , de sorte que est concave sur .  On en déduit que pour ,   Si , alors tendrait vers en , ce qui n’est pas possible.  En définitive, est positive sur , donc est croissante sur .  On en déduit que pour tout ,   L’inégalité des accroissements finis montre que .  Une nouvelle application de l’inégalité des accroissements finis permet de conclure que , d’où une contradiction puis que par hypothèse sur .  Conclusion est un ensemble infini dénombrable.  "
},
{
  "id": "ch-eqdiff-exercices-12",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-12",
  "type": "Exercice",
  "number": "69",
  "title": "",
  "body": " Une application de l’exercice 7.9.  Soit une fonction continue, -périodique ( ).   On considère une fonction de classe , non identiquement nulle et solution sur de l’équation différentielle .  On note l’ensemble des zéros de .  Démontrer que ou bien ou bien est infini.  Indication : si et sont deux zéros consécutifs de , démontrer que s’annule dans tout segment de la forme , où .   Supposons que possède au moins deux zéros . En utilisant la conclusion de l’exercice 7.2, on se ramène au cas où et sont deux zéros consécutifs de .  Dans ce cas (théorème des valeurs intermédiaires), est de signe constant sur et quitte à changer en son opposé, on peut supposer que est strictement positive sur . Pour tout entier , on note   Comme la fonction est -périodique, est solution, sur , de l’équation .  On utilise alors les conclusions de l’exercice 7.9 avec ici .  La fonction s’annule au moins une fois dans ou alors .  Dans les deux cas, on a répondu à la question. Considérons alors un entier tel que . On vérifie que pour , les segments sont deux à deux disjoints car   Conclusion si , alors est infini.  "
},
{
  "id": "ch-eqdiff-exercices-13",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-13",
  "type": "Exercice",
  "number": "70",
  "title": "",
  "body": " Le lemme de Gronwall.  Soient et un réel positif tels que   Démontrer que pour tout ,    Démontrer que pour tout ,    Supposons d’abord et considérons la fonction   Cette fonction est de classe et pour tout ,   d’où, par intégration   d’où   Supposons à présent que . Dans ce cas, on peut appliquer tout ce qui précède pour tout ,   d’où le résultat cherché en faisant tendre vers 0.  "
},
{
  "id": "ch-eqdiff-exercices-14",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-14",
  "type": "Exercice",
  "number": "71",
  "title": "",
  "body": " Un problème de conditions aux limites.  Soient . On suppose que . On s’intéresse à l’équation différentielle   où la fonction inconnue est supposée à valeurs réelles.   Soit une solution de l’équation homogène associée vérifiant . En considérant , démontrer que est constante, égale à zéro sur .   On considère comme c’est indiqué dans l’énoncé . Ce nombre est clairement négatif. Par ailleurs, en tenant compte du fait que ,   Conclusion et comme est positive et continue, on peut conclure que sur , donc est constante et nécessairement nulle vu que .  "
},
{
  "id": "ch-eqdiff-exercices-15",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-15",
  "type": "Exercice",
  "number": "72",
  "title": "",
  "body": " Soit une fonction de classe telle que . Démontrer que les solutions sur de l’équation   sont toutes bornées ainsi que leurs dérivées d’ordre 1. Indication : on pourra considérer la fonction puis utiliser le lemme de Gronwall (exercice 7.12).   Démontrer que les solutions sur de l’équation sont toutes bornées ainsi que leurs dérivées d’ordre 1.   Soit une solution sur de l’équation . On lui associe la fonction . Cette fonction est de classe et . Ainsi, pour tout réel ,    d’où, pour les mêmes valeurs de ,   Le lemme de Gronwall permet alors de conclure que   Conclusion est bornée sur et il en est donc de même de et de .  "
},
{
  "id": "ch-eqdiff-exercices-16",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-16",
  "type": "Exercice",
  "number": "73",
  "title": "",
  "body": " Soient un intervalle ouvert de , . On considère l’équation différentielle   On suppose connu le fait que les zéros de toute solution sur non identiquement nulle de sont isolés.   Soient . On suppose que et possèdent un zéro commun. Démontrer alors que ces deux fonctions sont proportionnelles.   Supposons qu’il existe tel que . Comme et sont des solutions non identiquement nulles de , et ne sont pas nuls. On considère alors . C’est une solution sur de qui est telle que et . On en déduit que est la fonction nulle, par conséquent et sont proportionnelles.   Soit un système fondamental de solutions sur de . Démontrer qu’entre deux zéros consécutifs de il y a exactement un zéro de .   Soient un système fondamental de solutions sur de et deux zéros consécutifs de . Quitte à changer en , on peut supposer grâce au théorème des valeurs intermédiaires que est strictement positive sur .  Supposons à présent que ne s’annule pas sur . À nouveau, on peut supposer sur . Comme et sont linéairement indépendantes, il résulte de la question 1) que ne s’annule ni en ni en . Ainsi et .  Par ailleurs si on note le wronskien du couple , .  On a et même (car sinon on aurait , ce qui entraînerait ). De même . Ainsi   ce qui entraînerait via le théorème des valeurs intermédiaires l’existence d’un zéro pour dans . Ceci est impossible vu que est un système fondamental de solutions sur de .  Conclusion entre et , s’annule au moins une fois. De plus elle ne peut s’annuler deux fois sans quoi le précédent raisonnement appliqué au couple démontrerait l’existence pour d’un zéro strictement compris entre et .  "
},
{
  "id": "ch-eqdiff-exercices-17",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-17",
  "type": "Exercice",
  "number": "74",
  "title": "",
  "body": " Soient et   (où la fonction inconnue est à valeurs dans ).  Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .   Démontrer que toutes les solutions sur de sont bornées si et seulement si est diagonalisable et si .   On note une norme sur .  Supposons que toutes les solutions sur de sont bornées. Soient et un vecteur propre associé. On sait alors que l’application est une solution sur de . De plus, pour tout réel ,   Comme est bornée sur , cela impose .  Conclusion .  Considérons à présent et . On note . L’application   est aussi une solution bornée sur de . On en déduit que nécessairement .  Ainsi, pour toute , . On démontre (exercice classique) que pour tout entier , .  De plus, le théorème de Cayley-Hamilton ainsi que le lemme de décomposition des noyaux montrent que   Conclusion D’après ce qui précède , donc est diagonalisable.  Réciproquement, supposons est diagonalisable et .  Dans ce cas, toute solution de est combinaison linéaire de solutions de la forme qui sont toutes bornées sur .  Conclusion toutes les solutions sur de sont bornées sur .  "
},
{
  "id": "ch-eqdiff-exercices-18",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-18",
  "type": "Exercice",
  "number": "75",
  "title": "",
  "body": " Soient et   (où la fonction inconnue est à valeurs dans ).  Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?   Que peut-on dire de si toutes les solutions sur de sont 1-périodiques ?   Supposons que toutes les solutions sur de sont 1-périodiques.  Considérons et un vecteur propre associé.  On sait alors que l’application est une solution sur de .  Comme elle est 1-périodique, , donc .  Considérons toujours et cette fois . On note .  L’application   est aussi une solution sur de . Elle est donc 1-périodique, donc   donc .  Ainsi, pour toute , . On suit la même démarche qu’à l’exercice précédent, on montre que pour tout entier , puis le théorème de Cayley-Hamilton et le lemme de décomposition des noyaux montrent que   Conclusion d’après ce qui précède , donc est diagonalisable.  Réciproquement, on vérifie facilement que si est diagonalisable et si , alors toutes les solutions sur de sont 1-périodiques.  "
},
{
  "id": "ch-eqdiff-exercices-19",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-19",
  "type": "Exercice",
  "number": "76",
  "title": "",
  "body": " Soit une application continue telle que .  On considère également une solution sur , de l’équation   vérifiant en outre .   Que peut-on dire de si ?   Si , le théorème de Cauchy-Lipschitz montre que la fonction est identiquement nulle sur .   On suppose à présent .   Démontrer que s’annule au moins une fois sur .  Démontrer que s’annule une infinité de fois sur .    Afin de résoudre cette question on aura besoin du lemme suivant :  Lemme : Soit une fonction dérivable possédant une limite en . Alors tend vers en .  Preuve du lemme : D’après l’hypothèse faite sur , il existe tels que pour tout . L’inégalité des accroissements finis permet de conclure que pour ces mêmes valeurs de ,   d’où immédiatement la conclusion souhaitée.    Supposons que ne s’annule pas sur . Elle possède donc sur cet intervalle un signe constant et comme , elle y reste strictement positive. Il s’ensuit que est strictement croissante sur , donc et donc (éventuellement ). Le précédent lemme montre qu’alors , ce qui est impossible.  Conclusion s’annule au moins une fois sur .    Ici aussi on raisonne par l’absurde en supposant que ne possède qu’un nombre fini de zéros sur . On note le plus grand d’entre eux. La fonction est alors de signe constant sur . Supposons par exemple qu’elle y est strictement positive.  Dans ce cas, est négative sur et donc est concave sur et donc pour tout et pour tout ,   On en déduit que si , alors , donc , ce qui est impossible.  Conclusion est négative sur , donc décroit sur et comme elle est minorée par 0 sur cet intervalle, elle possède une limite finie en .  De plus on a nécessairement sinon et le précédent lemme montre alors que , puis que ce qui est impossible.  On aboutit à une contradiction car et décroissante sur , donc sur .    "
},
{
  "id": "ch-eqdiff-exercices-20",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-20",
  "type": "Exercice",
  "number": "77",
  "title": "",
  "body": " Méthode d’Euler – Python.  Cet exercice utilise le lemme de Gronwall, exercice 7.12.  Soit une application continue et intégrable sur .  On lui associe l’équation différentielle   Soit .   Dans cette question uniquement, .  Soit une solution de l’équation telle que . À l’aide de la méthode d’Euler (ou bien l’instruction du module ), tracer le support de la courbe paramétrée   pour diverses valeurs du couple .  Que peut-on conjecturer en ce qui concerne le comportement asymptotique de la fonction en ?   Voici le code Python :   On peut penser que la solution est bornée (surtout en utilisant ).  "
},
{
  "id": "ch-eqdiff-exercices-21",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-21",
  "type": "Exercice",
  "number": "78",
  "title": "",
  "body": " Soit application continue de dans et non intégrable sur .  On veut démontrer qu’une solution (non identiquement nulle) de l’équation différentielle sur   admet une infinité de zéros.   Vérifier ce résultat sur un cas simple de votre choix.   Il suffit de choisir . Les solutions de l’équation sont toutes les fonctions de la forme   Si ou est nul, il est clair que possède une infinité de zéros. S’ils ne sont pas nuls, on considère un réel tel que . On a alors   et la conclusion s’en suit immédiatement.  "
},
{
  "id": "ch-eqdiff-exercices-22",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-22",
  "type": "Exercice",
  "number": "79",
  "title": "",
  "body": " Dans cet exercice on s’intéresse à l’équation différentielle   où est une fonction continue pour laquelle la fonction est intégrable sur avec   On note l’espace vectoriel des fonctions qui sont continues et bornées sur . Cet espace est muni de la norme définie par    Soit . Démontrer que la fonction   est définie, bornée et de classe sur l’intervalle .   Soit fixé. La fonction est continue sur et pour tout   ce qui assure l’intégrabilité de sur .  De plus,   Comme les fonctions et sont continues, on en déduit le caractère de et la relation   d’où le caractère de et la relation   Enfin, est bornée car   "
},
{
  "id": "ch-eqdiff-exercices-23",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-23",
  "type": "Exercice",
  "number": "80",
  "title": "",
  "body": " Soit un polynôme dont les racines ont toutes une partie réelle strictement négative. On considère également une fonction de limite nulle en . On leur associe l’équation différentielle linéaire d’ordre   Démontrer que toute solution de cette équation tend vers 0 en .  Indication : on pourra commencer par examiner le cas où .   Démontrer que toute solution de cette équation tend vers 0 en .   On peut commencer par observer que toute solution de est indéfiniment dérivable (démontrer par récurrence qu’une telle fonction est de classe , pour tout ). Pour la question posée, on procède par récurrence.  Cas : On a donc ici . On considère donc une fonction telle que pour tout réel ,   ce qui équivaut à   d’où l’existence d’un complexe tel que pour tout ,   d’où   On en déduit, pour les mêmes valeurs de ,   Comme , . Il ne reste plus qu’à s’occuper du second terme. Pour cela on se donne un réel . Comme tend vers 0 en , il existe un réel tel que pour tout , . On en déduit, toujours, pour ,       Enfin , donc il existe tel que pour tout , .  En définitive,   donc et donc .  Cas général : Supposons la propriété démontrée au rang . On considère donc l’équation d’ordre ,   On peut remarquer que cette équation peut s’écrire sous la forme où est l’opérateur de dérivation sur l’espace et où . Soit une racine de . Il existe donc , de degré tel que . L’équation peut alors s’écrire   D’après l’étude du cas , la fonction tend vers 0 en et d’après l’hypothèse de récurrence, tend aussi vers 0 en .  "
},
{
  "id": "ch-eqdiff-exercices-24",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-24",
  "type": "Exercice",
  "number": "81",
  "title": "",
  "body": " Soit une fonction continue strictement négative. On s’intéresse dans cet exercice aux solutions sur de l’équation différentielle   On note la solution de vérifiant .   Démontrer que la fonction est strictement positive, strictement croissante et convexe sur .   Supposons que s’annule au moins une fois dans . On note   Or est une partie fermée de , donc . De plus, comme , le théorème des valeurs intermédiaires montre que sur . On en déduit que sur , donc   En particulier, avec .  Ceci est impossible puisque et .  Conclusion ne peut s’annuler sur , donc elle y est de signe constant (nécessairement positif vu que ).  Par ailleurs est positive sur , donc est croissante sur cet intervalle, donc, pour tout , .  Enfin car d’après ce qui vient d’être fait, est convexe sur , donc   d’où le résultat cherché puisque .  "
},
{
  "id": "ch-eqdiff-exercices-25",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-25",
  "type": "Exercice",
  "number": "82",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Soit une solution sur de bornée.   Démontrer que possède une limite finie en .  Démontrer que nécessairement .    Soit une solution sur de bornée.    La fonction est le produit d’une fonction intégrable et d’une fonction bornée sur . Elle est donc, elle aussi, intégrable sur . On en déduit que     Supposons par exemple . Dans ce cas est positive au voisinage de et par intégration des relations de comparaison on obtiendrait   admettait alors comme limite en , ce qui est exclu (on a supposé bornée). On traite de même le cas où en remplaçant par .    "
},
{
  "id": "ch-eqdiff-exercices-26",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-26",
  "type": "Exercice",
  "number": "83",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-27",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-27",
  "type": "Exercice",
  "number": "84",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-28",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-28",
  "type": "Exercice",
  "number": "85",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-29",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-29",
  "type": "Exercice",
  "number": "86",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-30",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-30",
  "type": "Exercice",
  "number": "87",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-31",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-31",
  "type": "Exercice",
  "number": "88",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-32",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-32",
  "type": "Exercice",
  "number": "89",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-33",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-33",
  "type": "Exercice",
  "number": "90",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-34",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-34",
  "type": "Exercice",
  "number": "91",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-35",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-35",
  "type": "Exercice",
  "number": "92",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-36",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-36",
  "type": "Exercice",
  "number": "93",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "ch-eqdiff-exercices-37",
  "level": "2",
  "url": "ch-eqdiff-exercices.html#ch-eqdiff-exercices-37",
  "type": "Exercice",
  "number": "94",
  "title": "",
  "body": " Soit une fonction continue et intégrable sur . On lui associe l’équation différentielle    Démontrer que possède au moins une solution sur non bornée.   Supposons que toutes les solutions sur de soient bornées.  On note un système fondamental de solutions de sur . On considère alors le wronskien du couple . On vérifie aisément que cette fonction est constante sur et non nulle car un système fondamental de solutions de sur .  Or, d’après 1) b),   d’où une contradiction.  Conclusion possède au moins une solution sur non bornée.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
