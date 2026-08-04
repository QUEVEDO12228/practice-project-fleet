
document.addEventListener('DOMContentLoaded', function () {
  const BankfleetMoneyPayrollPaymentStep3Container = document.querySelector('.bankfleet-money-payroll-payment-step3-container');
  if (BankfleetMoneyPayrollPaymentStep3Container) {fetch("/frontend/src/html/components/electronic payroll/bankfleet_money_payroll_payment_step3.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_money_payroll_payment_step3.html");
        return response.text();})
      .then(data => {BankfleetMoneyPayrollPaymentStep3Container.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-money-payroll-payment-step3-container' en el HTML.");}
});
