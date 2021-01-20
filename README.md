Uygulamanın Genel Özellikleri: Uygulama insanların araba almadan önce alacağı araba hakkında önceden bilgi sahibi olmasını sağlamayı amaçlamıştır.
Bu bilgilere o arabayı kullananların, araba hakkındaki görüşlerini bildirmesi ile ulaşmaktadır.
Veritabanı olarak firebase kullanılmıştır. Uygulamada kullanıcı giriş ve kayıt kısmı bulunmaktadır.Kullanıcı kayıt olduktan sonra kullanıcı adı ve şifreden oluşan giriş kısmını tamamlayınca
kullanıcı eğer veritabanında yönetici olarak tanımlı ise yönetici sayfasına, normal üye olarak tanımlı ise normal üye sayfasına yönlendirilmektedir. Projedeki firebase tabloları aşağıda gösterilmiştir.

![alt text](https://github.com/furkanyildizz/images/blob/main/firebasetablolar.PNG)

PROJEYİ DENEMEK AMACI İLE:

-Kullanıcı adı: yetki
-Şifre: yetki
olarak yönetici oluşturulmuştur ayrıca

-Kullanıcı adı: furkan
-Şifre: furkan
olarak kullanıcı oluşturulmuştur. GİRİŞ SAYFASI aşağıdaki gibidir.


![alt text](https://github.com/furkanyildizz/images/blob/main/G%C4%B0R%C4%B0%C5%9ESAYFASI.PNG)![alt text](https://github.com/furkanyildizz/images/blob/main/kay%C4%B1tol.PNG) 

Kullanıcı kayıt olduktan sonra yetkilendirme işlemi sadece firebase üzerinden yapılabilmektedir.Örnek olarak Audi-R8 Kategorisinde yorumlar bulunmaktadır. 
Yönetici sayfasında ise 2 adet yorum onaylanmak üzere beklemektedir.


YÖNETİCİ SAYFASINDA:

MODEL EKLEME: Araba markasını ve modelini yazarak veritabanındaki model tablosuna ekler.

![alt text](https://github.com/furkanyildizz/images/blob/main/markakaydedildi.PNG)

Bu şekilde deneme markası ve deneme modelinde bi araba eklemiş olduk.

KULLANICI SAYFASINDA:

YORUM EKLE: Kullanıcı kullandığı arabanın marka ve modeli seçer. Daha sonra başlık yazar(MODEL YILI-MOTOR SEÇENEĞİ bilgilerini burada bildirerek okuyacak olan kişiye kolaylık sağlar) 
başlığı yazdıktan sonra yorumunu yazar(ARTILARI-EKSİLERİ-KRONİK PROBLEMLERİ) sonrasında Yorum Ekle der ve yorumunu onaylanmak üzere göndermiş olur. Az önce eklediğimiz deneme markasına yorum ekleyelim.

![alt text](https://github.com/furkanyildizz/images/blob/main/yorumeklendi.PNG)

YÖNETİCİ SAYFASINDA:

YORUM ONAYLA: Burada yönetici arabalar hakkında yapılan yorumları onay testinden geçirmektedir.YORUM OKUdaki kategori aramaya göre onaylanacak yorumu görebilir veya 
"HEPSİNİ GETİR" butonu ile bütün arabalara ait yorumları ekrana getirebilir. Ekrana gelen yorumları "Onayla" basarak yorumu onaylar ve kullanıcıların yorumu görebilmesini sağlar veyahut
"Sil" butonuna basarak o yorumu beklenenler tablosundan siler.

![alt text](https://github.com/furkanyildizz/images/blob/main/kategorionayla.PNG)![alt text](https://github.com/furkanyildizz/images/blob/main/hepsinigetir.PNG)

YORUM OKU: Kullanıcıların arabalar hakkında yapılan ve onaylanama aşamasından geçen yorumları görebilmektedir. Bu yorumlar hangi kategoriye ait ise o kategori seçilerek görülebilir.
Örneğin Audi markası ve R8 seçilerek Audi-R8 hakkında yapılan yorumlar gözükmektedir.



KULLANICI ENGELLE: Burada yönetici kullanıcıları engelleme işlemi yapar. Engelleyeceği kullanıcının kullanıcı adını girerek engelleme işlemi yapar. Kullanıcı uygulamadan çıkış yaptıktan sonra daha giremez. 
KULLANICI ADI PRİMARY KEYDİR AYNI OLAMAZ.

KULLANICI SAYFASINDA

YORUM EKLE: Kullanıcı kullandığı arabanın marka ve modeli seçer. Daha sonra başlık yazar(MODEL YILI-MOTOR SEÇENEĞİ bilgilerini burada bildirerek okuyacak olan kişiye kolaylık sağlar) 
başlığı yazdıktan sonra yorumunu yazar(ARTILARI-EKSİLERİ-KRONİK PROBLEMLERİ) sonrasında Yorum Ekle der ve yorumunu onaylanmak üzere göndermiş olur.

YORUMLARI OKU: Kullanıcı alacağı arabanın kategorisini seçerek bu araba hakkında yönetici tarafından onaylanmış yorumları görmektedir.

HATIRLATMA!!: 
-Kullanıcı tarafından eklenen yorumlar beklenenler tablosuna düşmektedir ve onaylama yapılmadan yorum oku bölümünde gözükmemektedir.
-Uygulama Firebase kullanılarak yapıldığı için anlık olarak tabloları göstermekte bazen aksilikler yaşanmaktadır. Sayfayı yenileme işlemi ile güncel veriler gösterilmektedir.
