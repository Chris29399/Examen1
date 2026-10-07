import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.page.html',
  styleUrls: ['./equation.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, CommonModule, FormsModule]
})
export class EquationPage implements OnInit {
  a: number = 0;
  b: number = 0;
  c: number = 0;

  x1: number | null = null;
  x2: number | null = null;

  calcularEcuacion() {

    if (this.a === 0) {
      alert('El valor de "a" no puede ser cero. Por favor, ingrese un valor válido.');
      return;
    }

    const discriminante = (this.b * this.b) - (4 * this.a * this.c);
    if (discriminante > 0) {
      this.x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
    } else if (discriminante === 0) {
      this.x1 = (-this.b) / (2 * this.a);
      this.x2 = null;
    } else {
      this.x1 = null;
      this.x2 = 0;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
