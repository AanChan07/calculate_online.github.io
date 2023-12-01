let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("ERROR!!! Masukkan Inputan yang Benar");
    }
}

function bersih(){
    result.value= " ";
}

function hapus(){
    result.value=result.value.slice(0,-1);
}

