// card-1
    document.getElementById('noakhali-button').addEventListener('click', function (event) {
    event.preventDefault();
    var donateAmount = getInputFieldByID('noakhali-donate-amount');
    var donatedBalance = getNumberById('noakhali-donate');
    var availableMoney = getNumberById('available-money');
    var myModal = document.getElementById('my_modal_1');
    var modalContent = document.querySelector('#my_modal_1 .modal-box p');
    var modalH3 = document.querySelector('#my_modal_1 .modal-box h3');
    var modalH2 = document.querySelector('#my_modal_1 .modal-box h2');
    if (donateAmount === null || donateAmount === "" || isNaN(donateAmount) || donateAmount <= 0) {
        modalH3.innerText = "";
        modalH2.innerText = "";
        modalContent.innerHTML = "Wrong! Enter Valid Amount";
        myModal.showModal(); 
        return;
    }
    if (availableMoney >= donateAmount) {
        availableMoney = availableMoney - donateAmount;
        document.getElementById('available-money').innerText = availableMoney;
        donatedBalance = donatedBalance + donateAmount;
        document.getElementById('noakhali-donate').innerText = donatedBalance;
        // MODAL  
        modalContent.innerHTML = `You have donated for humankind`;
        modalH3.innerHTML = `Congrates`;
        modalH2.innerHTML = `Successful`;
        myModal.showModal();
        // History
        var newDiv = document.createElement('div');
        newDiv.classList.add('border-2', 'rounded-md', 'p-5', 'mb-7');
        newDiv.innerHTML = `<p style="font-weight:bold">${donateAmount} Taka is Donated for Flood at Noakhali, Bangladesh</P>
 <p>${new Date()}<p>
 `
        document.getElementById('history').appendChild(newDiv);
    }
     else {
        // Change the content for insufficient balance
        modalH3.innerText = "";
        modalH2.innerText = "";
        modalContent.innerHTML = "Sorry, insufficient balance.";
        myModal.showModal();
    }
})


// Card 2
    document.getElementById('feni-button').addEventListener('click', function (event) {
    event.preventDefault();
    var donateAmount = getInputFieldByID('feni-donate-amount');
    var donatedBalance = getNumberById('feni-donate');

    var availableMoney = getNumberById('available-money');
    var myModal = document.getElementById('my_modal_1');
    var modalContent = document.querySelector('#my_modal_1 .modal-box p');
    var modalH3 = document.querySelector('#my_modal_1 .modal-box h3');
    var modalH2 = document.querySelector('#my_modal_1 .modal-box h2');

    if (donateAmount === null || donateAmount === "" || isNaN(donateAmount) || donateAmount <= 0) {
        modalH3.innerText = "";
        modalH2.innerText = "";
        modalContent.innerHTML = "Wrong! Enter Valid Amount";

        myModal.showModal();
        return;
    }
    if (availableMoney >= donateAmount) {
        availableMoney = availableMoney - donateAmount;
        document.getElementById('available-money').innerText = availableMoney;
        donatedBalance = donatedBalance + donateAmount;
        document.getElementById('feni-donate').innerText = donatedBalance;

        // MODAL

        modalContent.innerHTML = `You have donated for humankind`;
        modalH3.innerHTML = `Congrates`;
        modalH2.innerHTML = `Successful`;
        myModal.showModal();


        //  history
        var newDiv = document.createElement('div');
        newDiv.classList.add('border-2', 'rounded-md', 'p-5', 'mb-7');

        newDiv.innerHTML = `<p style="font-weight:bold">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</P>
 <p>${new Date()}<p>
 `

        document.getElementById('history').appendChild(newDiv);

    } 
    else {

        modalH3.innerText = "";
        modalH2.innerText = "";
        modalContent.innerHTML = "Sorry, insufficient balance.";

        myModal.showModal();
    }

})




//  card 3

document.getElementById('quota-button').addEventListener('click', function (event) {
    event.preventDefault();
    var donateAmount = getInputFieldByID('quota-donate-amount');
    var donatedBalance = getNumberById('quota-donate');

    var availableMoney = getNumberById('available-money');
    var myModal = document.getElementById('my_modal_1');
    var modalContent = document.querySelector('#my_modal_1 .modal-box p');
    var modalH3 = document.querySelector('#my_modal_1 .modal-box h3');
    var modalH2 = document.querySelector('#my_modal_1 .modal-box h2');


    if (donateAmount === null || donateAmount === "" || isNaN(donateAmount) || donateAmount <= 0) {
        modalH3.innerText = "";
        modalH2.innerText = "";
        modalContent.innerHTML = "Wrong! Enter Valid Number";

        myModal.showModal();
        return;
    }
    if (availableMoney >= donateAmount) {
        availableMoney = availableMoney - donateAmount;
        document.getElementById('available-money').innerText = availableMoney;
        donatedBalance = donatedBalance + donateAmount;
        document.getElementById('quota-donate').innerText = donatedBalance;

        // MODAL

        modalContent.innerHTML = `You have donated for humankind`;
        modalH3.innerHTML = `Congrates`;
        modalH2.innerHTML = `Successful`;
        myModal.showModal();


        //  history
        var newDiv = document.createElement('div');
        newDiv.classList.add('border-2', 'rounded-md', 'p-5', 'mb-7');

        newDiv.innerHTML = `<p style="font-weight:bold">${donateAmount} Taka is Donated for Injured in the Quota Movement</P>
 <p>${new Date()}<p>
 `

        document.getElementById('history').appendChild(newDiv);

    } 
    else {

        modalH3.innerHTML = "";
        modalH2.innerHTML = "";

        modalContent.innerHTML = "Sorry, insufficient balance.";

        myModal.showModal();
    }

})