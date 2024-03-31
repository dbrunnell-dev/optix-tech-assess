export type Movie = {
    id: number;
    reviews: number[];
    title: string;
    filmCompanyId: string;
    cost: number;
    releaseYear: number;
};

export type MovieCompanies = {
    id: string;
    name: string;
};