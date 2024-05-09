const { ImageButtonStyle } = ImageButton;
Events.on(ClientLoadEvent, e => {
    const wavesTable = Vars.ui.hudGroup.find("waves");
    wavesTable.table(Tex.buttonRight, t => {
    t.button("Hi", Styles.cleart, () => {
        // onclick
    }).grow();
