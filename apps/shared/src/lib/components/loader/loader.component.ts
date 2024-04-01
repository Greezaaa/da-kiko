import { Component, Input } from "@angular/core";

/**
 * `LoaderLibrary` component displays a loading indicator.
 * 
 * Usage:
 * ```html
 * <lib-loader [height]="20"></lib-loader>
 * ```
 * 
 * @Input `height`: Height of the loader in pixels. Default value is `40`.
 */
@Component({
  selector: 'lib-loader',
  standalone: true,
  templateUrl: 'loader.component.html',
  styleUrl: 'loader.component.scss'
})
  
export class LoaderLibrary{
    /**
   * Height of the loader in pixels.
   */
  @Input() public height: number = 40
}