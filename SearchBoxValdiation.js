    const people=[
    'pithoragarh, uttarakhand', 'munnar, kerala','valley of flowers, uttarakhand', 'kaas plateau, maharashtra',
    'most beautiful places in the united states', 'quick links', 'how to find us']
    let search=document.getElementById('search-box');
    let list=document.getElementById('list');
    search.addEventListener('input',f);


    function setList(array){
    clearList();
    for (let i = 0; i < array.length; i++) {
    const item=document.createElement('li');
    item.classList.add("list-group-item");
    const text=document.createTextNode(array[i]);
    item.appendChild(text);
    list.appendChild(item);

}
    if(array.length===0){
    setNoResult();
}
}
    function setNoResult(){
    const item=document.createElement("li");
    item.classList.add('list-group-item');
    const text=document.createTextNode('No Results');
    item.appendChild(text);
    list.appendChild(item);
}
    function clearList(){
    while (list.firstChild){
    list.removeChild(list.firstChild);
}
}
    function getRelevancy(value,searchTerm){
    if(value===searchTerm){
    return 2;
}
    else {if(value.startsWith(searchTerm))
    return 1;
    else if(value.includes(searchTerm)){
    return 0;
}else {return -1;}
}
}

    function f(e){
    let value=e.target.value;
    if(value && value.trim().length>0){
    value=value.trim().toLowerCase();
    setList(people.filter(person => {
    return person.includes(value);
}).sort((personA,personB)=>{
    return getRelevancy(personB,value)-getRelevancy(personA,value);
}));
}
    else{
    clearList();
}
}
