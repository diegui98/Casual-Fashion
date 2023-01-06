import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/features/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.cartService.getCheckoutClicked()) {
      return true;
    } else {
      this.router.navigate(['/Home']);
      return false;
    }
  }
}
