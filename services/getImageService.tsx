import { api_endpoint } from "../Config";
import { imageEntityMapper } from "../mapper/imageEntityMapper";
import { ListImageEntity } from "../models/ListImageEntity";
import { ServiceContainer } from "./serviceContainer";

export enum RequestMethod {
    Get = 'Get'
}
export class GetImageService {
    execute(id: string) : Promise<ListImageEntity> {
      return new Promise((resolve, reject) => {
        return ServiceContainer.getFetchDataService().execute(
          api_endpoint + 'photos/' + id,
          RequestMethod.Get
        ).then((imageData: any) => {
          resolve(imageEntityMapper(imageData))
        }).catch((e) => {
          reject(e.message)
        })
      })
    }
}