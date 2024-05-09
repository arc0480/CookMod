
Events.on(ClientLoadEvent, () => {
    //log
    Log.error("err");
    Log.warn("warn");
    


    Vars.ui.menufrag.addButton("buttonNameHere", Icon.trash, () =>  {
    /* code */
    
    }
    );

});


Events.on(ClientLoadEvent, () => {
    Log.error("Note: This UUID resetter is for testing & debugging purposes ONLY.");
    Log.warn("I frankly don't want this mod to end up on the blacklist, so play fairly and respect your server bans.");
    Vars.ui.menufrag.addButton("ResetUUID", Icon.trash, () => {
        Vars.ui.showConfirm("[red]Are you sure you want to reset your UUID?\nThis action CANNOT be undone.", () => {
            Core.settings.put("uuid","") 
            Vars.platform.getUUID()
            Call.infoMessage("Your UUID has been reset.")
            Log.info("UUID was reset.")
        });
    });
    Vars.ui.menufrag.addButton("Set UUID", Icon.save, () => {
        Vars.ui.showTextInput("[red]If you mess this up and can't join servers, you must reset your UUID, as this tool will NOT check the new UUID for validity.\n[white]For your convenience, your current UUID has been inserted into the textbox below.","UUID:",Vars.platform.getUUID(), res => { 
            Core.settings.put("uuid",res);
            Call.infoMessage("Your UUID has been changed.")
            Log.info("UUID was changed.")
        });
    });
});
```