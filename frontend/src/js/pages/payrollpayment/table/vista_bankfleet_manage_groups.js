import {
    loadManageGroupsTable,
    initTableManagementGroups
} from "/frontend/src/js/components/tables/bankfleet_manage_groups.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/electronic payroll/filters/bankfleet_filter_payrollpayment1.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadManageGroupsTable();

        await loadFilterDrawer();

        initTableManagementGroups();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});