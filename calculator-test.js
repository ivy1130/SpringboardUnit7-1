it('should calculate the monthly rate correctly', function () {
	const values = { amount: 9000, years: 5, rate: 3.5 }
	expect(calculateMonthlyPayment(values)).toEqual('163.73')
})

it('should return a result with 2 decimal places', function () {
	const values = { amount: 14857, years: 3, rate: 6.3 }
	expect(calculateMonthlyPayment(values)).toEqual('454.00')
})

/// etc
