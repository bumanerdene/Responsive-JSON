$.getJSON( "data.json", function(data) {
 var items = [];
    var i;
    for(i in data){
        items.push( "<div class='innerDiv'>" + "<img class='imgDiv' src='img/"+ data[i]["picturepath"] + "'>" + "<p class='overText'>" + data[i]["context"]+ "</p>" + "</div>" );
    }
 
  $( "<div/>", {
    "class": "container",
    html: items.join( "" )
  }).appendTo( "body" );
})