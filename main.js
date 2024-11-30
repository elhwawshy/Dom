




function jops(){
    var work = document.querySelector("#works").value;
    var result = document.querySelector("#results");
if (work==""){
    return false;

}else{
    var myli = document.createElement("li");
    myli.innerHTML = work;

    var colors = ["red"];

        myli.style.color = colors   ;
        myli.style.padding = "10px";
        myli.style.margin = "5px 0";

    result.append(myli);
    document.querySelector("#works").value = "";
    return false;
}
}
