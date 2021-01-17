import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';
@Component({
  selector: 'app-ban',
  templateUrl: './ban.page.html',
  styleUrls: ['./ban.page.scss'],
})
export class BanPage implements OnInit {
  kullanicilar: any[] = [];
  idler: any[] = [];

  ngOnInit() {
   /* this.kullanicilar = [];
    this.idler = [];
    this.firestore.collection("users").get().subscribe((ss) =>
    {
      
      ss.docs.forEach((doc) =>
      {
        this.kullanicilar.push(doc.data());
        this.idler.push(doc.id);
        
      });
    });
*/
  }
 
  constructor(private firestore: AngularFirestore,private router: Router) { 
   this.firestore.collection("users").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
        this.kullanicilar.push(doc.data());
        this.idler.push(doc.id);
        
      });
    });
  }

  kullaniciengelle() {
    var sayac = 0;
    var bantutucu = -5;
    var kullaniciAdi = (<HTMLInputElement>document.getElementById("kullanici")).value;
    

    for (var i = 0; i < this.kullanicilar.length; i++){
      
        if (this.kullanicilar[i].kullaniciAdi == kullaniciAdi) {
          
          sayac++;
          bantutucu = i;
          break;
        }
      }
      
    if (sayac != 0) {
      
     
      var deneme = {
        kullaniciAdi: this.kullanicilar[bantutucu].kullaniciAdi,
        sifre: this.kullanicilar[bantutucu].sifre,
        email: this.kullanicilar[bantutucu].email,
        ban: true,
        yetki:this.kullanicilar[bantutucu].yetki
      }
      
      
      if (this.kullanicilar[bantutucu].ban == true) {
        alert("Kullanıcı Zaten Engelli")
        
        sayac = 0;
      }
      else {
        this.kullanicilar[bantutucu].ban = true;
        this.firestore.doc('users/' + this.idler[bantutucu].toString()).update(deneme);
        alert("Engelleme Başarılı")
        sayac = 0;
      }
      
     
    
    /** SİLMEEEE *///this.firestore.doc('users/'+this.idler[bantutucu].toString()).delete();
        
      }
      else {
        sayac = 0;
        alert("Kullanıcı Bulunamadı")
    }

  }

/*KULLANICI ENGELİ KALDIRMA*/
  
engelikaldir() {
  var sayac = 0;
  var bantutucu = -5;
  var kullaniciAdi = (<HTMLInputElement>document.getElementById("kullanici")).value;
  

  for (var i = 0; i < this.kullanicilar.length; i++){
    
      if (this.kullanicilar[i].kullaniciAdi == kullaniciAdi) {
        
        sayac++;
        bantutucu = i;
      }
    }
    
  if (sayac != 0) {
   
    var deneme = {
      kullaniciAdi: this.kullanicilar[bantutucu].kullaniciAdi,
      sifre: this.kullanicilar[bantutucu].sifre,
      email: this.kullanicilar[bantutucu].email,
      ban: false,
      yetki:this.kullanicilar[bantutucu].yetki
    }
    if (this.kullanicilar[bantutucu].ban == false) { 

      alert("Kullanıcı Engelli Değil")


    }
    else {
      this.kullanicilar[bantutucu].ban = false;
      this.firestore.doc('users/' + this.idler[bantutucu].toString()).update(deneme);
  
    /** SİLMEEEE *///this.firestore.doc('users/'+this.idler[bantutucu].toString()).delete();
      alert("Engelleme Kaldırıldı")
      
        sayac = 0;

     }
    }
  else {
      sayac = 0;
      alert("Kullanıcı Bulunamadı")
    }

}


}
