import { FetchDataService } from "./fetchDataService";
import { GetImagesService } from "./getImagesService";

export class ServiceContainer {

    public static getFetchDataService() : FetchDataService {
        return new FetchDataService();
    }

    public static getGetImagesService() : GetImagesService {
        return new GetImagesService();
    }
}