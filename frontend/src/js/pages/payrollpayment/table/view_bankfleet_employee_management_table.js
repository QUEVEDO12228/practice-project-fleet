import {
    loadManageEmployeTable,initTableManagementEmployee
} from "/frontend/src/js/components/tables/bankfleet_employee_management_table.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/electronic payroll/filters/bankfleet_filter_payrollpayment2.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadManageEmployeTable();

        await loadFilterDrawer();

        initTableManagementEmployee();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});