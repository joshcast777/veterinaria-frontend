import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
	providedIn: "root"
})
export class UserGuard implements CanActivate, CanLoad {
	constructor(private _authService: AuthService, private _router: Router) {}

	canActivate(): Observable<boolean> {
		return this.returnValidation();
	}

	canLoad(): Observable<boolean> {
		return this.returnValidation();
	}

	private returnValidation(): Observable<boolean> {
		return this._authService.validateToken().pipe(
			tap((validated: boolean): void => {
				if (!validated) this._router.navigate(["/auth/login"]);
			})
		);
	}
}
