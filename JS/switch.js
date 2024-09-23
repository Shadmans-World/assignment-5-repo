document.getElementById('donation-btn').addEventListener('click',function(){
document.getElementById('donation').classList.remove('hidden');
document.getElementById('history').classList.add('hidden');
var donationBtn = document.getElementById('donation-btn');
var historyBtn = document.getElementById('history-btn');
donationBtn.classList.remove('btn');
donationBtn.classList.add('btn-primary-1');
historyBtn.classList.add('btn');
historyBtn.classList.remove('btn-primary-1');


})

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation').classList.add('hidden');
    var historyBtn = document.getElementById('history-btn')
    historyBtn.classList.add('btn-primary-1');
    historyBtn.classList.remove('btn')
    var donationBtn  = document.getElementById('donation-btn')
    donationBtn.classList.remove('btn-primary-1');
    donationBtn.classList.add('btn');
})

