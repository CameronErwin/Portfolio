import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  private _router: Subscription;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element : ElementRef,
    public location: Location,
  ) {}

  ngOnInit() {
    const navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }

      this.renderer.listen('window', 'scroll', () => {
        const scrollHeight = window.scrollY;
        let _location = this.location.path();
        _location = _location.split('/')[2];

        if (scrollHeight > 150 || window.pageYOffset > 150) {
          navbar.classList.remove('navbar-transparent');
        } else {
          // remove logic
          navbar.classList.add('navbar-transparent');
        }
      });
    });
  }
}
