
document.addEventListener('DOMContentLoaded', function () {
  const BankfleetMoneyPayrollPaymentStep1Container = document.querySelector('.bankfleet-money-payroll-payment-step1-container');
  if (BankfleetMoneyPayrollPaymentStep1Container) {fetch("/frontend/src/html/components/electronic payroll/bankfleet_money_payroll_payment_step1.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_money_payroll_payment_step1.html");
        return response.text();})
      .then(data => {BankfleetMoneyPayrollPaymentStep1Container.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-money-payroll-payment-step1-container' en el HTML.");}
});
