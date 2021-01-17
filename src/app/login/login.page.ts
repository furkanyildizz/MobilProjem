import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  kullanicilar: any[] = [];
  constructor(private firestore: AngularFirestore,private router: Router) { 
    this.firestore.collection("users").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.kullanicilar.push(doc.data());
      });
    });
  }

  ngOnInit() {
  }


  giris() {
    var kullaniciadi= (<HTMLInputElement>document.getElementById("kullaniciGiris")).value;
    var sifre = (<HTMLInputElement>document.getElementById("sifreGiris")).value;
    var sayac = 0;
   
    for (var i = 0; i < this.kullanicilar.length; i++) {
      if (this.kullanicilar[i].kullaniciAdi == kullaniciadi && this.kullanicilar[i].sifre == sifre) {
        if (this.kullanicilar[i].ban == false) { 
        alert("Giriş Başarılı")
        if (this.kullanicilar[i].yetki == false) {
          
          this.router.navigate(['anasayfa'])
        }
        if (this.kullanicilar[i].yetki == true) {
          this.router.navigate(['yonetici'])
        }
        sayac++;
        }
        if (this.kullanicilar[i].ban == true) {
          alert("Hesabınız Engellendi")
          sayac++;
        }
    }
    }
    if (sayac == 0) {
      alert("Bilgilerinizi Kontrol Ediniz")
    }
    
    this.kullanicilar= [];

    this.firestore.collection("users").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.kullanicilar.push(doc.data());
      });
    });
  
      

  }

}
