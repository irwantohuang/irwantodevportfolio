import { PortfolioDetail } from "./PortfolioDetail";

export interface Portfolio {
    id: string | number,
    category: string[],
    thumbnailUrl: string,
    videoUrl: string,
    title: string,
    portfolioDetail: PortfolioDetail
}