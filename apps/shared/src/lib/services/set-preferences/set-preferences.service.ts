import { Injectable } from "@angular/core";
import { ThemeColor, UserSettings } from "@lib/shared";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class SetPreferencesLibrary {
  private userSettings: UserSettings = { lang: 'en', theme: ThemeColor.Light };
  private languageSubject = new BehaviorSubject<string>(this.userSettings.lang);
  public language$ = this.languageSubject.asObservable();

  constructor() {
    this.loadUserSettings();
  }
  //SETTERS
  private loadUserSettings() {
    const settingsFromStorage = localStorage.getItem("userSettings");
    if (settingsFromStorage) {
      this.userSettings = JSON.parse(settingsFromStorage);
    } else {
      this.detectAndSetUserPreferences();
    }
  }
  private detectAndSetUserPreferences() {
    this.userSettings.lang = navigator.language;
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    this.userSettings.theme = prefersDarkScheme
      ? ThemeColor.Dark
      : ThemeColor.Light;
    this.saveUserSettings();
  }
  private saveUserSettings() {
    localStorage.setItem("userSettings", JSON.stringify(this.userSettings));
  }
  // GETTERS
  public setUserPreferredLang(lang: string) {
    this.userSettings.lang = lang;
    this.saveUserSettings();
    this.languageSubject.next(lang);
  }
  public setUserPreferredTheme(theme: ThemeColor) {
    this.userSettings.theme = theme;
    this.saveUserSettings();
  }
  public getUserSettings() {
    return this.userSettings;
  }
}
