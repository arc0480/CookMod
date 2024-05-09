  const myStyle = Object.assign(new TextButtonStyle(), {
  over: Tex.buttonRightOver,
  down: Tex.buttonRightDown,
  up: Tex.buttonRight,
  disabled: Tex.buttonRightDisabled,
  font: Fonts.def,
  fontColor: Color.white,
  disabledFontColor: Color.gray,
});



Events.on(ClientLoadEvent, () => {
    const wavesTable = Vars.ui.hudGroup.find("waves");
    wavesTable.button("Hi", myStyle, () => {
  // code
    }).grow();
});
