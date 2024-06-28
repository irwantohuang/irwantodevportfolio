import { Portfolio } from "../types/Portfolio";

// Youtube Showcase
import Cover1 from '../assets/portfolio/youtube-showcase/cover.png'
import P1Image1 from '../assets/portfolio/youtube-showcase/image-1.png'


// Academia Connect
import Cover2 from '../assets/portfolio/academia/cover.png'
import P2Image1 from '../assets/portfolio/academia/image-1.png'
import P2Image2 from '../assets/portfolio/academia/image-2.png'
import P2Image3 from '../assets/portfolio/academia/image-3.png'
import P2Image4 from '../assets/portfolio/academia/image-4.png'
import P2Image5 from '../assets/portfolio/academia/image-5.png'


export const portfolio: Portfolio[] = [
    {
        id: '7b224ccc-aac7-4ff0-8759-5ae3d370922a',
        cover: Cover1,
        title: "Youtube Showcase",
        detail: {
            image: [Cover1, P1Image1],
            description: "Youtube Showcase - Channel Nihonggo Mantappu, ID. is a project I created to showcase a YouTube playlist, specifically focusing on 'Waseda Boys World Trip's Playlist'. The project aims to highlight video content using Google's YouTube API v3, emphasizing modern technology and informative design. It provides users with an easy and enjoyable way to navigate and consume content.",
            technology: [
                { title: "Core Technologies", tecnology: ['Vue.js', 'Typescript', 'TailwindCSS'] },
                { title: "Libraries and Framework", tecnology: ['Vue Router', 'Vuex', 'Axios', 'Swiper', 'Font Awesome'] },
                { title: "API Integration", tecnology: ['Google APi v3 (for fetching data from YouTube)'] }
            ],
            livePreview: "https://vue-youtube-showcase.netlify.app/",
            githubLink: "https://github.com/irwantohuang/nihonggo-mantappu-showcase/tree/main"
        }
    },
    {
        id: 'ddfac99c-4a50-4b37-bcc5-025bb25baeb0',
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
        cover: P1Image1,
        title: "Academia Connect",
        detail: {
            image: [Cover2, P2Image1, P2Image2, P2Image3, P2Image4, P2Image5],
            description: "",
            technology: [
                { title: "Core Technologies", tecnology: ['Vue.js', 'TailwindCSS'] },
            ],
            livePreview: "https://academiaconnect.netlify.app/",
            githubLink: "https://github.com/irwantohuang/academia"
        }
    },
    {
        id: 'b47dac76-e216-4249-b9cf-fa3adf26f297',
        cover: P2Image1,
        title: "Academia Connect",
        detail: {
            image: [Cover2, P2Image1, P2Image2, P2Image3, P2Image4, P2Image5],
            description: "",
            technology: [
                { title: "Core Technologies", tecnology: ['Vue.js', 'TailwindCSS'] },
            ],
            livePreview: "https://academiaconnect.netlify.app/",
            githubLink: "https://github.com/irwantohuang/academia"
        }
    },
]