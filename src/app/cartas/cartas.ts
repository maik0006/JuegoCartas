import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas',
  standalone: false,
  templateUrl: './cartas.html',
  styleUrl: './cartas.css'
})
export class Cartas {

  baraja =["😒","😍","😍","🎙️","🎮","😒","🐕‍🦺","🐂","🕰️","🎙️","🐂","🧐","🎮","🐕‍🦺","🕰️","🧐"];

    Reinicio() {
    this.baraja = this.shuffleArray(this.baraja);
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
}
