//Events.on(ContentInitEvent, () => {
const myStyle = Object.assign(new TextButtonStyle(), {
  over: Tex.buttonRightOver,
  down: Tex.buttonRightDown,
  up: Tex.buttonRight,
  disabled: Tex.buttonRightDisabled,
  font: Fonts.def,
  fontColor: Color.white,
  disabledFontColor: Color.gray,
});

wavesTable.button("Hi", myStyle, () => {
  // code
}).grow();
//});