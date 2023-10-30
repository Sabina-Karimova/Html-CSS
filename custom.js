let data={
kisiler:[
    {name:"Sabina",surname:"Karimova",age:"32"},
    {name:"Ayaz",surname:"Huseynov",age:"37"},
    {name:"Semra",surname:"Agayeva",age:"34"},
    {name:"Semra",surname:"Agayeva",age:"34"},
],
islem:"Get"
};
//console.log(typeof data);

//var kayit=JSON.stringify(data);// stringe cevirir
//console.log(kayit);
//var cevir=JSON.parse(kayit);JSON veriye cevir
//console.log(cevir);

var kisiler=document.getElementsByClassName("kisiler")[0];
for(let a in data)
{
    console.log(data[a]);
    //for(deger of data)

    for (let b in data[a]) {
        console.log(data[a][b]);
    }
}