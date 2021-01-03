let suggestions=['Antelope Canyon','Glacier National Park','Crater Lake','Game'];

var div2=document.getElementById('div2');
var search_box=document.getElementById('search-box');
var autocom_box=document.getElementsByClassName('autocom-box')[0];
var button_search=document.getElementById('button-search');
var linkTag=document.getElementById('linku');
var webLink;

 search_box.onkeyup = (e)=>{
let userData = e.target.value; //user enetered data
let emptyArray = [];
if(userData){
    button_search.onclick = ()=>{
        if(userData==='Antelope Canyon')
        webLink = 'project1.html';
        else if(userData==='Glacier National Park')
        webLink = 'project2.html';
        else if(userData==='Crater Lake')
        webLink = 'project3.html';
        else if(userData==='Game')
        webLink = 'Game.html';
        else { 
            webLink = '#';

        }
        linkTag.setAttribute("href", webLink);
        linkTag.setAttribute("target","_blank");
        console.log(webLink);
        linkTag.click();
    }
    emptyArray = suggestions.filter((data)=>{
        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
    });
    console.log(emptyArray);
    emptyArray = emptyArray.map((data)=>{
        // passing return data inside li tag
        return data = '<li>'+ data +'</li>';
    });
    autocom_box.setAttribute('class','autocom-box aktive');
    showSuggestions(emptyArray);
    let allList =document.getElementsByTagName('li');
    console.log(allList);
    for (let i = 0; i < allList.length; i++) {
        //adding onclick attribute in all li tag
        allList[i].setAttribute("onclick", "select(this)");
    }
}else{
    autocom_box.setAttribute('class','autocom-box none');
}
}

function select(element){
let selectData = element.textContent;
console.log(selectData);
search_box.value = selectData;
button_search.onclick = ()=>{
    if(selectData==='Antelope Canyon')
        webLink = 'project1.html';
        else if(selectData==='Glacier National Park')
        webLink = 'project2.html';
        else if(selectData==='Crater Lake')
        webLink = 'project3.html';
        else if(selectData==='Game')
        webLink = 'Game.html';
        else { 
            webLink = '#';

        }
        linkTag.setAttribute("href", webLink);
        linkTag.setAttribute("target","_blank");     
        console.log(webLink);
        linkTag.click();
}
autocom_box.setAttribute('class','autocom-box none');
}

function showSuggestions(list){
let listData;
if(!list.length){
    userValue = search_box.value;
    listData = '<li>'+ userValue +'</li>';
}else{
    listData = list.join('');
}
autocom_box.innerHTML = listData;
}

