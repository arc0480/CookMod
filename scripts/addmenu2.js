const { ImageButtonStyle } = ImageButton;
Events.on(ClientLoadEvent, () => {
    const wavesTable = Vars.ui.hudGroup.find("waves");
    wavesTable.table(Tex.buttonRight, t => {
    t.addButton("Hi", Styles.cleart, () => {
        // onclick
    }).grow();
    }
                     });
