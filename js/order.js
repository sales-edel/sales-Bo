(function () {
    var app = "https://script.google.com/macros/s/AKfycbw0G4EIPNMVCPfqCXt4hm0sdv_80F-Hv6PAYFoGUqeR9k396PB0CAWnYjM8QeSmPA0/exec",
       output = '',
       xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
 
      if (xhr.status == 200) {
         try {
             var r = JSON.parse(xhr.responseText),
                result = r["result"];
                output = `<p>${r["result"][0][0]}</p>`
                output += `<table>`
             for (var i = 1; i < result.length; i++){
                   output += `<tr>`
                   output += `<th>${r["result"][i][0]}</th>`
                   output += `<th>${r["result"][i][2]}</th>`
                   output += `<th>${r["result"][i][5]}</th>`
                   output += `</tr>`
                  //  output += join("<br/>") + "<br/><hr/>";
             }
             output += `</table>`
         } catch(e) {}
      } 
      
    document.getElementById('info').innerHTML = output;
 
    }
    xhr.send()
 })()
 // ---------- original-------------
 /* (function () {
    var app = "https://script.google.com/macros/s/AKfycbw0G4EIPNMVCPfqCXt4hm0sdv_80F-Hv6PAYFoGUqeR9k396PB0CAWnYjM8QeSmPA0/exec",
       output = '',
       xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
 
      if (xhr.status == 200) {
         try {
             var r = JSON.parse(xhr.responseText),
                result = r["result"];
             for (var i = 0; i < result.length; i++){
                   var obj = r["result"][i];
                   output += obj.join("<br/>") + "<br/><hr/>";
             }
         } catch(e) {}
      } 
      
    document.getElementById('info').innerHTML = output;
 
    }
    xhr.send()
 })() */