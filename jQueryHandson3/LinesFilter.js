$(document).ready(() => {
    var resultLines = $("#ta2");
    var result = "";
    var btn = $("#btn");

    btn.click(() => {

        var para = $("textarea#ta1").val()
        var lines = para.split("\n");
        //console.log(para);
        var keywords = $("#words").val().split(",");
        //console.log(lines);
        //console.log(keywords);
        keywords.forEach(element => {
            //result="";
            lines.forEach(line => {
                var line1 = "";
                if (line.includes(element)) {
                    var words = line.split(" ");
                    //console.log(element);
                    words.forEach(key => {
                        //console.log(key);
                        //console.log(element);
                        if (key.includes(element) && (key.length === element.length)) {
                            line1 = line1 + "<b>" + key + "</b> "
                        }
                        else {
                            line1 = line1 + key + " ";
                        }
                        //console.log(line1);
                    })

                    result = result + "\n" + line1;
                    // console.log(result);
                }
            });
        });
        resultLines.text(result);
    })
})