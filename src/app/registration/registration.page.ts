import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  kullanicilar: any[] = [];
  constructor(private firestore: AngularFirestore,private router: Router)
  { 
    this.firestore.collection("users").get().subscribe((ss) =>
    {
      ss.docs.forEach((doc) =>
      {
     this.kullanicilar.push(doc.data());
      });
    });
  }

  kayit() {
    var kullaniciadi=(<HTMLInputElement>document.getElementById("kullaniciAdi")).value;
    var sayac = 0;
    if ((<HTMLInputElement>document.getElementById("sifre")).value == (<HTMLInputElement>document.getElementById("sifreTekrar")).value)
    {
      if ((<HTMLInputElement>document.getElementById("kullaniciAdi")).value != "" && (<HTMLInputElement>document.getElementById("sifre")).value && (<HTMLInputElement>document.getElementById("email")).value) {
        var deneme = {
          kullaniciAdi: (<HTMLInputElement>document.getElementById("kullaniciAdi")).value,
          sifre: (<HTMLInputElement>document.getElementById("sifre")).value,
          email: (<HTMLInputElement>document.getElementById("email")).value,
          yetki: false,
          ban: false
        }
      
        for (var i = 0; i < this.kullanicilar.length; i++) {
          if (this.kullanicilar[i].kullaniciAdi == kullaniciadi) {
            sayac++;
          }
        }

        if (sayac == 0) {
          this.firestore.collection("users").add(deneme);
          alert("Kayıt Başarılı")
          this.router.navigate(['home'])
        }
        else {
          alert("Kullanıcı Adı Kullanılmaktadır. Başka Kullanıcı Adı Seçiniz")
        }
      
      }
      else {
      alert("Boş alan bırakmayınız")
      }
    }
    
    else {
      alert("Lütfen Şifrenizi Kontrol Ediniz")
    }
  }

  ngOnInit() {
  }

}
