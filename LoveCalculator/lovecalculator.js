function checkloveper(){
    var name = document.getElementById('name').value;
    var loveperson = document.getElementById('lname').value;

    if (name == ""){
        alert("Name is required");
    }else if(name <= 2){
        alert('Min length is 3')
    }else if(!isNaN(name)){
        alert('Name cannot have number - Only Characters')
    }

    if (lname == ""){
        alert("Name is required");
    }else if(lname <= 2){
        alert('Min length is 3')
    }else if(!isNaN(lname)){
        alert('Name cannot have number - Only Characters')
    }
    else{
        var lovedata = Math.floor(Math.random()*100);
        document.getElementById('lovevalue').value = lovedata + "%";

    }

    

}