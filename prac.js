// alert("As salam Alykum");


var alphabetButton = document.querySelectorAll(".alpha").length;
for(var i = 0; i < alphabetButton; i++){
  
    document.querySelectorAll(".alpha")[i].addEventListener("click", function(){
        // console.log(this.innerHTML);

    //     var alif = new Audio('Audios/001-alif.mp3');
    //   alif.play();
    var alphabetButton = this.innerHTML;

     switch (alphabetButton) {
        case "<p>أ</p> ALIF":
            var alif = new Audio('Audios/001-alif.mp3');
        alif.play();
            break;
     
        case "<p>ت</p> TA":
            var taa = new Audio('Audios/003-taa.mp3');
        taa.play();
            break;

        case "<p>ث</p> THA":
            var tha = new Audio('Audios/004-tha.mp3');
            tha.play();
             break;

         case "<p>ج</p> JIM":
            var jim = new Audio('Audios/005-jeem.mp3');
                jim.play();
                 break;

        case "<p>ح</p> HA":
                var haa = new Audio('Audios/006-haa.mp3');
                haa.play();
                 break;

          case "<p>خ</p> KHA":
        var kho = new Audio('Audios/007-khaa.mp3');
        kho.play();
            break;
        case "<p>د</p> DAL":
            var dal = new Audio('Audios/008-dal.mp3');
            dal.play();
           break;
         case "<p>ذ</p> DHAL":
           var dhal = new Audio('Audios/009-dhal.mp3');
          dhal.play();
         break;
         case "<p>ر</p> RO":
        var raa = new Audio('Audios/010-raa.mp3');
           raa.play();
          break;
      case "<p>ز</p> ZAIN":
         var zain = new Audio('Audios/011-jaa.mp3');
          zain.play();
        break;
       case "<p>س</p> SIN":
        var sin = new Audio('Audios/012-seen.mp3');
         sin.play();
        break;
      case "<p>ش</p> SHIN":
       var shin = new Audio('Audios/013-sheen.mp3');
     shin.play();
      break;
      case "<p>ص</p> SHOD":
        var saad = new Audio('Audios/014-saad.mp3');
        saad.play();
            break;
        case "<p>ض</p> DHOD":
        var dod = new Audio('Audios/015-dhaad.mp3');
         dod.play();
          break;
        case "<p>ط</p> TOH":
        var toa = new Audio('Audios/016-toa.mp3');
        toa.play();
        break;
        case "<p>ظ</p> ZHOH":
        var zhoh = new Audio('Audios/017-dhaa.mp3');
        zhoh.play();
        break;
        case "<p>ع</p> AIN":
         var ain = new Audio('Audios/018-ain.mp3');
        ain.play();
         break;
         case "<p>غ</p> GOIN":
        var goin = new Audio('Audios/019-ghain.mp3');
        goin.play();
        break;
        case "<p>ف</p> FA":
        var faa = new Audio('Audios/020-faa.mp3');
        faa.play();
        break;
        case "<p>ق</p> KOF":
        var kof = new Audio('Audios/021-qaaf.mp3');
        kof.play();
        break;
        case "<p>ك</p> KAF":
        var kaaf = new Audio('Audios/022-kaaf.mp3');
        kaaf.play();
        break;
        case "<p>ل</p> LAM":
        var lam = new Audio('Audios/023-laam.mp3');
        lam.play();
        break;
        case "<p>م</p> MIM":
        var mim = new Audio('Audios/024-meem.mp3');
        mim.play();
        break;
        case "<p>ن</p> NUN":
        var nun = new Audio('Audios/025-noon.mp3');
        nun.play();
        break;
        case "<p>و</p> WAW":
        var waw = new Audio('Audios/026-waw.mp3');
        waw.play();
        break;
        case "<p>هـ</p> HAW":
        var haw = new Audio('Audios/027-ha.mp3');
        haw.play();
        break;
        case "<p>ء</p> HAMZA":
            var hamza = new Audio('Audios/028-hamza.mp3');
            hamza.play();
            break;
         case "<p>ي</p> YAA":
            var yaa = new Audio('Audios/029-yaa.mp3');
            yaa.play();
            break;


        default:
            break;
     }


});
}
