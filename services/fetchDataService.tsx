import { api_access_token } from "../Config";

export enum RequestMethod {
    Get = 'Get'
}
export class FetchDataService {
    execute(
        url: string,
        method: RequestMethod,
        body: any = null,
        abortController: AbortController|null = null
    ) {
        return new Promise((resolve, reject) => {
        const data : any = {
            method: method,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + api_access_token
            },
          }
          if(body){
            data.body = JSON.stringify(body);
          }
          if(abortController) {
            data.signal = abortController.signal;
          }
          fetch(url, data)
          .then((response: any) => {
            return response.json();
          })
          .then((response) => {
            return resolve(response);
          })
          .catch((error) => {
            return reject(error);
          });
        })
    }
}