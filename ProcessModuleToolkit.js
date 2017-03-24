$(document).ready(function() {

    /* Selected Cleanup */
    $("#wrap_Inputfield_upgrade_cleanup #Inputfield_upgrade_cleanup_toggleAll").prop("checked", true);

    $("#wrap_Inputfield_upgrade_cleanup #Inputfield_upgrade_cleanup_toggleAll").click(function () {
        if ($("#wrap_Inputfield_upgrade_cleanup #Inputfield_upgrade_cleanup_toggleAll").is(':checked')) {
            $("#wrap_Inputfield_upgrade_cleanup input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#wrap_Inputfield_upgrade_cleanup input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#wrap_Inputfield_upgrade_cleanup input[type=checkbox]:not('#Inputfield_upgrade_cleanup_toggleAll')").click(function () {
        $("#wrap_Inputfield_upgrade_cleanup #Inputfield_upgrade_cleanup_toggleAll").prop("checked", false);
    });


    /* Selected Export Modules */
    $("#wrap_Inputfield_selectedModules #Inputfield_selectedModules_toggleAll").prop("checked", true);

    $("#wrap_Inputfield_selectedModules #Inputfield_selectedModules_toggleAll").click(function () {
        if ($("#wrap_Inputfield_selectedModules #Inputfield_selectedModules_toggleAll").is(':checked')) {
            $("#wrap_Inputfield_selectedModules input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#wrap_Inputfield_selectedModules input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#wrap_Inputfield_selectedModules input[type=checkbox]:not('#Inputfield_selectedModules_toggleAll')").click(function () {
        $("#wrap_Inputfield_selectedModules #Inputfield_selectedModules_toggleAll").prop("checked", false);
    });


    /* Selected Cleanup Modules */
    $("#wrap_Inputfield_upgradeCleanup #Inputfield_upgradeCleanup_toggleAll").prop("checked", true);

    $("#wrap_Inputfield_upgradeCleanup #Inputfield_upgradeCleanup_toggleAll").click(function () {
        if ($("#wrap_Inputfield_upgradeCleanup #Inputfield_upgradeCleanup_toggleAll").is(':checked')) {
            $("#wrap_Inputfield_upgradeCleanup input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#wrap_Inputfield_upgradeCleanup input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#wrap_Inputfield_upgradeCleanup input[type=checkbox]:not('#Inputfield_upgradeCleanup_toggleAll')").click(function () {
        $("#wrap_Inputfield_upgradeCleanup #Inputfield_upgradeCleanup_toggleAll").prop("checked", false);
    });


});