'use strict'
window.addEventListener('load', () => {
   let year = 2;
   try{
      console.log(year);
      // alert(year);
      // decodificar una url
      // console.log(decodeURIComponent("https://g%$oogle.com"));// como que la manda formateadilla? XD
      // let vector = new Array(9999999999999999999999999999);
   }catch(error){
      console.log({error});
      alert(`Ha ocurrido un error en el código. ${error}`);
   }

});