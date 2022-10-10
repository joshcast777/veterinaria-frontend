import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private _authService: AuthService, private _router: Router) {}

	canActivate(): Observable<boolean> {
		return this.returnValidation();
	}

	canLoad(): Observable<boolean> {
		return this.returnValidation();
	}

	private returnValidation(): Observable<boolean> {
		return this._authService.validateToken().pipe(
			map((validated: boolean): boolean => {
				if (validated) this._router.navigate(["/user"]);

				return !validated;
			})
		);
	}
}
