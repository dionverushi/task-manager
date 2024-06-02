import { Sort } from '../constants/sort.enum';
export declare class PageOptionsDto {
    readonly search?: string;
    readonly sort?: Sort;
    readonly page?: number;
    readonly take?: number;
    get skip(): number;
}
