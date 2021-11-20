import { api_endpoint } from "../Config";
import { imageEntityMapper } from "../mapper/imageEntityMapper";
import { PaginatedImageList } from "../models/PaginatedImageListEntity";
import { ServiceContainer } from "./serviceContainer";

export enum RequestMethod {
    Get = 'Get'
}
export class GetImagesService {
    execute(query: string, page: number = 1, perPage: number = 25) : Promise<PaginatedImageList> {
      return new Promise((resolve, reject) => {
        return ServiceContainer.getFetchDataService().execute(
          api_endpoint + `search?query=${query}&per_page=${perPage}&page=${page}&orientation=square`,
          RequestMethod.Get
        ).then((result: any) => {
          const images = result.photos.map((imageData: any) => {
            return imageEntityMapper(imageData)
          })
          resolve(new PaginatedImageList(images))
        }).catch((e) => {
          reject(e.message)
        })
      })
    }
}