import { Profile } from "../types/Profile";
import ProfilePicture from '../assets/profile-picture-2.jpeg'

export const profile: Profile = {
    name: "Irwanto Huang",
    profilePicture: ProfilePicture,
    headline: 'Frontend Web Developer',
    contact: [
        {
            title: "Email",
            url: "irwanto.ng11@gmai.com",
            icon: "fa-solid fa-envelope",
        },
        {
            title: "Phone",
            url: "+62 822-8454-1764",
            icon: "fa-solid fa-phone",
        },
        {
            title: "Address",
            url: "Jakarta, Indonesia",
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
    // contact: {
    //     email: {
    //         title: "Email",
    //         url: "irwanto.ng11@gmai.com",
    //         icon: "fa-solid fa-envelope",
    //     },
    //     phone: {
    //         title: "Phone",
    //         url: "+62 822-8454-1764",
    //         icon: "fa-solid fa-phone",
    //     },
    //     address: {
    //         title: "Address",
    //         url: "Jakarta, Indonesia",
    //         icon: "fa-solid fa-location-dot",
    //     },
    // },
    // socialMedia: {
    //     linkedIn: {
    //         url: "https://www.linkedin.com/in/irwanto-huang-99651215b/",
    //         icon: "fa-brands fa-linkedin",
    //     },
    //     github: {
    //         url: "https://github.com/irwantohuang",
    //         icon: "fa-brands fa-github",
    //     },
    //     instagram: {
    //         url: "https://www.instagram.com/irwanto.ng/",
    //         icon: "fa-brands fa-instagram",
    //     },
    // }
}