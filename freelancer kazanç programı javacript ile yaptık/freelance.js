var toplamUcret=document.getElementById("toplam"),
sure=document.getElementById("bitis"),
buton=document.getElementById("buton"),
sonucDiv=document.getElementById("sonuc"),
paraBirimi=prompt("Para Birimi Giriniz...");

document.getElementById("para").innerHTML="para biriminiz "+paraBirimi+" <a id='degistirici' href='#'>değiştir</a>";


document.getElementById("degistirici").addEventListener("click",function(){
    paraBirimi=prompt("ParaBirimi Giriniz");
    document.getElementById("para").innerHTML="para biriminiz "+paraBirimi+" <a id='degistirici' href='#'>değiştir</a>";
    
});
buton.addEventListener("click",function(){
    var gunlukUcret=toplamUcret.value/sure.value;
    gunlukUcret=gunlukUcret.toFixed(2);/*virgülden sonraki 2 basamağı göster*/
    sonucDiv.innerHTML="Gunluk ucretiniz = "+gunlukUcret+ " " +paraBirimi;
    
});