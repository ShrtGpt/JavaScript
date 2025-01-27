var data = [
    {name: 'daniel', age: 28},
    {name: 'Emma', age: 30},
    {name: 'Olivia', age: null},
    {name: 'Sophia', age: undefined},
    {name: 'Ava', age: 27},
    {name: 'null', age: undefined},
];

const newAges = data.filter( (elem) =>{
    //console.log(elem.name);
    return elem.age != undefined ; //null == undefined

})
console.log(newAges);