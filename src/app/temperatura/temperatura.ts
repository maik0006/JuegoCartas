import { Component } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-temperatura',
  standalone: false,
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css'
})
export class Temperatura {
  
 temperatura?: number;
  categoria: string = '';

  categorizar() {

    if (this.temperatura === undefined) {
      this.categoria = 'none';
      return;
    }

    if (this.temperatura < 10) {
      this.categoria = 'muyfrio';
    } else if (this.temperatura >= 10 && this.temperatura <= 15) {
      this.categoria = 'frio';
    } else if (this.temperatura > 15 && this.temperatura <= 30) {
      this.categoria = 'templado';
    } else {
      this.categoria = 'caliente';
    }
  }

}
