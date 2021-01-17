import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';
@Component({
  selector: 'app-yorumekle2',
  templateUrl: './yorumekle2.page.html',
  styleUrls: ['./yorumekle2.page.scss'],
})
export class Yorumekle2Page implements OnInit {
  markalar: any[] = [];
  duzeltilmismarkalar: any[] = [];
  tiklananmarkamodelleri: any[] = [];
  
  constructor(private firestore: AngularFirestore,private router: Router) { 
    this.firestore.collection("model").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.markalar.push(doc.data());
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


  yorumekle2() {
    
      var deneme = {
        marka: (<HTMLInputElement>document.getElementById("markasiekle")).value,
        model: (<HTMLInputElement>document.getElementById("modeliekle")).value,
        baslik: (<HTMLInputElement>document.getElementById("baslik")).value,
        yorum: (<HTMLInputElement>document.getElementById("yorum")).value,
      }
    
      this.firestore.collection("beklenen").add(deneme);
    alert("Yorumunuz Onaylanmak Üzere Gönderildi");
    (<HTMLInputElement>document.getElementById("markasiekle")).value = "";
    (<HTMLInputElement>document.getElementById("modeliekle")).value="";
    (<HTMLInputElement>document.getElementById("baslik")).value="";
    (<HTMLInputElement>document.getElementById("yorum")).value = "";
    



   }

  
  modelgetir() {
    
    this.tiklananmarkamodelleri = [];
    var marka = (<HTMLInputElement>document.getElementById("markasiekle")).value;
    (<HTMLInputElement>document.getElementById("modeliekle")).value="";
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
