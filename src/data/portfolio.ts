import { Portfolio } from "../types/Portfolio";

import Cryptotrack from '../../public/assets/images/cryptotrack.png'
import YoutubeClone from '../../public/assets/images/youtube-clone.png'
import YoutubeShowcase from '../../public/assets/images/youtube-showcase.png'
import Academia from '../../public/assets/images/academia.png'
import NetflixClone from '../../public/assets/images/netflix-clone.png'


const youtubeUrl = "https://www.youtube-nocookie.com"
export const portfolios: Portfolio[] = [
    {
        id: 1,
        category: ['Web Development'],
        thumbnailUrl: Cryptotrack,
        videoUrl: `${youtubeUrl}/embed/na_WvfObblA`,
        title: "Cryptotrack",
        portfolioDetail: {
            description: "Cryptotrack is a landing page offering real-time crypto data, the latest news, security tips, and live charts. Built using CoinRanking and News API, it provides a simple and secure platform for users to stay updated on the crypto market.",
            techStack: ["React", "Typescript", "TailwindCSS", "Redux", "Chart.js", "Axios", "CoinRanking API", "News API", "react-router-dom"],
            liveUrl: "https://cryptotrackprod.netlify.app/",
            githubUrl: "https://github.com/irwantohuang/cryptotrack"
        }
    },
    {
        id: 2,
        category: ['Web Development', 'Cloning'],
        thumbnailUrl: YoutubeClone,
        videoUrl: `${youtubeUrl}/embed/S0Tno-xBoHc`,
        title: "Youtube Clone",
        portfolioDetail: {
            description: "YouTube Clone is an application that replicates the look and feel of YouTube. It features a video and playlist display, allowing users to easily browse through content. The application provides a streamlined viewing experience.",
            techStack: ["React", "Typescript", "TailwindCSS"],
            liveUrl: "https://ytclonebyhuang.netlify.app",
            githubUrl: "https://github.com/irwantohuang/youtube-clone"
        }
    },
    {
        id: 3,
        category: ['Web Development'],
        thumbnailUrl: YoutubeShowcase,
        videoUrl: `${youtubeUrl}/embed/46j2eAI_6kY`,
        title: "Youtube Showcase",
        portfolioDetail: {
            description: "Youtube Showcase - Channel Nihonggo Mantappu, ID. is a project I created to showcase a YouTube playlist, specifically focusing on 'Waseda Boys World Trip's Playlist'. The project aims to highlight video content using Google's YouTube API v3, emphasizing modern technology and informative design. It provides users with an easy and enjoyable way to navigate and consume content.",
            techStack: ["Vue.js", "Typescript", "TailwindCSS", "Axios", "Swiper", "Google APi v3", "Vue Router", "Vuex"],
            liveUrl: "https://vue-youtube-showcase.netlify.app/",
            githubUrl: "https://github.com/irwantohuang/nihonggo-mantappu-showcase",
        }
    },
    {
        id: 4,
        category: ['Web Development'],
        thumbnailUrl: Academia,
        videoUrl: null,
        title: "Academia",
        portfolioDetail: {
            description: "Academia is an innovative educational platform designed to revolutionize learning experiences. It serves as a centralized hub for students, educators, and institutions alike, offering a dynamic ecosystem that fosters collaboration, knowledge-sharing, and personal growth.",
            techStack: ["Vue.js", "TailwindCSS"],
            liveUrl: "https://academiaconnect.netlify.app/",
            githubUrl: "https://github.com/irwantohuang/nihonggo-mantappu-showcase",
        }
    },
    {
        id: 5,
        category: ['Web Development', 'Cloning'],
        thumbnailUrl: NetflixClone,
        videoUrl: null,
        title: "Netflix Clone",
        portfolioDetail: {
            description: "Netflix Clone is a project aimed at recreating the popular streaming platform’s user interface. It allows users to browse through a library of movies and TV shows, watch trailers, and experience a seamless media streaming experience.",
            techStack: ["HTML", "CSS", "Javascript"],
            liveUrl: "https://netfclonebyhuang.netlify.app/",
            githubUrl: "https://github.com/irwantohuang/netflix-clone"
        }
    }
]