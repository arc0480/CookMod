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