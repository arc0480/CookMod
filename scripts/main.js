const cookdlg = new BaseDialog("cookdlg");
// Add "go back" button
cookdlg.addCloseButton();
// Add text to the main content
cookdlg.cont.add("Goodbye.");
// Show dialog
cookdlg.show();