const { ImageButtonStyle } = ImageButton;
Events.on(WorldLoadEndEvent, e => {
    wavesTable.table(Tex.buttonRight, t => {
    t.button("Hi", Styles.cleart, () => {
        // onclick
    }).grow();
