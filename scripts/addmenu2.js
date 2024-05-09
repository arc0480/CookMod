const { ImageButtonStyle } = ImageButton;
Events.on(WorldRoadEvent, e => {
    const wavesTable = Vars.ui.hudGroup.find("waves");
    
    const [ statustable, infoTable ] = wavesTable.getChildren().items;
    const [ statustableCell, infoTableCell ] = wavesTable.getCells().items;
    
    // To remove the edge style. Change the style of skip button.
    const style = Object.assign(new ImageButtonStyle(Styles.squarei), {
        down: Styles.flatDown,
        disabled: Tex.pane2,
        imageUp: Icon.play,
        imageDisabledColor: Color.clear,
        imageUpColor: Color.white,
    });
    const skipButton = statustable.find("skip");
   skipButton.setStyle(style);
    
    wavesTable.clearChildren();
    
    wavesTable.add(statustable).set(statustableCell).growX();
    
    wavesTable.row();
    
    wavesTable.table(Tex.buttonRight, t => {
        t.add("My custom table!");
    }).growX();
    
    wavesTable.row();
    
    wavesTable.add(infoTable).set(infoTableCell).growX();
});
