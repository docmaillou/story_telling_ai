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
  }
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;

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
      // Génération d'une histoire personnalisée avec des noms appropriés
      const generatePersonalizedStory = () => {
        // Noms selon le genre
        const names = {
          boy: ['Alex', 'Lucas', 'Théo', 'Nathan', 'Hugo', 'Louis', 'Arthur', 'Gabriel', 'Raphaël', 'Tom'],
          girl: ['Emma', 'Léa', 'Chloé', 'Manon', 'Sarah', 'Jade', 'Lola', 'Zoé', 'Alice', 'Inès'],
          other: ['Alex', 'Charlie', 'Sam', 'Jordan', 'Riley', 'Avery', 'Quinn', 'Taylor', 'Morgan', 'Casey']
        };

        const selectedNames = names[formData.gender] || names.other;
        const characterName = selectedNames[Math.floor(Math.random() * selectedNames.length)];

        const genderInfo = {
          boy: { article: 'un petit garçon', pronoun: 'il', possessive: 'son', direct: 'le', past: '', agreement: '' },
          girl: { article: 'une petite fille', pronoun: 'elle', possessive: 'sa', direct: 'la', past: 'e', agreement: 'e' },
          other: { article: 'un enfant', pronoun: 'iel', possessive: 'son', direct: 'l\'', past: '', agreement: '' }
        };

        const gender = genderInfo[formData.gender] || genderInfo.other;
        const mainInterest = formData.interests[0] || 'les aventures';

        // Histoire personnalisée selon l'intérêt principal
        const storyTemplates = {
          'Animaux': () => `Il était une fois ${gender.article} nommé${gender.agreement} ${characterName}, âgé${gender.agreement} de ${formData.age} ans, qui rêvait de parler aux animaux.

Un matin, en se promenant dans la forêt enchantée près de chez ${gender.possessive} grand-mère, ${characterName} découvrit un petit renard blessé caché sous un buisson. ${gender.pronoun.charAt(0).toUpperCase() + gender.pronoun.slice(1)} s'approcha doucement et, à ${gender.possessive} grande surprise, ${gender.pronoun} entendit le renard murmurer : "S'il te plaît, aide-moi..."

"Tu peux parler !" s'exclama ${characterName}, les yeux écarquillés.

"Bien sûr que je peux parler," répondit le renard avec un petit sourire. "Tous les animaux peuvent parler, mais seuls les enfants au cœur pur peuvent nous entendre."

${characterName} soigna délicatement la patte du renard avec des feuilles médicinales que lui montra un vieux hibou sage. En retour, les animaux de la forêt lui enseignèrent leurs secrets et surtout que ${formData.lesson}.

Quand vint l'heure de rentrer, le renard dit : "${characterName}, tu as appris aujourd'hui une leçon précieuse. N'oublie jamais cette sagesse, car elle te guidera dans toutes tes aventures."

De retour chez ${gender.possessive} grand-mère, ${characterName} s'endormit en souriant, sachant qu'${gender.pronoun} avait trouvé des amis pour la vie.`,

          'Magie et Fantaisie': () => `Il était une fois ${gender.article} nommé${gender.agreement} ${characterName}, âgé${gender.agreement} de ${formData.age} ans, qui trouvait toujours des objets étranges dans le grenier de ${gender.possessive} grand-père.

Ce jour-là, ${gender.pronoun} découvrit une vieille baguette magique couverte de poussière. Dès qu'${gender.pronoun} la toucha, la baguette se mit à briller et une voix douce résonna :

"Enfin ! J'attendais ${gender.direct} bon${gender.agreement} apprenti${gender.agreement} magicien${formData.gender === 'girl' ? 'ne' : ''} depuis si longtemps !"

"Apprenti${gender.agreement} magicien${formData.gender === 'girl' ? 'ne' : ''} ? Moi ?" s'étonna ${characterName}.

"Bien sûr ! Mais attention, la vraie magie ne vient pas de la baguette, elle vient du cœur," expliqua la voix mystérieuse.

La baguette emmena ${characterName} dans un monde fantastique où ${gender.pronoun} rencontra un dragon triste qui pleurait dans une caverne. En comprenant que ${formData.lesson}, ${characterName} organisa une grande fête où tous découvrirent que le dragon était en réalité très gentil.

"Tu vois," dit la baguette, "la plus grande magie, c'est de voir le bon côté des gens et de les aider à briller."

${characterName} rentra chez ${gender.possessive} grand-père avec une leçon précieuse et la certitude que la vraie magie existe dans chaque acte de gentillesse.`
        };

        // Utiliser le template approprié ou une histoire générique
        const storyGenerator = storyTemplates[mainInterest] || (() =>
          `Il était une fois ${gender.article} extraordinaire nommé${gender.agreement} ${characterName}, âgé${gender.agreement} de ${formData.age} ans, qui adorait ${formData.interests.join(', ')}.

Un jour, ${gender.pronoun} découvrit un monde secret où ${gender.possessive} passion pour ${mainInterest} ${gender.pronoun} menait vers une aventure incroyable. Dans ce monde merveilleux, ${gender.pronoun} rencontra des créatures fantastiques qui lui enseignèrent que ${formData.lesson}.

Grâce à cette précieuse leçon, ${characterName} devint un${gender.agreement} guide inspirant${gender.agreement} pour tous les enfants, montrant que chaque passion peut mener à de grandes découvertes.

Et depuis ce jour, ${characterName} vécut de nombreuses aventures, toujours guidé${gender.agreement} par cette sagesse précieuse.`
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
                    {storyText || "Once upon a time, there was a wonderful story waiting to be told..."}
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
