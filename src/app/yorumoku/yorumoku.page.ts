import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-yorumoku',
  templateUrl: './yorumoku.page.html',
  styleUrls: ['./yorumoku.page.scss'],
})
export class YorumokuPage implements OnInit {

  markalar: any[] = [];
  duzeltilmismarkalar: any[] = [];
  tiklananmarkamodelleri: any[] = [];
  beklenenler: any[] = [];
  beklenenlerbulundu: any[] = [];
  
  constructor(private firestore: AngularFirestore, private router: Router) { 
    
    this.firestore.collection("model").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.markalar.push(doc.data());
      });
    });

    this.firestore.collection("onaylanan").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
      });
    });
   
    setTimeout(() => 
    {
  for (let index = 0; index < this.markalar.length; index++) {
       var varmi = false;
    for (let index2 = 0; index2 < this.duzeltilmismarkalar.length; index2++) {
      if (this.markalar[index].marka == this.duzeltilmismarkalar[index2].marka) {
        varmi = true;
      }
    }
    if (varmi == false) {
      this.duzeltilmismarkalar.push(this.markalar[index]);
           }
    }
    },
  500);
   }


  yorumoku() {
    this.beklenenlerbulundu=[];
    var marka = (<HTMLInputElement>document.getElementById("markasioku")).value;
    var model = (<HTMLInputElement>document.getElementById("modelioku")).value;
    for (let index = 0; index < this.beklenenler.length; index++) {
      if (this.beklenenler[index].marka ==marka && this.beklenenler[index].model ==model) {
        this.beklenenlerbulundu.push(this.beklenenler[index]);
      }
    }
    
   }

  
  modelgetir() {
    var marka = (<HTMLInputElement>document.getElementById("markasioku")).value;
    //alert("markası"+(<HTMLInputElement>document.getElementById("markasioku")).value)
    this.beklenenler=[];
    this.firestore.collection("onaylanan").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
      });
    });

    
    this.tiklananmarkamodelleri = [];
    
    (<HTMLInputElement>document.getElementById("modelioku")).value = "";
    
    for (let index = 0; index < this.markalar.length; index++) {
      if (this.markalar[index].marka ==marka) {
        this.tiklananmarkamodelleri.push(this.markalar[index]);
      }
    }

    this.markalar = [];
    this.firestore.collection("model").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.markalar.push(doc.data());
      });
    });

  }
 


  ngOnInit() {
  }

}
