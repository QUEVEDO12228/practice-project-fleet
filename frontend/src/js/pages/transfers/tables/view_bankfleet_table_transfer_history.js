import {
    loadTransferHistoryTable,
    initTableTransferHistory
} from "/frontend/src/js/components/tables/bankfleet_table_transfer_history.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/transfers/filters/bankfleet_filter_transfers3.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadTransferHistoryTable();

        await loadFilterDrawer();

        initTableTransferHistory();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});