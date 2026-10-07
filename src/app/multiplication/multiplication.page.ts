import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList} from '@ionic/angular';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.page.html',
  styleUrls: ['./multiplication.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList, CommonModule, FormsModule]
})
export class MultiplicationPage implements OnInit {
  number: number = 0;
  table: number[] = [];

  calcularTabla() {
    this.table = [];
    for (let i = 1; i <= 14; i++) {
      this.table.push(this.number * i);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
