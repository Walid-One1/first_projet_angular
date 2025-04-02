import { Component } from '@angular/core';

@Component({
  selector: 'app-ma-page',
  templateUrl: './ma-page.component.html',
  styleUrls: ['./ma-page.component.css']
})
export class MaPageComponent {
  afficherMessage() {
    alert('Vous avez cliqué sur le bouton !');
  }
}