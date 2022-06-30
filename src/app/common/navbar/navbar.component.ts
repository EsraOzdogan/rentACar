import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'tr']);
    // Set default language
    this.translate.setDefaultLang('en');
  }
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
