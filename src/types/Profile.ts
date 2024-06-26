import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";

export interface Profile {
    name: string,
    profilePicture: string,
    headline: string,
    contact: Contact[],
    socialMedia: SocialMedia[]
}