import { Profile } from "../types/Profile";
import ProfilePicture from '../assets/profile-picture-2.jpeg'

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
            title: "Phone",
            name: "+62 822-8454-1764",
            url: "https://wa.me/6282284541764",
            icon: "fa-solid fa-phone",
        },
        {
            title: "Address",
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
        },
        {
            url: "https://www.instagram.com/irwanto.ng/",
            icon: "fa-brands fa-instagram",
        }
    ]
}