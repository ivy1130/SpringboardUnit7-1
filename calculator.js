window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc-form')
	if (form) {
		setupIntialValues()
		form.addEventListener('submit', function (e) {
			e.preventDefault()
			update()
		})
	}
})

function getCurrentUIValues () {
	return {
		amount : +document.getElementById('loan-amount').value,
		years  : +document.getElementById('loan-years').value,
		rate   : +document.getElementById('loan-rate').value
	}
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues () {
	const initialValues = { amount: 5000, years: 4, rate: 6.5 }
	const initialAmount = document.querySelector('#loan-amount')
	initialAmount.value = initialValues['amount']
	const initialYears = document.querySelector('#loan-years')
	initialYears.value = initialValues['years']
	const initialRate = document.querySelector('#loan-rate')
	initialRate.value = initialValues['rate']
	update()
}

// Get the current values from the UI
// Update the monthly payment
function update () {
	const currentUIValues = getCurrentUIValues()
	updateMonthly(calculateMonthlyPayment(currentUIValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment (values) {
	let principle = values['amount']
	let monthlyInterest = values['rate'] / 100 / 12
	let numberOfPayments = values['years'] * 12
	let monthlyPayment = principle * monthlyInterest / (1 - (1 + monthlyInterest) ** -numberOfPayments)
	return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly (monthly) {
	const updatedUIMonthly = document.querySelector('#monthly-payment')
	updatedUIMonthly.innerText = `$${monthly}`
}
