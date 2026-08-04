
document.addEventListener('DOMContentLoaded', function () {
  const BankfleetMoneyPayrollPaymentStep2Container = document.querySelector('.bankfleet-money-payroll-payment-step2-container');
  if (BankfleetMoneyPayrollPaymentStep2Container) {fetch("/frontend/src/html/components/electronic payroll/bankfleet_money_payroll_payment_step2.html")
      .then(response => {if (!response.ok) throw new Error("Error al cargar bankfleet_money_payroll_payment_step2.html");
        return response.text();})
      .then(data => {BankfleetMoneyPayrollPaymentStep2Container.innerHTML = data;})
        .catch(error => console.error("Error cargando el componente Footer:", error));}else {console.warn("No se encontró '.bankfleet-money-payroll-payment-step2-container' en el HTML.");}
});
