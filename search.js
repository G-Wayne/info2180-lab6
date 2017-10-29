window.onload = function(){
  var button = document.getElementById("button");
  button.addEventListener("click",search);

  var httpRequest = new XMLHttpRequest();
  var url = "https://info2180-lab6-glawton.c9users.io/request.php?q=definition";

  function search(){
    httpRequest.onreadystatechange = function(){
      if (httpRequest.readyState===XMLHttpRequest.DONE){
        if(httpRequest.status===200){
          var response = httpRequest.responseText;
          alert(response);
      }else{
          alert("There was a problem with the request.");
      }
    }

  }
    httpRequest.open("GET",url, true);
    httpRequest.send();
}
}
