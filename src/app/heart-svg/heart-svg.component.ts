import { Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-heart-svg',
  templateUrl: './heart-svg.component.html',
  styleUrls: ['./heart-svg.component.css']
})
export class HeartSvgComponent {
  @Input() topPipingColor = '';
  @Input() bottomPipingColor = '';
  @Input() mainIcingColor = '';
}
