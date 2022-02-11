


var resu = 0;
resu = resu+recu(2);
console.log(resu);

function recu (num)
{

    let resu =0;
    if(num==1){
        return num*2
    }else{
        return resu + recu(num-1)*2
    }
}

