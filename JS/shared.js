function getInputFieldByID(id){
    var donateAmount = document.getElementById(id).value;
    if(isNaN(donateAmount)){
        return;
    }
    else{
        donateAmount =parseFloat(donateAmount);
        return donateAmount;
    }
    
    
   
}


function getNumberById(id){
    var number = document.getElementById(id).innerText;
    number = parseFloat(number);
    
    
        return number;
    
    
}



