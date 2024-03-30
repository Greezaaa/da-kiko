import { Pipe, PipeTransform } from "@angular/core";
import { TranslationService } from "@lib/shared";
import { Observable } from "rxjs";

@Pipe({
  standalone: true,
  name: "translate",
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: string): Observable<string> {
    return this.translationService.translate(value);
  }
}
