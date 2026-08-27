const heroPlay = new URL('../assets/Gallery/1.jpg', import.meta.url).href
const heroGroup = new URL('../assets/Gallery/742111074_17971381986087640_6969529160507688559_n..jpg', import.meta.url).href
const heroIndoorGroup = new URL('../assets/Gallery/766662154_17975864136087640_1016867383154150636_n..jpg', import.meta.url).href
const heroGarden = new URL('../assets/Gallery/670236112_17958748455087640_8986407078884567280_n..jpg', import.meta.url).href
const heroTemple = new URL('../assets/Gallery/781207533_17978001009087640_2180159510811775563_n..jpg', import.meta.url).href
const heroCulture = new URL('../assets/Gallery/766147205_17975863917087640_3616330027367717205_n..jpg', import.meta.url).href
const galleryOne = new URL('../assets/Gallery/775280571_17978001051087640_3443872459565289741_n..jpg', import.meta.url).href
const galleryTwo = new URL('../assets/Gallery/776100985_17977999314087640_4310472790016784753_n..jpg', import.meta.url).href
const galleryThree = new URL('../assets/Gallery/766544655_17975568642087640_8159387216552451540_n..jpg', import.meta.url).href
const galleryFour = new URL('../assets/Gallery/753933066_17973304881087640_7587009646347083425_n..jpg', import.meta.url).href

export const heroImages = [heroIndoorGroup, heroTemple, heroGarden, heroGroup, heroPlay, heroCulture]

export const galleryImages = [
  { image: heroGroup, alt: 'Students gathered together on a school trip', label: 'Together is a great place to learn' },
  { image: galleryOne, alt: 'Children exploring an outdoor activity', label: 'Curiosity in motion' },
  { image: galleryTwo, alt: 'Students enjoying a creative activity', label: 'Making room for imagination' },
  { image: galleryThree, alt: 'Children learning through play', label: 'Every day brings a new discovery' },
  { image: galleryFour, alt: 'Students creating art together', label: 'Little hands, big ideas' },
  { image: heroCulture, alt: 'Children exploring outdoors in the rain', label: 'Adventure in every season' },
  { image: heroPlay, alt: 'Children playing together outdoors', label: 'Play with purpose' },
  { image: new URL('../assets/Gallery/777851459_17977998012087640_6601087737842884828_n..jpg', import.meta.url).href, alt: 'Children sharing a birthday celebration', label: 'Birthday Club', event: 'Celebrate & connect' },
  { image: new URL('../assets/Gallery/777851461_17978000754087640_8914441800792142805_n..jpg', import.meta.url).href, alt: 'Children riding together through the city', label: 'City Discovery', event: 'Explore beyond the classroom' },
  { image: new URL('../assets/Gallery/777948242_17977997826087640_9067701903931635830_n..jpg', import.meta.url).href, alt: 'Children gathered at a birthday party', label: 'Party Day', event: 'Celebrate & connect' },
  { image: new URL('../assets/Gallery/778565198_17977997856087640_1968658231480188747_n..jpg', import.meta.url).href, alt: 'Child enjoying a birthday activity', label: 'Big Milestones', event: 'Every achievement matters' },
  { image: new URL('../assets/Gallery/780024071_17977999494087640_6892820437427729248_n..jpg', import.meta.url).href, alt: 'Children sorting corn outdoors', label: 'Harvest Workshop', event: 'Learn from local traditions' },
  { image: new URL('../assets/Gallery/780619802_17977999278087640_552755670126777521_n..jpg', import.meta.url).href, alt: 'Student learning a traditional rope-making activity', label: 'Hands-on Heritage', event: 'Learn by making' },
  { image: new URL('../assets/Gallery/780949610_17977999329087640_5652128031770456245_n..jpg', import.meta.url).href, alt: 'Student taking part in a traditional basket activity', label: 'Brave New Skills', event: 'Try something different' },
  { image: new URL('../assets/Gallery/781163769_17977999359087640_2746452966096676493_n..jpg', import.meta.url).href, alt: 'Adult and child sharing a cultural activity', label: 'Community Day', event: 'Grow together' },
]

export const programs = [
  {
    title: 'Early Explorers',
    age: 'Ages 3–6',
    description: 'Play-based learning that builds confidence, language and curiosity from the very beginning.',
    image: galleryOne,
  },
  {
    title: 'Growing Learners',
    age: 'Ages 7–12',
    description: 'After-school support and creative challenges that make every afternoon count.',
    image: galleryTwo,
  },
  {
    title: 'Teen Explorers',
    age: 'Ages 13–17',
    description: 'Leadership, teamwork and real-world projects for confident young people.',
    image: galleryThree,
  },
  {
    title: 'Creative Arts Studio',
    age: 'Ages 3–17',
    description: 'Music, movement, art and imaginative projects for every stage of growing up.',
    image: galleryFour,
  },
]

export const teachers = [
  { name: 'Emma Wilson', role: 'Lead Teacher', image: heroGroup },
  { name: 'Noah Carter', role: 'Learning Coach', image: galleryOne },
  { name: 'Mia Johnson', role: 'Creative Teacher', image: galleryTwo },
  { name: 'Liam Brown', role: 'Activity Mentor', image: heroPlay },
]

export const faqs = [
  ['What age groups do you welcome?', 'Our programs welcome students from ages 3 to 17, with activities and support shaped around each developmental stage.'],
  ['What does a typical day look like?', 'Children move through guided learning, free play, creative activities, outdoor time, meals and quiet moments in a predictable rhythm.'],
  ['How do you support different learning styles?', 'Teachers use movement, stories, music, sensory activities and hands-on projects so children can learn in ways that feel natural to them.'],
  ['Can parents visit before enrolling?', 'Absolutely. We encourage families to schedule a visit, meet the teachers and see the learning environment before making a decision.'],
]

export const blogPosts = [
  { title: 'Simple Ways To Build Your Child’s Confidence', category: 'Parenting', image: programs[0].image },
  { title: 'How To Create Healthy Daily Routines', category: 'Wellbeing', image: programs[2].image },
  { title: 'Fun Learning Activities To Do At Home', category: 'Activities', image: programs[3].image },
]
