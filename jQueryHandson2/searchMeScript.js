$(document).ready(()=>{
    var text=$("p").text();
    console.log(text);
    var texts=text.split(" ");
    console.log(texts);
    var last="";
    
    texts.forEach(element => {
        
        if(element.includes("th"))
        {
            console.log(element);
            last=last+"<span class=\"th\">"+element+" </span>";

        }
        else{

            last=last+"<span class=\"non\">"+element+" </span>";
        }

    });

    console.log(text);
    $("p").html(last);
    
})