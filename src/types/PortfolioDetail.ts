import { TechnologyDetail } from "./TechnologyDetail"

export interface PortfolioDetail {
    image: string[]
    description: string,
    technology: TechnologyDetail[]
    livePreview: string,
    githubLink: string,
}