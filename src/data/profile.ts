import { Profile } from "../types/Profile";
// import ProfilePicture from '../assets/profile-picture-2.jpeg'
import ProfilePicture from '../../public/assets/images/pp.jpeg'

export const profile: Profile = {
    name: "Irwanto Huang",
    profilePicture: ProfilePicture,
    headline: 'Frontend Web Developer',
    contact: [
        {
            title: "Email",
            name: "irwanto.ng11@gmail.com",
            url: "#",
            icon: "fa-solid fa-envelope",
        },
        {
            title: "Location",
            name: "Jakarta, Indonesia",
            url: "#",
            icon: "fa-solid fa-location-dot",           
        }
    ],
    socialMedia: [
        {
            url: "https://www.linkedin.com/in/irwanto-huang-99651215b/",
            icon: "fa-brands fa-linkedin",
        },
        {
            url: "https://github.com/irwantohuang",
            icon: "fa-brands fa-github",
        }
    ]
}