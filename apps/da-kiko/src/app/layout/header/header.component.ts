import { Component } from "@angular/core";
import { DialogLibrary, DialogMode, SetPreferencesLibrary } from "@lib/shared";
import { languages } from '../../extras/languages';
@Component({
  standalone: true,
  selector: "kiko-layout-header",
  templateUrl: "./header.component.html",
  imports: [DialogLibrary]
})
export class LayoutHeaderComponent  {
  
constructor(private _sP: SetPreferencesLibrary) { }
  public _langs = languages
  
ngOnInit(): void {
    this.getPreferences()
  }

  state: DialogMode = 0;
  isOpen: boolean = false;
  
  getPreferences() {
   this._sP.getUserSettings() 
  }

  setLang(lang: string): void {
    this._sP.setUserPreferredLang(lang)
  }

  change() {
    this.state =
      this.state === DialogMode.login ? DialogMode.signin : DialogMode.login;
  }
  close() {
    this.isOpen = false;
  }
 } 
