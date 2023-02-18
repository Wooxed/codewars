function getNewNotes(salary, bills) {
    for (let i = 0; i < bills.length; i++) {
        salary -= bills[i]
    }
    if (salary < 0) {
        return 0
    }
    return salary / 5 | 0
}


const getNewNotes2 = (salary, bills) => Math.max(salary - bills.reduce((prev, curr) => prev + curr, 0), 0) / 5 | 0

