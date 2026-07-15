import {
    loadScheduledConsultationsPayroll,
    initScheduledConsultationsPayroll
} from "/frontend/src/js/components/tables/bankfleet_scheduled_consultations_payroll.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/electronic payroll/filters/bankfleet_filter_payrollpayment4.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadScheduledConsultationsPayroll();

        await loadFilterDrawer();

        initScheduledConsultationsPayroll();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});