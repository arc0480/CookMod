
Events.on(ClientLoadEvent, () => {

Vars.ui.menufrag.addButton("buttonNameHere", Icon.trash), () =>  {
/* code */
    Vars.ui.showConfirm"[red]Are yousure you want to reset your UUID?InThis action CANNOT be undone.",（) => ｛
    
    "Choose an option",  // ダイアログのメッセージ
    "Option 1",         // ボタン1のテキスト
    () => {
        // ボタン1がクリックされた時のアクション
        Vars.ui.showInfo("Option 1 selected.");
    },
    "Option 2",         // ボタン2のテキスト
    () => {
        // ボタン2がクリックされた時のアクション
        Vars.ui.showInfo("Option 2 selected.");
    }
    }
});

});
