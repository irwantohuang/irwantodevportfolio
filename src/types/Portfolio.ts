import { PortfolioDetail } from "./PortfolioDetail";

export interface Portfolio {
    id: number,
    cover: string,
    title: string,
    detail: PortfolioDetail
}