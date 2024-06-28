import { PortfolioDetail } from "./PortfolioDetail";

export interface Portfolio {
    id: string,
    category: string[],
    cover: string,
    title: string,
    detail: PortfolioDetail
}