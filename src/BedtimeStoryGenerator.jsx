import React, { useState } from 'react';
import { Sparkles, Book, ArrowRight, ArrowLeft, Loader2, Heart, Star, Moon } from 'lucide-react';

const TRANSLATIONS = {
  "en-US": {
    "ageTitle": "How old is your little one?",
    "ageSubtitle": "This helps us choose the perfect vocabulary and themes",
    "agePlaceholder": "Enter age (2-12)",
    "continueButton": "Continue",
    "step1of5": "Step 1 of 5",
    "genderTitle": "Tell us about your child",
    "genderSubtitle": "We'll use the right pronouns and perspective",
    "boy": "boy",
    "girl": "girl",
    "other": "other",
    "backButton": "Back",
    "step2of5": "Step 2 of 5",
    "interestsTitle": "What does your child love?",
    "interestsSubtitle": "Pick 1-3 things that spark their imagination",
    "animals": "Animals",
    "spaceStars": "Space & Stars",
    "oceanSeaLife": "Ocean & Sea Life",
    "dinosaurs": "Dinosaurs",
    "magicFantasy": "Magic & Fantasy",
    "sports": "Sports",
    "music": "Music",
    "artDrawing": "Art & Drawing",
    "natureForest": "Nature & Forest",
    "superheroes": "Superheroes",
    "vehiclesTransportation": "Vehicles & Transportation",
    "cookingFood": "Cooking & Food",
    "scienceExperiments": "Science & Experiments",
    "step3of5": "Step 3 of 5",
    "styleTitle": "What kind of story would you like?",
    "styleSubtitle": "Choose the tone that fits bedtime best",
    "funnyLabel": "Funny & Silly",
    "funnyDesc": "Giggles and laughs throughout",
    "adventurousLabel": "Adventurous & Exciting",
    "adventurousDesc": "Thrilling quests and discoveries",
    "gentleLabel": "Gentle & Calming",
    "gentleDesc": "Peaceful and soothing",
    "magicalLabel": "Magical & Enchanting",
    "magicalDesc": "Fantasy and wonder",
    "educationalLabel": "Educational & Learning",
    "educationalDesc": "Fun facts and knowledge",
    "step4of5": "Step 4 of 5",
    "lessonTitle": "What lesson should we include?",
    "lessonSubtitle": "What important message should they learn?",
    "lessonPlaceholder": "Examples: Being kind to others, trying new things, sharing is caring, being brave when scared...",
    "createStoryButton": "Create Story",
    "step5of5": "Step 5 of 5",
    "generatingTitle": "Creating your magical story...",
    "generatingSubtitle": "Our storytelling magic is working...",
    "storyReadyTitle": "Your bedtime story is ready!",
    "storyReadySubtitle": "Sweet dreams are just a story away!",
    "sweetDreams": "Sweet dreams!",
    "createAnotherStory": "Create Another Story",
    "errorMessage": "Sorry, there was an error generating your story. Please try again."
  },
  "es-ES": {
    "ageTitle": "¿Qué edad tiene tu pequeño?",
    "ageSubtitle": "Esto nos ayuda a elegir el vocabulario y temas perfectos",
    "agePlaceholder": "Ingresa la edad (2-12)",
    "continueButton": "Continuar",
    "step1of5": "Paso 1 de 5",
    "genderTitle": "Cuéntanos sobre tu hijo",
    "genderSubtitle": "Usaremos los pronombres y perspectiva correctos",
    "boy": "niño",
    "girl": "niña",
    "other": "otro",
    "backButton": "Atrás",
    "step2of5": "Paso 2 de 5",
    "interestsTitle": "¿Qué le encanta a tu hijo?",
    "interestsSubtitle": "Elige 1-3 cosas que despierten su imaginación",
    "animals": "Animales",
    "spaceStars": "Espacio y Estrellas",
    "oceanSeaLife": "Océano y Vida Marina",
    "dinosaurs": "Dinosaurios",
    "magicFantasy": "Magia y Fantasía",
    "sports": "Deportes",
    "music": "Música",
    "artDrawing": "Arte y Dibujo",
    "natureForest": "Naturaleza y Bosque",
    "superheroes": "Superhéroes",
    "vehiclesTransportation": "Vehículos y Transporte",
    "cookingFood": "Cocina y Comida",
    "scienceExperiments": "Ciencia y Experimentos",
    "step3of5": "Paso 3 de 5",
    "styleTitle": "¿Qué tipo de historia te gustaría?",
    "styleSubtitle": "Elige el tono que mejor se adapte a la hora de dormir",
    "funnyLabel": "Divertida y Tonta",
    "funnyDesc": "Risas y carcajadas en todo momento",
    "adventurousLabel": "Aventurera y Emocionante",
    "adventurousDesc": "Misiones emocionantes y descubrimientos",
    "gentleLabel": "Suave y Tranquilizante",
    "gentleDesc": "Pacífica y relajante",
    "magicalLabel": "Mágica y Encantadora",
    "magicalDesc": "Fantasía y maravilla",
    "educationalLabel": "Educativa y de Aprendizaje",
    "educationalDesc": "Datos divertidos y conocimiento",
    "step4of5": "Paso 4 de 5",
    "lessonTitle": "¿Qué lección deberíamos incluir?",
    "lessonSubtitle": "¿Qué mensaje importante deberían aprender?",
    "lessonPlaceholder": "Ejemplos: Ser amable con otros, probar cosas nuevas, compartir es cuidar, ser valiente cuando tienes miedo...",
    "createStoryButton": "Crear Historia",
    "step5of5": "Paso 5 de 5",
    "generatingTitle": "Creando tu historia mágica...",
    "generatingSubtitle": "Nuestra magia de cuentos está funcionando...",
    "storyReadyTitle": "¡Tu cuento para dormir está listo!",
    "storyReadySubtitle": "¡Los dulces sueños están a solo una historia de distancia!",
    "sweetDreams": "¡Dulces sueños!",
    "createAnotherStory": "Crear Otra Historia",
    "errorMessage": "Lo siento, hubo un error al generar tu historia. Por favor, inténtalo de nuevo."
  },
  "fr-FR": {
    "ageTitle": "Quel âge a votre petit bout ?",
    "ageSubtitle": "Cela nous aide à choisir le vocabulaire et les thèmes parfaits",
    "agePlaceholder": "Entrez l'âge (2-12)",
    "continueButton": "Continuer",
    "step1of5": "Étape 1 sur 5",
    "genderTitle": "Parlez-nous de votre enfant",
    "genderSubtitle": "Nous utiliserons les bons pronoms et la bonne perspective",
    "boy": "garçon",
    "girl": "fille",
    "other": "autre",
    "backButton": "Retour",
    "step2of5": "Étape 2 sur 5",
    "interestsTitle": "Qu'est-ce que votre enfant adore ?",
    "interestsSubtitle": "Choisissez 1 à 3 choses qui stimulent son imagination",
    "animals": "Animaux",
    "spaceStars": "Espace et Étoiles",
    "oceanSeaLife": "Océan et Vie Marine",
    "dinosaurs": "Dinosaures",
    "magicFantasy": "Magie et Fantaisie",
    "sports": "Sports",
    "music": "Musique",
    "artDrawing": "Art et Dessin",
    "natureForest": "Nature et Forêt",
    "superheroes": "Super-héros",
    "vehiclesTransportation": "Véhicules et Transport",
    "cookingFood": "Cuisine et Nourriture",
    "scienceExperiments": "Science et Expériences",
    "step3of5": "Étape 3 sur 5",
    "styleTitle": "Quel type d'histoire aimeriez-vous ?",
    "styleSubtitle": "Choisissez le ton qui convient le mieux au coucher",
    "funnyLabel": "Drôle et Amusante",
    "funnyDesc": "Des rires et de la joie tout au long",
    "adventurousLabel": "Aventureuse et Excitante",
    "adventurousDesc": "Des quêtes palpitantes et des découvertes",
    "gentleLabel": "Douce et Apaisante",
    "gentleDesc": "Paisible et relaxante",
    "magicalLabel": "Magique et Enchanteresse",
    "magicalDesc": "Fantaisie et émerveillement",
    "educationalLabel": "Éducative et Instructive",
    "educationalDesc": "Des faits amusants et des connaissances",
    "step4of5": "Étape 4 sur 5",
    "lessonTitle": "Quelle leçon devrions-nous inclure ?",
    "lessonSubtitle": "Quel message important devrait-il apprendre ?",
    "lessonPlaceholder": "Exemples : Être gentil avec les autres, essayer de nouvelles choses, partager c'est important, être courageux quand on a peur...",
    "createStoryButton": "Créer l'Histoire",
    "step5of5": "Étape 5 sur 5",
    "generatingTitle": "Création de votre histoire magique...",
    "generatingSubtitle": "Notre magie des contes est à l'œuvre...",
    "storyReadyTitle": "Votre histoire du soir est prête !",
    "storyReadySubtitle": "De beaux rêves ne sont qu'à une histoire de distance !",
    "sweetDreams": "Fais de beaux rêves !",
    "createAnotherStory": "Créer une Autre Histoire",
    "errorMessage": "Désolé, il y a eu une erreur lors de la génération de votre histoire. Veuillez réessayer."
  }
};

const appLocale = 'fr-FR'; // Configuration pour le français par défaut
const browserLocale = navigator.languages?.[0] || navigator.language || 'fr-FR';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'fr-FR'; // Français par défaut au lieu de l'anglais
};
const locale = findMatchingLocale(appLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['fr-FR'][key] || key;

const BedtimeStoryGenerator = () => {
  console.log('BedtimeStoryGenerator component loaded');

  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyText, setStoryText] = useState('');
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    interests: [],
    style: '',
    lesson: ''
  });

  const interests = [
    t('animals'), t('spaceStars'), t('oceanSeaLife'), t('dinosaurs'), t('magicFantasy'),
    t('sports'), t('music'), t('artDrawing'), t('natureForest'), t('superheroes'),
    t('vehiclesTransportation'), t('cookingFood'), t('scienceExperiments')
  ];

  const styles = [
    { value: 'funny', label: t('funnyLabel'), emoji: '😄', desc: t('funnyDesc') },
    { value: 'adventurous', label: t('adventurousLabel'), emoji: '🌟', desc: t('adventurousDesc') },
    { value: 'gentle', label: t('gentleLabel'), emoji: '🌙', desc: t('gentleDesc') },
    { value: 'magical', label: t('magicalLabel'), emoji: '✨', desc: t('magicalDesc') },
    { value: 'educational', label: t('educationalLabel'), emoji: '📚', desc: t('educationalDesc') }
  ];

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const generateStory = async () => {
    setIsGenerating(true);
    setCurrentStep(5);

    try {
      // Génération d'une histoire personnalisée et engageante
      const generatePersonalizedStory = () => {
        const genderInfo = {
          boy: { article: 'un petit garçon', pronoun: 'il', possessive: 'son', direct: 'le' },
          girl: { article: 'une petite fille', pronoun: 'elle', possessive: 'sa', direct: 'la' },
          other: { article: 'un enfant', pronoun: 'iel', possessive: 'son', direct: 'l\'' }
        };

        const gender = genderInfo[formData.gender] || genderInfo.other;
        const mainInterest = formData.interests[0] || 'les aventures';

        // Histoires personnalisées selon les intérêts
        const storyTemplates = {
          'Animaux': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Alex, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui rêvait de parler aux animaux.

Un matin, en se promenant dans la forêt enchantée près de chez ${gender.possessive} grand-mère, Alex découvrit un petit renard blessé caché sous un buisson. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} s'approcha doucement et, à ${gender.possessive} grande surprise, ${gender.pronoun} entendit le renard murmurer : "S'il te plaît, aide-moi..."

"Tu peux parler !" s'exclama Alex, les yeux écarquillés.

"Bien sûr que je peux parler," répondit le renard avec un petit sourire. "Tous les animaux peuvent parler, mais seuls les enfants au cœur pur peuvent nous entendre."

Alex soigna délicatement la patte du renard avec des feuilles médicinales que lui montra un vieux hibou sage. En retour, les animaux de la forêt lui enseignèrent leurs secrets : comment les écureuils cachent leurs noisettes, pourquoi les oiseaux chantent au lever du soleil, et comment ${formData.lesson}.

Quand vint l'heure de rentrer, le renard dit : "Alex, tu as appris aujourd'hui que ${formData.lesson}. N'oublie jamais cette leçon, car elle te guidera dans toutes tes aventures."

De retour chez ${gender.possessive} grand-mère, Alex s'endormit en souriant, sachant qu'${gender.pronoun} avait trouvé des amis pour la vie et une sagesse précieuse.`,

          'Espace et Étoiles': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Luna, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui passait ses nuits à observer les étoiles depuis ${gender.possessive} fenêtre.

Une nuit particulièrement claire, une étoile filante s'arrêta juste devant ${gender.possessive} fenêtre et se transforma en une petite créature lumineuse aux ailes scintillantes.

"Bonjour Luna ! Je suis Stella, gardienne des rêves stellaires. J'ai besoin de ton aide !" dit la créature d'une voix cristalline.

"Mon aide ? Mais je ne suis qu'un${formData.gender === 'girl' ? 'e' : ''} enfant !" répondit Luna, émerveillé${formData.gender === 'girl' ? 'e' : ''}.

"C'est exactement pour cela que j'ai besoin de toi. Les enfants ont l'imagination la plus pure de l'univers !"

Stella emmena Luna dans un voyage extraordinaire à travers les constellations. Ensemble, ${gender.pronoun} visitèrent la Lune où vivaient des lapins argentés, dansèrent avec les anneaux de Saturne, et aidèrent à rallumer une étoile qui s'éteignait.

"Comment peut-on rallumer une étoile ?" demanda Luna.

"Avec de la gentillesse et en comprenant que ${formData.lesson}," expliqua Stella. "Chaque acte de bonté fait briller les étoiles plus fort."

Luna apprit cette nuit-là que même les plus petites actions peuvent illuminer l'univers entier. Quand ${gender.pronoun} se réveilla dans ${gender.possessive} lit, une nouvelle étoile brillait dans le ciel, et Luna sut qu'${gender.pronoun} l'avait aidée à naître.`,

          'Océan et Vie Marine': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Océane, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui collectionnait les coquillages sur la plage près de chez ${gender.possessive} tante.

Un jour, en ramassant un coquillage particulièrement beau, ${gender.pronoun} entendit une petite voix qui en sortait : "Peux-tu m'aider à rentrer chez moi ?"

À l'intérieur du coquillage vivait Perla, une minuscule sirène pas plus grande qu'un pouce, qui avait été séparée de sa famille lors d'une tempête.

"Comment puis-je t'aider ?" demanda Océane, fasciné${formData.gender === 'girl' ? 'e' : ''}.

"Il faut que tu me ramènes au récif de corail arc-en-ciel, mais le chemin est semé d'embûches," expliqua Perla.

Océane plaça délicatement le coquillage dans un seau d'eau de mer et se dirigea vers les rochers où vivaient les créatures marines les plus sages. En chemin, ${gender.pronoun} rencontra un crabe grognon qui bloquait le passage.

"Personne ne passe sans résoudre mon énigme !" grogna le crabe.

Mais Océane, se souvenant que ${formData.lesson}, offrit au crabe une algue délicieuse qu'${gender.pronoun} avait trouvée. Touché par cette gentillesse, le crabe les laissa passer et leur indiqua même le chemin le plus sûr.

Arrivés au récif, Perla retrouva sa famille qui organisa une fête sous-marine magnifique en l'honneur d'Océane. Les poissons multicolores dansèrent, les dauphins chantèrent, et Océane comprit que les plus belles aventures commencent par un geste de bonté.`,

          'Magie et Fantaisie': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Merlin, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui trouvait toujours des objets étranges dans le grenier de ${gender.possessive} grand-père.

Ce jour-là, ${gender.pronoun} découvrit une vieille baguette magique couverte de poussière. Dès qu'${gender.pronoun} la toucha, la baguette se mit à briller et une voix douce résonna :

"Enfin ! J'attendais le bon apprenti magicien depuis si longtemps !"

"Apprenti magicien ? Moi ?" s'étonna Merlin.

"Bien sûr ! Mais attention, la vraie magie ne vient pas de la baguette, elle vient du cœur," expliqua la voix mystérieuse.

La baguette emmena Merlin dans un monde fantastique où les arbres avaient des visages souriants, où les nuages étaient des moutons volants, et où un dragon triste pleurait dans une caverne.

"Pourquoi pleures-tu ?" demanda Merlin au dragon.

"Tout le monde a peur de moi à cause de mes flammes, mais je ne veux faire de mal à personne. Je me sens si seul..." sanglota le dragon.

Merlin comprit alors que ${formData.lesson}. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} organisa une grande fête où tous les habitants du royaume magique purent découvrir que le dragon était en réalité très gentil et qu'il pouvait faire griller les guimauves parfaitement !

"Tu vois," dit la baguette, "la plus grande magie, c'est de voir le bon côté des gens et de les aider à briller."

Merlin rentra chez ${gender.possessive} grand-père avec une leçon précieuse et la certitude que la vraie magie existe dans chaque acte de gentillesse.`,

          'Dinosaures': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Dino, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui rêvait de rencontrer de vrais dinosaures.

Un jour, en visitant le musée avec ${gender.possessive} classe, ${gender.pronoun} toucha par accident un œuf de dinosaure fossilisé. Soudain, tout autour de ${gender.possessive} se mit à briller et ${gender.pronoun} se retrouva transporté${formData.gender === 'girl' ? 'e' : ''} à l'époque des dinosaures !

"Où suis-je ?" se demanda Dino en voyant d'énormes fougères et des volcans au loin.

Un petit tricératops s'approcha timidement. "Tu es dans notre monde ! Je m'appelle Tri. Tu n'as pas l'air d'un dinosaure..."

"Je suis un humain du futur !" expliqua Dino, émerveillé${formData.gender === 'girl' ? 'e' : ''}.

Tri présenta Dino à ses amis : Rex le tyrannosaure qui était en réalité très gentil et végétarien, Ptéra la ptérodactyle qui adorait faire des acrobaties, et Brachio le brachiosaure qui connaissait toutes les histoires anciennes.

Mais un jour, un météore menaça de détruire leur vallée paisible. "Comment peut-on sauver notre maison ?" demanda Tri, inquiet.

Dino se souvint alors que ${formData.lesson}. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} rassembla tous les dinosaures et leur montra qu'en travaillant ensemble, ils pouvaient dévier le météore vers l'océan.

Grâce à leur coopération, la vallée fut sauvée. Avant de repartir dans ${gender.possessive} époque, Dino promit à ses amis dinosaures qu'${gender.pronoun} n'oublierait jamais leur leçon d'entraide.`,

          'Sports': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Champion, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui adorait tous les sports mais qui avait peur de participer aux compétitions.

Un matin, en se promenant dans le parc, ${gender.pronoun} découvrit un terrain de sport magique où tous les équipements parlaient !

"Salut Champion !" dit le ballon de football. "Nous t'attendions !"

"Vous m'attendiez ? Mais pourquoi ?" demanda Champion, surpris${formData.gender === 'girl' ? 'e' : ''}.

"Parce que tu as l'esprit sportif le plus pur que nous ayons jamais vu," répondit la raquette de tennis. "Mais tu as peur de montrer tes talents."

Les équipements magiques organisèrent alors des jeux spéciaux pour Champion. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} joua au football avec des nuages, fit de la course avec des lapins enchantés, et nagea avec des poissons arc-en-ciel.

Mais le plus important arriva quand ${gender.pronoun} rencontra un autre enfant qui pleurait sur un banc. "Je ne suis bon dans aucun sport," sanglotait l'enfant.

Champion comprit alors que ${formData.lesson}. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} invita l'enfant à jouer et lui montra que le plus important n'était pas de gagner, mais de s'amuser et de faire de son mieux.

Ensemble, ils organisèrent un tournoi où tout le monde était gagnant, et Champion découvrit que partager sa passion était encore plus gratifiant que de jouer seul.`,

          'Musique': () => `Il était une fois ${gender.article} nommé${formData.gender === 'girl' ? 'e' : ''} Mélodie, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui entendait de la musique partout : dans le chant des oiseaux, le bruit de la pluie, et même dans les pas des gens.

Un jour, ${gender.pronoun} trouva un vieux piano abandonné dans le grenier. Dès qu'${gender.pronoun} appuya sur une touche, le piano se mit à parler !

"Enfin quelqu'un qui comprend vraiment la musique !" s'exclama le piano. "Je suis Harmonius, et j'ai besoin de ton aide."

"Mon aide ? Pour quoi faire ?" demanda Mélodie.

"Le royaume de la Musique a perdu sa mélodie principale. Sans elle, tous les instruments du monde vont devenir silencieux pour toujours !"

Harmonius emmena Mélodie dans un voyage musical extraordinaire. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} rencontra l'Orchestre des Nuages, dansa avec les Notes Volantes, et découvrit que la mélodie perdue était cachée dans le cœur d'un petit garçon triste qui avait arrêté de chanter.

"Pourquoi ne chantes-tu plus ?" demanda Mélodie au garçon.

"Parce que les autres se moquent de ma voix," répondit-il tristement.

Mélodie comprit alors que ${formData.lesson}. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} organisa un concert où chaque voix était unique et précieuse, montrant au garçon que sa mélodie était exactement ce dont le monde avait besoin.

Quand la mélodie fut restaurée, tout l'univers se remit à chanter, et Mélodie apprit que la plus belle musique vient du cœur.`
        };

        // Sélectionner le template approprié ou utiliser une histoire générique
        const storyGenerator = storyTemplates[mainInterest] || (() =>
          `Il était une fois ${gender.article} extraordinaire nommé${formData.gender === 'girl' ? 'e' : ''} Sam, âgé${formData.gender === 'girl' ? 'e' : ''} de ${formData.age} ans, qui adorait ${formData.interests.join(', ')}.

Un jour, ${gender.pronoun} découvrit un monde secret où ${gender.possessive} passion pour ${mainInterest} ${gender.pronoun} menait vers une aventure incroyable. Dans ce monde merveilleux, ${gender.pronoun} rencontra des créatures fantastiques qui lui enseignèrent que ${formData.lesson}.

Grâce à cette précieuse leçon, Sam devint un${formData.gender === 'girl' ? 'e' : ''} guide inspirant${formData.gender === 'girl' ? 'e' : ''} pour tous les enfants, montrant que chaque passion peut mener à de grandes découvertes sur soi-même et sur le monde.

Et depuis ce jour, Sam vécut de nombreuses aventures, toujours guidé${formData.gender === 'girl' ? 'e' : ''} par cette sagesse précieuse.`
        );

        return storyGenerator();
      };

      const sampleStory = generatePersonalizedStory();

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setStoryText(sampleStory);
      setCurrentStep(6);
    } catch (error) {
      console.error('Error generating story:', error);
      alert(t('errorMessage'));
      setCurrentStep(4);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setStoryText('');
    setIsGenerating(false);
    setFormData({
      age: '',
      gender: '',
      interests: [],
      style: '',
      lesson: ''
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.age !== '';
      case 1: return formData.gender !== '';
      case 2: return formData.interests.length > 0;
      case 3: return formData.style !== '';
      case 4: return formData.lesson.trim() !== '';
      default: return true;
    }
  };

  const getStepTitle = () => {
    const titles = [
      t('ageTitle'),
      t('genderTitle'),
      t('interestsTitle'),
      t('styleTitle'),
      t('lessonTitle'),
      t('generatingTitle'),
      t('storyReadyTitle')
    ];
    return titles[currentStep];
  };

  const getStepSubtitle = () => {
    const subtitles = [
      t('ageSubtitle'),
      t('genderSubtitle'),
      t('interestsSubtitle'),
      t('styleSubtitle'),
      t('lessonSubtitle'),
      t('generatingSubtitle'),
      t('storyReadySubtitle')
    ];
    return subtitles[currentStep];
  };

  // Step 0: Age
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-indigo-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">{getStepSubtitle()}</p>
          </div>

          <div className="space-y-6">
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              placeholder={t('agePlaceholder')}
              min="2"
              max="12"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-colors text-2xl text-center font-bold"
              autoFocus
            />

            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {t('continueButton')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500">{t('step1of5')}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{width: '20%'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Gender
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-purple-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">{getStepSubtitle()}</p>
          </div>

          <div className="space-y-4">
            {['boy', 'girl', 'other'].map((gender) => (
              <button
                key={gender}
                onClick={() => setFormData({...formData, gender})}
                className={`w-full py-4 px-6 rounded-2xl border-2 transition-all duration-200 text-center capitalize font-bold text-lg ${
                  formData.gender === gender
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t(gender)}
              </button>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={prevStep}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backButton')}
            </button>
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {t('continueButton')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500">{t('step2of5')}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{width: '40%'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Interests
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-pink-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">{getStepSubtitle()}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`py-3 px-4 rounded-xl border-2 transition-all duration-200 text-center font-medium text-sm ${
                  formData.interests.includes(interest)
                    ? 'border-pink-500 bg-pink-50 text-pink-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevStep}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backButton')}
            </button>
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {t('continueButton')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500">{t('step3of5')}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Style
  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Book className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">{getStepSubtitle()}</p>
          </div>

          <div className="space-y-3 mb-8">
            {styles.map((style) => (
              <button
                key={style.value}
                onClick={() => setFormData({...formData, style: style.value})}
                className={`w-full py-4 px-6 rounded-2xl border-2 transition-all duration-200 text-left font-medium flex items-center gap-4 ${
                  formData.style === style.value
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-3xl">{style.emoji}</span>
                <div>
                  <div className="font-bold">{style.label}</div>
                  <div className="text-sm opacity-70">{style.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevStep}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('backButton')}
            </button>
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {t('continueButton')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500">{t('step4of5')}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{width: '80%'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Lesson
  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">{getStepSubtitle()}</p>
          </div>

          <div className="space-y-6">
            <textarea
              value={formData.lesson}
              onChange={(e) => setFormData({...formData, lesson: e.target.value})}
              placeholder={t('lessonPlaceholder')}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors resize-none h-32 text-lg"
              autoFocus
            />

            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('backButton')}
              </button>
              <button
                onClick={generateStory}
                disabled={!canProceed()}
                className="flex-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {t('createStoryButton')}
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500">{t('step5of5')}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Loading
  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md w-full">
          <div className="animate-pulse mb-6">
            <Moon className="w-16 h-16 text-indigo-400 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{getStepTitle()}</h2>
          <p className="text-gray-600 mb-6">{getStepSubtitle()}</p>
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  // Step 6: Story Display
  if (currentStep === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                  <Book className="w-8 h-8" />
                  {getStepTitle()}
                </h1>
                <p className="text-indigo-100">{getStepSubtitle()}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="prose prose-lg max-w-none mb-8">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-orange-300">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg font-serif">
                    {storyText || "Il était une fois, une merveilleuse histoire qui attendait d'être racontée..."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2 text-indigo-500 mb-4">
                  <Star className="w-5 h-5" />
                  <span className="text-sm font-medium">{t('sweetDreams')}</span>
                  <Star className="w-5 h-5" />
                </div>

                <button
                  onClick={resetForm}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-6 h-6" />
                  {t('createAnotherStory')}
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BedtimeStoryGenerator;
