function onLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.data.process.addOnStageChange(onStageChange);
}

function onStageChange(executionContext) {
    var formContext = executionContext.getFormContext(); 
    var stage = formContext.data.process.getSelectedStage(); 
    var stageName = stage.getName();
    var tabObj;

    formContext.ui.tabs.get("tab_Create").setVisible(false);
    formContext.ui.tabs.get("tab_Review").setVisible(false);
    formContext.ui.tabs.get("tab_Approve").setVisible(false);
    formContext.ui.tabs.get("tab_Active").setVisible(false);

    switch(stageName) {
        case "Create": {
            tabObj = formContext.ui.tabs.get("tab_Create");

            if(formContext.getAttribute("createdon").getValue() != null) {
                tabObj.sections.get("tab_Create_section_Additional_Section").setVisible(true);
            }
            break;
        }
        case "Review": {
            tabObj = formContext.ui.tabs.get("tab_Review");
            break;
        }
        case "Approve": {
            tabObj = formContext.ui.tabs.get("tab_Approve");
            break;
        }
        case "Active": {
            tabObj = formContext.ui.tabs.get("tab_Active");
            break;
        }
        default: {
            tabObj = formContext.ui.tabs.get("tab_Create");
            break;
        }

    }
    tabObj.setVisible(true);
    tabObj.setFocus();
}
