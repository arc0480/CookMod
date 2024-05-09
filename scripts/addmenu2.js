const { ImageButtonStyle } = ImageButton;
Events.on(WorldLoadEndEvent, e => {
    const wavesTable = Vars.ui.hudGroup.find("waves");
    wavesTable.table(Tex.buttonRight, t => {
    t.button("Hi", Styles.cleart, () => {
        // onclick
    }).grow();
