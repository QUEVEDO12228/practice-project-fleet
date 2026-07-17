import {
    loadRecipientsTable,
    initTableRecipients
} from "/frontend/src/js/components/tables/bankfleet_recipients.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/transfers/filters/bankfleet_filter_transfers1.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadRecipientsTable();

        await loadFilterDrawer();

        initTableRecipients();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});