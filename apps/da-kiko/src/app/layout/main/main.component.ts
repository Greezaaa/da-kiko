import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@lib/shared";

@Component({
  standalone: true,
  selector: "kiko-layout-main",
  templateUrl: "./main.component.html",
  imports: [ TranslatePipe, CommonModule]
})
export class LayoutMainComponent { } 
