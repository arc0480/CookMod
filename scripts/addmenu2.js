
wavesTable.table(Tex.buttonRight, t => {
  t.button("Hi", () => {
    let myDialog = new BaseDialog("Title");
    myDialog.addCloseButton();
    myDialog.show();
  }).growX().fillX().name("waveButton");
  const myButton = t.find("waveButton");
  myButton.setStyle(Styles.cleart);
}).growX().fillX();