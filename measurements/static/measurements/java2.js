 var ct = 1;
    function add_cell(){
        ct++;

        if($('#a'+(ct)).length){
            document.getElementById('a'+ct).style.display='block';

        }else{
            var b1=document.getElementById('b');
            var b2=b1.cloneNode(true);

            b2.id='a'+ct;

            document.getElementById('a').appendChild(b2);
            document.getElementsByClassName('num')[ct-1].innerHTML=ct;
            document.getElementsByClassName('inp')[ct-1].value="";
            document.getElementsByClassName('len')[ct-1].innerHTML='0';
        }
    }

function show_length(element){
      $(element).next()[0].innerHTML=element.value.length;
}

function remove_cell(){
    if(ct!=1){
        var remove=document.getElementById('a'+ct).style.display='none';
        ct--;
    }
}

function sort(){
    var array = [];
    for (var i=0;i<ct;i++) {
        array.push(document.getElementsByClassName("inp")[i].value);
    }
    array.sort();
    for (var i=0;i<ct;i++) {
        document.getElementsByClassName("inp")[i].value=array[i];
        document.getElementsByClassName('len')[i].innerHTML=array[i].length;
    }
}
