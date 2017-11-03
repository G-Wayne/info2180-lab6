window.onload = function(){

  //For search Button
  var button = document.getElementById("button");
  button.addEventListener("click",search);

  //For Get All Defintions Button
  var allDefinitions = document.getElementById("definitions");
  allDefinitions.addEventListener("click",searchAll);

  //For search
  var httpRequest = new XMLHttpRequest();
  //For Get All Defintions
  var httpRequest2 = new XMLHttpRequest();
  var answer = document.getElementById('result');
  var sourceUrl = "https://info2180-lab6-glawton.c9users.io/request.php?q=";

  //For search button
  function search(){
    var searchBy = document.getElementById("check").value.toLowerCase();
    if(searchBy.length === 0){
      answer.innerHTML = "No search criteria entered";
    }else{
      var url = sourceUrl + searchBy;
      //alert(url);
      httpRequest.open("GET",url, true);
      httpRequest.send();

    httpRequest.onreadystatechange = function(){
      if (httpRequest.readyState===XMLHttpRequest.DONE){
        if(httpRequest.status===200){
          var response = httpRequest.responseText;
          //alert(response);
          answer.innerHTML = response;
        }else{
          answer.innerHTML = "There was a problem with the request.Invalid search criteria";
        }


      }
    }

  }

}

var parser = new window.DOMParser();

//For all definitions search button
function searchAll() {

    var allUrl = "https://info2180-lab6-glawton.c9users.io/request.php?q=&all=true";
    httpRequest2.open("GET",allUrl, true);
    httpRequest2.send();

      httpRequest2.onreadystatechange = function(){
        if (httpRequest2.readyState===XMLHttpRequest.DONE){
          if(httpRequest2.status===200){
            var xmlDoc = parser.parseFromString(this.responseText, "application/xml");
            console.log(xmlDoc);

    			var definitions = xmlDoc.getElementsByTagName("definition");
    			//create ordered list
    			var list = document.createElement("ol");

    			//iterate through definition tags and add to list.
    			for (var tag =0; tag<definitions.length; tag++){

    			  //create tags
    			  var heading = document.createElement("h3");
    			  var details = document.createElement("p");
    			  var author = document.createElement("p");
    			  var item = document.createElement("li");

    			  //create text
    			  var text = document.createTextNode(definitions[tag].childNodes[0].nodeValue);
    			  var headingText = document.createTextNode(definitions[tag].attributes[0].value.toUpperCase());
    			  var authorText = document.createTextNode('-' + definitions[tag].attributes[1].value);

    			  //Add text to tags
    			  heading.appendChild(headingText);
    			  details.appendChild(text);
    			  author.appendChild(authorText);

    			  //Add tags to list items
    			  item.appendChild(heading);
    			  item.appendChild(details);
    			  item.appendChild(author);

            //All all tags created to the list
    			  list.appendChild(item);

    			}

    			answer.appendChild(list);


        }


      }

}
}
}
