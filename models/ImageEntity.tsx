export class ImageEntity {
    constructor(
        public readonly id: string, 
        public readonly url: string,
        public readonly photographer: string,
        public readonly avgColor: string,
        public readonly largeUrl: string,
    ) {}
}