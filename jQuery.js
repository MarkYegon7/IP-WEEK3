function dev(i, p) {

    $(document).ready(function() {
        i.click(function() {
            i.toggle();
            p.toggle();
        });
        p.click(function() {
            i.toggle();
            p.toggle();
        });
    });
}
dev($("#mobile"), $("#par1"));
dev($("#mobile2"), $("#par2"));
dev($("#mobile3"), $("#par3"));