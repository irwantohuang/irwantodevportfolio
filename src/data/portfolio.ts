import { Portfolio } from "../types/Portfolio";

// Youtube Showcase
import Cover1 from '../assets/portfolio/youtube-showcase/cover.png'
import P1Image0 from '../assets/portfolio/youtube-showcase/image-0.png'
import P1Image1 from '../assets/portfolio/youtube-showcase/image-1.png'
import P1Image2 from '../assets/portfolio/youtube-showcase/image-2.png'
import P1Image3 from '../assets/portfolio/youtube-showcase/image-3.png'
import P1Image4 from '../assets/portfolio/youtube-showcase/image-4.png'
import P1Image5 from '../assets/portfolio/youtube-showcase/image-5.png'
import P1Image6 from '../assets/portfolio/youtube-showcase/image-6.png'
import P1Image7 from '../assets/portfolio/youtube-showcase/image-7.png'
import P1Image8 from '../assets/portfolio/youtube-showcase/image-8.png'
import P1Image9 from '../assets/portfolio/youtube-showcase/image-9.png'


// Academia Connect
import Cover2 from '../assets/portfolio/academia/cover.png'
import P2Image1 from '../assets/portfolio/academia/image-1.png'
import P2Image2 from '../assets/portfolio/academia/image-2.png'
import P2Image3 from '../assets/portfolio/academia/image-3.png'
import P2Image4 from '../assets/portfolio/academia/image-4.png'
import P2Image5 from '../assets/portfolio/academia/image-5.png'


// Netflix
import Cover3 from '../assets/portfolio/clone/netflix/cover.png'
import P3Image1 from '../assets/portfolio/clone/netflix/image-1.png'
import P3Image2 from '../assets/portfolio/clone/netflix/image-2.png'
import P3Image3 from '../assets/portfolio/clone/netflix/image-3.png'
import P3Image4 from '../assets/portfolio/clone/netflix/image-4.png'
import P3Image5 from '../assets/portfolio/clone/netflix/image-5.png'

// Interno
import Cover4 from '../assets/portfolio/interno/cover.png'
import P4Image1 from '../assets/portfolio/interno/image-1.png'
import P4Image2 from '../assets/portfolio/interno/image-2.png'
import P4Image3 from '../assets/portfolio/interno/image-3.png'
import P4Image4 from '../assets/portfolio/interno/image-4.png'
import P4Image5 from '../assets/portfolio/interno/image-5.png'
import P4Image6 from '../assets/portfolio/interno/image-6.png'
import P4Image7 from '../assets/portfolio/interno/image-7.png'
import P4Image8 from '../assets/portfolio/interno/image-8.png'
import P4Image9 from '../assets/portfolio/interno/image-9.png'


// Portfolio 1
import Cover6 from '../assets/portfolio/portfolio-1/cover.png'
import P6Image1 from '../assets/portfolio/portfolio-1/image-1.png'
import P6Image2 from '../assets/portfolio/portfolio-1/image-2.png'
import P6Image3 from '../assets/portfolio/portfolio-1/image-3.png'
import P6Image4 from '../assets/portfolio/portfolio-1/image-4.png'
import P6Image5 from '../assets/portfolio/portfolio-1/image-5.png'
import P6Image6 from '../assets/portfolio/portfolio-1/image-6.png'
import P6Image7 from '../assets/portfolio/portfolio-1/image-7.png'

export const portfolio: Portfolio[] = [
    {
        id: '7b224ccc-aac7-4ff0-8759-5ae3d370922a',
        category: ['Web Development'],
        cover: Cover1,
        title: "Youtube Showcase",
        detail: {
            image: [Cover1, P1Image1, P1Image0, P1Image2, P1Image3, P1Image4, P1Image5, P1Image6, P1Image7, P1Image8, P1Image9],
            description: "Youtube Showcase - Channel Nihonggo Mantappu, ID. is a project I created to showcase a YouTube playlist, specifically focusing on 'Waseda Boys World Trip's Playlist'. The project aims to highlight video content using Google's YouTube API v3, emphasizing modern technology and informative design. It provides users with an easy and enjoyable way to navigate and consume content.",
            technology: [
                { title: "Core Technologies", tecnology: ['Vue.js', 'Typescript', 'TailwindCSS'] },
                { title: "Libraries and Framework", tecnology: ['Vue Router', 'Vuex', 'Axios', 'Swiper', 'Font Awesome'] },
                { title: "API Integration", tecnology: ['Google APi v3 (for fetching data from YouTube)'] }
            ],
            livePreview: "https://vue-youtube-showcase.netlify.app/",
            githubLink: "https://github.com/irwantohuang/nihonggo-mantappu-showcase"
        }
    },
    {
        id: 'ddfac99c-4a50-4b37-bcc5-025bb25baeb0',
        category: ['Web Development'],
        cover: Cover2,
        title: "Academia Connect",
        detail: {
            image: [Cover2, P2Image1, P2Image2, P2Image3, P2Image4, P2Image5],
            description: "Academia is an innovative educational platform designed to revolutionize learning experiences. It serves as a centralized hub for students, educators, and institutions alike, offering a dynamic ecosystem that fosters collaboration, knowledge-sharing, and personal growth.",
            technology: [
                { title: "Core Technologies", tecnology: ['Vue.js', 'TailwindCSS'] },
            ],
            livePreview: "https://academiaconnect.netlify.app/",
            githubLink: "https://github.com/irwantohuang/academia"
        }
    },
    {
        id: '13aad3fc-bb28-45a6-9c4d-fb1a0882a1e5',
        category: ['Web Development', 'Cloning'],
        cover: Cover3,
        title: "Nerflix Clone",
        detail: {
            image: [Cover3, P3Image1, P3Image2, P3Image3, P3Image4, P3Image5],
            description: "Netflix Clone is a project aimed at recreating the popular streaming platform’s user interface. It allows users to browse through a library of movies and TV shows, watch trailers, and experience a seamless media streaming experience.",
            technology: [
                { title: "Core Technologies", tecnology: ['HTML', 'CSS', 'Javascript'] },
            ],
            livePreview: "https://irwantohuang.github.io/netflix-clone.github.io/",
            githubLink: "https://github.com/irwantohuang/netflix-clone.github.io"
        }
    },
    {
        id: '5dbc1bb1-a576-4db6-8150-e885147c94dc',
        category: ['Web Development'],
        cover: Cover4,
        title: "Interno",
        detail: {
            image: [Cover4, P4Image1, P4Image2, P4Image3, P4Image4, P4Image5, P4Image6, P4Image7, P4Image8, P4Image9],
            description: "A dummy landing page designed for interno. an interior design concept. the focus was on creating an aesthetically pleasing and inviting interface to captivate visitors.",
            technology: [
                { title: "Core Technologies", tecnology: ['HTML', 'TailwindCSS', 'Javascript'] },
                { title: "Libraries and Framework", tecnology: ['Swiper', 'Remix Icon'] },

            ],
            livePreview: "https://internopages.netlify.app/",
            githubLink: "https://github.com/irwantohuang/interno"
        }
    },
    {
        id: '4b3d2845-39ca-4153-8915-5bb0f0e57411',
        category: ['Web Development'],
        cover: Cover6,
        title: "Landing Page - Portfolio",
        detail: {
            image: [Cover6, P6Image1, P6Image2, P6Image3, P6Image4, P6Image5, P6Image6, P6Image7 ],
            description: "The project serves as a platform for showcasing various works and projects, featuring a light and dark mode option for user preference. The emphasis is on presenting information clearly and engagingly, ensuring an optimal user experience.",
            technology: [
                { title: "Core Technologies", tecnology: ['Vue.js', 'TailwindCSS'] },
                { title: "Libraries and Framework", tecnology: ['AOS', 'Font Awesome'] },
            ],
            livePreview: "https://vuewithtailwind.netlify.app/",
            githubLink: "https://github.com/irwantohuang/portfolio-vue-tailwind"
        }
    },
]