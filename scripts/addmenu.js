//ホーム画面　メインメニューにボタン追加

Events.on(ClientLoadEvent, () => {
    //log
    //Log.error("err");
    //Log.warn("warn");

    


    Vars.ui.menufrag.addButton("buttonNameHere", Icon.trash, () =>  {
    /* ボタンタップ時の処理を記載？ */
    
    });
    
    wavesTable.table(Tex.buttonRight, t => {
  t.button("Hi", () => {
    let myDialog = new BaseDialog("Title");
    myDialog.addCloseButton();
    myDialog.show();
  }).growX().fillX().name("waveButton");
  const myButton = t.find("waveButton");
  myButton.setStyle(Styles.cleart);
}).growX().fillX();

    
    
});


