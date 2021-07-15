function onLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.data.process.addOnStageChange(onStageChange);
}

function onStageChange(executionContext) {
    var formContext = executionContext.getFormContext();
    var stage = formContext.data.process.getSelectedStage(); 
    var stageName = stage.getName();

    formContext.ui.tabs.get("tab_Create").setVisible(false);
    formContext.ui.tabs.get("tab_Review").setVisible(false);
    formContext.ui.tabs.get("tab_Approve").setVisible(false);
    formContext.ui.tabs.get("tab_Active").setVisible(false);


    switch(stageName) {
        case "Create": {
            formContext.ui.tabs.get("tab_Create").setVisible(true);
            formContext.ui.tabs.get("tab_Create").setFocus();
            if(formContext.getAttribute("createdon").getValue() != null) {
                var tabObj = formContext.ui.tabs.get("tab_Create");
                var sectionObj = tabObj.sections.get("tab_Create_section_Additional_Section");
                sectionObj.setVisible(true);
            }
            break;
        }
        case "Review": {
            formContext.ui.tabs.get("tab_Review").setVisible(true);
            formContext.ui.tabs.get("tab_Review").setFocus();
            break;
        }
        case "Approve": {
            formContext.ui.tabs.get("tab_Approve").setVisible(true);
            formContext.ui.tabs.get("tab_Approve").setFocus();
            break;
        }
        case "Active": {
            formContext.ui.tabs.get("tab_Active").setVisible(true);
            formContext.ui.tabs.get("tab_Active").setFocus();
            break;
        }
        default: {
            formContext.ui.tabs.get("tab_Create").setVisible(true);
            formContext.ui.tabs.get("tab_Create").setFocus();
            break;
        }
    }
}