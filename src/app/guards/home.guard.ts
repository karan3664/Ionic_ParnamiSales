import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})

export class HomeGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router) { }
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService
        .getData()
        .then(res => {
          if (res) {
            resolve(true);
          } else {
            this.router.navigate(['login']);
            resolve(false);
          }
        })
        .catch(err => {
          resolve(false);
        });
    });
  }
}
