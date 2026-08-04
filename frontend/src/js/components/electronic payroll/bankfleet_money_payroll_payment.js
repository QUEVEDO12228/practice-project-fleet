
document.addEventListener('DOMContentLoaded', function () {
  const BankfleetMoneyPayrollPaymentContainer = document.querySelector('.bankfleet-money-payroll-payment-container');
  if (BankfleetMoneyPayrollPaymentContainer) {fetch("/frontend/src/html/components/electronic payroll/bankfleet_money_payroll_payment.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_money_payroll_payment.html");
        return response.text();})
      .then(data => {BankfleetMoneyPayrollPaymentContainer.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-money-payroll-payment-container' en el HTML.");}
});
