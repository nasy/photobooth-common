import { FetchDataService } from "./fetchDataService";
import { GetImagesService } from "./getImagesService";
import { GetImageService } from "./getImageService";

export class ServiceContainer {

    public static getFetchDataService() : FetchDataService {
        return new FetchDataService();
    }

    public static getGetImagesService() : GetImagesService {
        return new GetImagesService();
    }

    public static getGetImageService() : GetImageService {
        return new GetImageService();
    }
}