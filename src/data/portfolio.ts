import { Portfolio } from "../types/Portfolio";

// Youtube Showcase
import Cover1 from '../assets/portfolio/youtube-showcase/cover.png'
import P1Image1 from '../assets/portfolio/youtube-showcase/image-1.png'


// Academia Connect
import Cover2 from '../assets/portfolio/academia/cover.png'
import P2Image1 from '../assets/portfolio/academia/iamge-1.png'
import P2Image2 from '../assets/portfolio/academia/iamge-2.png'
import P2Image3 from '../assets/portfolio/academia/iamge-3.png'
import P2Image4 from '../assets/portfolio/academia/iamge-4.png'
import P2Image5 from '../assets/portfolio/academia/iamge-5.png'


export const portfolio: Portfolio[] = [
    {
        id: 1,
        cover: Cover1,
        title: "Youtube Showcase",
        detail: {
            image: [Cover1, P1Image1],
            description: "",
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
        id: 2,
        cover: Cover2,
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