import { PortfolioDetail } from "./PortfolioDetail";

export interface Portfolio {
    id: string,
    cover: string,
    title: string,
    detail: PortfolioDetail
}