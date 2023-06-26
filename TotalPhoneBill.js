//In the string 'call, sms, call, sms, sms' there are 2 calls and 3 sms's.


function totalPhoneBill (str){
    let NewList=str.split(',');
    var cost =0;
for (let item of NewList){
if (item.trim()=='sms'){
cost +=0.65;
}
else if (item.trim()=='call'){
cost +=2.75;
}
}

return "R"+cost.toFixed(2);

}





assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));
