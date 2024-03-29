
  function ShowModal(){
    $('#addModal').modal('show');
  }
  $('#addModal').on('shown.bs.modal', function() {
    $('#floatingInput').focus();
  })
  function Hide(){
    $('#addModal').modal('hide');
  }
  function ResetList(){
    document.getElementById('ItemsListT').innerHTML = '';
  }
  $("form#addingForm").on("submit", function(e){
    e.preventDefault();
    Add();
  })
  function LoadItems(){
    ResetList();
    Object.keys(localStorage).forEach(element => {
      if(element != 'Logged' && element != 'ff' && element != 'fs' && element != 'txtarea' && element != 'fc'){
        var f = localStorage.getItem(element);
        var val = f.split('[/[');
        document.getElementById('ItemsListT').innerHTML += ('<h id="item_' + element + '" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">'
        +'<div class="rounded-circle flex-shrink-0 mt-auto mb-auto" onclick="Remove(' + element + ')" style="cursor: pointer;">'
        +'<svg style="color: crimson;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">'
        +'<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path></svg>'
        +'</div><div class="d-flex gap-2 w-100 justify-content-between"><div class="w-100"><input class="mb-0 form-control" oninput="Update(' + element + ')" id="term_' + element + '" value="' + val[0] + '">'
            + '</div><small class="opacity-50 text-nowrap mt-auto mb-auto">' + val[1] +'</small></div></h>');
      }
    });

  }
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault(); // Prevent the default browser save dialog
Toast.fire({
  icon: 'success',
  title: 'Always Gotcha'
})
  }
});



  function Update(i){
    const date = new Date();
    let input = document.getElementById("term_" + i).value;
    var val = localStorage.setItem(i, input + "[/[" + date.toDateString());
  }

  function Add(){
    var input = document.getElementById('floatingInput');
    for(let i = 1; i < 1000; i++){
        var f = localStorage.getItem(i.toString());
        if(!f){
            const date = new Date();
            window.localStorage.setItem(i.toString(), input.value + '[/[' + date.toDateString());
            LoadItems();
            break;
        } 
    }
    Hide();
    input.value = '';
  }

  function Remove(i){
    localStorage.removeItem(i.toString());
    document.getElementById('item_' + i.toString()).outerHTML = '';
  }
  function GetLocalStorageCount(){
    var keys = Object.keys(localStorage),
        i = keys.length;
    return i;
  }

  function Search(ev){
    let search, count;
    search = ev.value.toLowerCase();
    count = GetLocalStorageCount();
    if(!ev){
        LoadItems();
        return;
    }
    Object.keys(localStorage).forEach(element => {
      if(element != 'Logged' && element != 'ff' && element != 'fs' && element != 'txtarea' && element != 'fc'){
        var ele = document.getElementById('term_' + element).value.toLowerCase();
        let parent = document.getElementById("item_" + element);
       if(ele.includes(search)){
            parent.classList.remove("d-none");
        }else{
            parent.classList.add("d-none");
        }
      }
    });
  }

  LoadItems();