function enoughAirtime(str, proj) {
    let newList = str.split(',');
    let cost = 0;
    for (let item of newList) {
        if (item.trim() === 'sms') {
            cost += 0.75;
        } else if (item.trim() === 'call') {
            cost += 1.88;
        } else if (item.trim() === 'data') {
            cost += 12;
        }
    }
    if (proj - cost > 0) {
        return "R" + (proj - cost).toFixed(2);
    } else {
        cost = 0;
        return "R" + cost.toFixed(2);
    }
}

function enoughAirtimeWidget() {
    return {
        airtimeUsage: '',
        availableAirtime: '',
        airtimeMessage: '',
        calculate() {
            const amount = enoughAirtime(this.airtimeUsage, this.availableAirtime);
            this.airtimeMessage = amount;
        }
    }
}
