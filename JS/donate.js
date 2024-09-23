
// card-1
document.getElementById('noakhali-button').addEventListener('click',function(event){
   event.preventDefault();
    var donateAmount = getInputFieldByID('noakhali-donate-amount');
    var donatedBalance= getNumberById('noakhali-donate');
   
    if (donateAmount === null || donateAmount === "" || isNaN(donateAmount)|| donateAmount < 0) {
        window.alert('Please input a valid donation amount.');
        return;  
    }

    var availableMoney = getNumberById('available-money');
    if(availableMoney>= donateAmount){
        availableMoney = availableMoney-donateAmount;
        document.getElementById('available-money').innerText =availableMoney;
        donatedBalance = donatedBalance + donateAmount;
    document.getElementById('noakhali-donate').innerText=donatedBalance;
       window.alert(`     Congrates
You Have Donated for Humankind
Successfully`);

    }

    else{
        window.alert(`Sorry, Insufficient Balance`)
    }
    
})


// Card 2
document.getElementById('feni-button').addEventListener('click',function(event){
    event.preventDefault();
     var donateAmount = getInputFieldByID('feni-donate-amount');
     var donatedBalance= getNumberById('feni-donate');
    
     if (donateAmount === null || donateAmount === "" || isNaN(donateAmount)|| donateAmount < 0) {
         window.alert('Please input a valid donation amount.');
         return;  
     }
 
     var availableMoney = getNumberById('available-money');
     if(availableMoney>= donateAmount){
         availableMoney = availableMoney-donateAmount;
         document.getElementById('available-money').innerText =availableMoney;
         donatedBalance = donatedBalance + donateAmount;
     document.getElementById('feni-donate').innerText=donatedBalance;
        window.alert(`     Congrates
 You Have Donated for Humankind
 Successfully`);
 
     }
 
     else{
         window.alert(`Sorry, Insufficient Balance`)
     }
     
 })
 



//  card 3

document.getElementById('quota-button').addEventListener('click',function(event){
    event.preventDefault();
     var donateAmount = getInputFieldByID('quota-donate-amount');
     var donatedBalance= getNumberById('quota-donate');
    
     if (donateAmount === null || donateAmount === "" || isNaN(donateAmount) || donateAmount < 0) {
         window.alert('Please input a valid donation amount.');
         return;  
     }
 
     var availableMoney = getNumberById('available-money');
     if(availableMoney>= donateAmount){
         availableMoney = availableMoney-donateAmount;
         document.getElementById('available-money').innerText =availableMoney;
         donatedBalance = donatedBalance + donateAmount;
     document.getElementById('quota-donate').innerText=donatedBalance;
        window.alert(`     Congrates
 You Have Donated for Humankind
 Successfully`);
 
     }
 
     else{
         window.alert(`Sorry, Insufficient Balance`)
     }
     
 })