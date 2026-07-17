import {
    loadScheduledConsultationsTable,
    initTableScheduledConsultations
} from "/frontend/src/js/components/tables/bankfleet_scheduled_consultations_transfers.js";

import {
    loadFilterDrawer,
    initFilterDrawer
} from "/frontend/src/js/components/transfers/filters/bankfleet_filter_transfers2.js";

document.addEventListener("DOMContentLoaded", async () => {

    try {

        await loadScheduledConsultationsTable();

        await loadFilterDrawer();

        initTableScheduledConsultations();

        initFilterDrawer();

    } catch (error) {

        console.error(error);

    }

});