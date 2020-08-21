const account = { 
    name : 'Andrew Mead',
    expenses : [],
    addExpense : function(description, amount) {
        this.expenses.push({
            description : description,
            amount : amount
        })
    },

    income : [],
    addIncome : function(description, amount) {
        this.income.push({
            description : description,
            amount : amount
        })
    },

    getAccountSummary : function() {
        let totalExpense = 0
        this.expenses.forEach(function(expense) {
            totalExpense += expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function(income) {
            totalIncome += income.amount
        })

        let balance = totalIncome - totalExpense
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpense} in expenses`
    } 

}



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job',1000)
console.log(account.getAccountSummary())