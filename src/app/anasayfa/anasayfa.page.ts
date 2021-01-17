import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {

  constructor(private firestore: AngularFirestore,private router: Router) { }

  ngOnInit() {
  }

  girisegit() {
    this.router.navigate(['home'])

  }
}
