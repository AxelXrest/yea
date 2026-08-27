const heroPlay = new URL('../assets/Gallery/1.jpg', import.meta.url).href
const heroGroup = new URL('../assets/Gallery/742111074_17971381986087640_6969529160507688559_n..jpg', import.meta.url).href
const heroCulture = new URL('../assets/Gallery/766147205_17975863917087640_3616330027367717205_n..jpg', import.meta.url).href
const galleryOne = new URL('../assets/Gallery/775280571_17978001051087640_3443872459565289741_n..jpg', import.meta.url).href
const galleryTwo = new URL('../assets/Gallery/776100985_17977999314087640_4310472790016784753_n..jpg', import.meta.url).href
const galleryThree = new URL('../assets/Gallery/766544655_17975568642087640_8159387216552451540_n..jpg', import.meta.url).href
const galleryFour = new URL('../assets/Gallery/753933066_17973304881087640_7587009646347083425_n..jpg', import.meta.url).href

export const heroImages = [heroPlay, heroGroup, heroCulture]

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
