import { Component, OnInit } from '@angular/core';
import { DialogLibrary, DialogMode, SetPreferencesLibrary } from '@lib/shared';
import { TranslateService } from '@ngx-translate/core';

import { languages } from '../../extras/languages';
@Component({
  standalone: true,
  selector: 'kiko-layout-header',
  templateUrl: 'header.component.html',
  imports: [DialogLibrary],
})
export class LayoutHeaderComponent implements OnInit {
  constructor(private _sP: SetPreferencesLibrary, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  public _langs = languages;

  ngOnInit(): void {
    this.getPreferences();
  }

  state: DialogMode = 0;
  isOpen = false;

  getPreferences() {
    this._sP.getUserSettings();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  change() {
    this.state = this.state === DialogMode.login ? DialogMode.signin : DialogMode.login;
  }
  close() {
    this.isOpen = false;
  }
}
