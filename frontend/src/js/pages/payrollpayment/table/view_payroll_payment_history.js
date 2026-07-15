import {
    loadPayrollPaymentHistoryTable,
    initTablePayrollPaymentHistory
} from "/frontend/src/js/components/tables/payroll_payment_history.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/electronic payroll/filters/bankfleet_filter_payrollpayment3.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadPayrollPaymentHistoryTable();

        await loadFilterDrawer();

        initTablePayrollPaymentHistory();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});