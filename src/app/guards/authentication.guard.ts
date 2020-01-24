import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AmplifyService } from "aws-amplify-angular";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate, CanLoad {
  constructor(private amplifyService: AmplifyService, private router: Router) {}
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // return this.authenticationService.isAuthenticated.pipe(
    //   take(1),
    //   map((isAuthenticated: boolean) => {
    //     if (!isAuthenticated) {
    //       this.router.navigate([config.superadmin_authentication.route], {
    //         queryParams: {
    //           targetURL: location.pathname + location.search
    //         }
    //       });
    //       return false;
    //     }
    //     return true;
    //   })
    // );

    this.amplifyService.authStateChange$.subscribe(authState => {
      const signedIn = authState.state === "signedIn";
      if (!signedIn) {
        this.router.navigate(["/login"]);
        return true;
      } else {
        this.router.navigate(["/products"]);
      }
      return false;
    });
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    this.amplifyService.authStateChange$.subscribe(authState => {
      const signedIn = authState.state === "signedIn";
      if (!signedIn) {
        this.router.navigate(["/login"]);
        return true;
      } else {
        this.router.navigate(["/products"]);
      }
      return false;
    });
    return true;
  }
}
