function AddColumn(){
    $("#first-column").append('<td><input class="tbl-input" type="text"></td>');
    $("tbody").find('tr').each(function (){
        $(this).append('<td><input class="tbl-input" type="text"></td>');
    });
}

function AddRow(){
    var element = document.getElementById("table-body");
    var num = 0;
    $("thead").find('tr').find('td').each(function (){
        num += 1;
    });
    var ftr = "";
    ftr += '<tr>';
    for(var i = 1; i <= num; i++){
        ftr += '<td><input class="tbl-input" type="text"></td>';
    }
    ftr += '</tr>';
    $("#table-body").append(ftr);
}

