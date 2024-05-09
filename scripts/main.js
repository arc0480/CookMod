//jsで記載

//ダイアログを表示
const myDialog = new BaseDialog("Dialog Title");
// Add "go back" button
myDialog.addCloseButton();
// Add text to the main content
myDialog.cont.add("Goodbye.");
// Show dialog
myDialog.show();

function sliderTable(table){
    table.table(Tex.buttonEdge3, t => {
    
   table.visibility = () => !folded && visibility();
}

Events.on(EventType.ClientLoadEvent, () => {
    const dialog = new BaseDialog("Info");
    const creators = new BaseDialog("Creators");
    creators.cont.add("Spriting: Exter").row();
    creators.cont.add("Coding: Exter").row();
    dialog.cont.add("This mod is WIP, so there can be bugs. ").row();
    }
   dialog.cont.button("OK", () => {
        dialog.hide();
    }
    dialog.cont.button("Creators", () => {
        creators.show();
    }
    creators.cont.button("OK", () => {
        creators.hide();
    }
    size(100, 50);
    dialog.show();
