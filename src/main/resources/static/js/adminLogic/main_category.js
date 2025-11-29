$(document).ready(function(){
  new DataTable('#example', {
  pages:1,
  layout:{
    topStart:{
      buttons:['csvHtml5','excelHtml5']
      // buttons:['copyHtml5','excelHtml5','csvHtml5','pdfHtml5','print']
    }
  },
  columnDefs: [
        {visible:true,targets: [0,1,2,6]},
        {visible:false,targets: ['_all']},
  ]
});
});