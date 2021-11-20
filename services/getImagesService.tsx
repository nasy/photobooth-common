import { api_endpoint } from "../Config";
import { ListImageEntity } from "../models/ListImageEntity";
import { PaginatedImageList } from "../models/PaginatedImageListEntity";
import { ServiceContainer } from "./serviceContainer";

export enum RequestMethod {
    Get = 'Get'
}
export class GetImagesService {
    execute() : Promise<PaginatedImageList> {
      return new Promise((resolve, reject) => {
        return ServiceContainer.getFetchDataService().execute(
          api_endpoint + 'search?query=nature&per_page=25&orientation=square',
          RequestMethod.Get
        ).then((result: any) => {
          const images = result.photos.map((imageData: any) => {
            return new ListImageEntity(imageData.id, imageData.src.medium)
          })
          resolve(new PaginatedImageList(images))
        }).catch((e) => {
          reject(e.message)
        })
      })
    }
}