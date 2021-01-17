import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-yorumonayla',
  templateUrl: './yorumonayla.page.html',
  styleUrls: ['./yorumonayla.page.scss'],
})
export class YorumonaylaPage implements OnInit {

  markalar: any[] = [];
  duzeltilmismarkalar: any[] = [];
  tiklananmarkamodelleri: any[] = [];
  beklenenler: any[] = [];
  beklenenlerbulundu: any[] = [];
  idler: any[] = [];
  idlermarka: any[] = [];
  
  constructor(private firestore: AngularFirestore, private router: Router) { 
    
    this.firestore.collection("model").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
        this.markalar.push(doc.data());
        this.idlermarka.push(doc.id);
      });
    });

    this.firestore.collection("beklenen").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
     this.idler.push(doc.id);
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
  1000);
   }


  yorumoku() {
    this.beklenenlerbulundu=[];
    var marka = (<HTMLInputElement>document.getElementById("markasionayla")).value;
    var model = (<HTMLInputElement>document.getElementById("modelionayla")).value;
    
    
    for (let index = 0; index < this.beklenenler.length; index++) {
      if (this.beklenenler[index].marka ==marka && this.beklenenler[index].model ==model) {
        this.beklenenlerbulundu.push(this.beklenenler[index]);
      }
    }
  }

  onayla(dizim) {
    for (let index = 0; index < this.beklenenler.length; index++) {
      if (this.beklenenler[index].baslik == dizim.baslik && this.beklenenler[index].yorum == dizim.yorum) {
        alert("Yorum Onaylandı")
        this.firestore.collection("onaylanan").add(dizim)
        this.firestore.doc('beklenen/'+this.idler[index].toString()).delete();
      }
    }
    this.idler = [];
    this.beklenenler = [];
    this.firestore.collection("beklenen").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
     this.idler.push(doc.id);
      });
    });
    this.beklenenlerbulundu=[];
    this.hepsinigetir();

  }
  

  sil(dizim) {
    for (let index = 0; index < this.beklenenler.length; index++) {
      if (this.beklenenler[index].baslik == dizim.baslik && this.beklenenler[index].yorum == dizim.yorum) {
        alert("Yorum Silindi")
        this.firestore.doc('beklenen/'+this.idler[index].toString()).delete();
      }
    }
    this.idler = [];
    this.beklenenler = [];
    this.firestore.collection("beklenen").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
     this.idler.push(doc.id);
      });
    });
    this.hepsinigetir();
  }


  hepsinigetir() {
   
    this.beklenenlerbulundu=[];
    for (let index = 0; index < this.beklenenler.length; index++) {
      
        this.beklenenlerbulundu.push(this.beklenenler[index]);
      
    }

    this.idler = [];
    this.beklenenler = [];
    this.firestore.collection("beklenen").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
     this.idler.push(doc.id);
      });
    });

  }


  
  modelgetir() {
    this.beklenenler=[];
  
    this.firestore.collection("beklenen").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.beklenenler.push(doc.data());
      });
    });
    this.tiklananmarkamodelleri = [];
    var marka = (<HTMLInputElement>document.getElementById("markasionayla")).value;
    (<HTMLInputElement>document.getElementById("modelionayla")).value="";
    for (let index = 0; index < this.markalar.length; index++) {
      if (this.markalar[index].marka ==marka) {
        this.tiklananmarkamodelleri.push(this.markalar[index]);
      }
    }

  }
 


  ngOnInit() {
  }


}
