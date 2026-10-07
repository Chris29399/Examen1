import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, RouterLink, CommonModule, FormsModule]
})
export class PresentationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
