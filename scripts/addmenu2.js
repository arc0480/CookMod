
Events.on(ClientLoadEvent, e => {


  
const wavesTable = Vars.ui.hudGroup.find("waves");

const [ statustable, infoTable ] = wavesTable.getChildren().items;
const [ statustableCell, infoTableCell ] = wavesTable.getCells().items;
  
  const myStyle = Object.assign(new TextButtonStyle(), {
      over: Tex.buttonRightOver,
      down: Tex.buttonRightDown,
      up: Tex.buttonRight,
      disabled: Tex.buttonRightDisabled,
      font: Fonts.def,
      fontColor: Color.white,
      disabledFontColor: Color.gray,
  });

  wavesTable.clearChildren();
    
    wavesTable.add(statustable).set(statustableCell).growX();
    
    wavesTable.row();
    
    wavesTable.table(Tex.buttonRight, t => {
        t.add("My custom table!");
    }).growX();
    
    wavesTable.row();
    
    wavesTable.add(infoTable).set(infoTableCell).growX();
});

  




    
    wavesTable.button("Hi", myStyle, () => {
  // code
    }).grow();
});
