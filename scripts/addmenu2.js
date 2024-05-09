const wavesTable = Vars.ui.hudGroup.find("waves");
wavesTable.clearChildren();    
wavesTable.add(statustable).set(statustableCell).growX();
    
    wavesTable.row();
    
    wavesTable.table(Tex.buttonRight, t => {
        t.add("My custom table!");
    }).growX();
 wavesTable.row();
wavesTable.add(infoTable).set(infoTableCell).growX();
