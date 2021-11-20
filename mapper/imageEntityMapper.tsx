import { ListImageEntity } from "../models/ListImageEntity";

export function imageEntityMapper(imageData: any) {
    return new ListImageEntity(
        imageData.id, 
        imageData.src.medium,
        imageData.photographer,
        imageData.avg_color,
        imageData.src.large
    )
}