
// JavaScriptでのメニュー作成例
Vars.ui.showCustomConfirm(
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
);
