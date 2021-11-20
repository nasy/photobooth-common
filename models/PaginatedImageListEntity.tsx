import { ListImageEntity } from "./ListImageEntity";

export class PaginatedImageList {
    constructor(
        public readonly images: ListImageEntity[]
    ) {}
}