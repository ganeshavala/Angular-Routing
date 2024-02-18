import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server{
    id: number,
    name: string,
    status:string
}

/**
 * The @Injectable() decorator marks the ServerResolver class as a provider for dependency injection.
    The constructor method injects the ServersService dependency into the ServerResolver class.
    The resolve method implements the Resolve interface and retrieves a server from the ServersService based on the route parameters.
 */
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>| Promise<Server>|Server{
        return this.serversService.getServer(+route.params['id']);
    }
}