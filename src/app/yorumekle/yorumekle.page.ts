import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-yorumekle',
  templateUrl: './yorumekle.page.html',
  styleUrls: ['./yorumekle.page.scss'],
})
export class YorumeklePage implements OnInit {
  markalar: any[] = [];
  constructor(private firestore: AngularFirestore,private router: Router)
  { 
    this.firestore.collection("model").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.markalar.push(doc.data());
      });
    });
  }

  markakayit() {
    var sayac = 0;
    var marka = (<HTMLInputElement>document.getElementById("marka")).value;
    var model= (<HTMLInputElement>document.getElementById("model")).value;
      var deneme = {
        marka: (<HTMLInputElement>document.getElementById("marka")).value,
        model: (<HTMLInputElement>document.getElementById("model")).value,
       
      }
   
      for ( var i = 0; i < this.markalar.length; i++){
        if (this.markalar[i].marka == marka && this.markalar[i].model == model ) {
          sayac++;
        }
      }

      if (sayac == 0){
      this.firestore.collection("model").add(deneme);
        alert("Kayıt Başarılı");
          (<HTMLInputElement>document.getElementById("marka")).value = "";
        (<HTMLInputElement>document.getElementById("model")).value = "";
      }
      else {
        sayac = 0;
        alert("Zaten Var")
    }

  }

  ngOnInit() {
  }


}
