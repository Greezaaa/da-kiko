import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { SetPreferencesLibrary } from '../set-preferences/set-preferences.service';

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private translations: any = {};

  constructor(
    private http: HttpClient,
    private preferencesService: SetPreferencesLibrary
  ) {
    this.preferencesService.language$.subscribe((lang) => {
      this.loadTranslations(lang);
    });
  }

   private loadTranslations(lang: string) {
    const path = `assets/i18n/${lang}.json`;
    this.http
      .get<any>(path)
      .pipe(
        catchError(() => {
          const fallbackLang = lang.split("-")[0];
          if (fallbackLang !== lang) {
            const fallbackPath = `assets/i18n/${fallbackLang}.json`;
            return this.http.get<any>(fallbackPath).pipe(
              catchError(() => this.loadFallbackEnglish())
            );
          } else {
            return this.loadFallbackEnglish();
          }
        }),
        tap((translations) => (this.translations = translations))
      )
      .subscribe();
  }

  private loadFallbackEnglish() {
    const fallbackEnglishPath = `assets/i18n/en.json`;
    return this.http.get<any>(fallbackEnglishPath).pipe(
      catchError(() => of({}))
    );
  }

  translate(key: string): Observable<string> {
    const translation = key
      .split(".")
      .reduce((acc, part) => acc && acc[part], this.translations);
    return of(translation || key);
  }
}
