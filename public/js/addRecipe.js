
// Lägg till hela receptet
$(document).on('click', '.btn-add-recipe', function () {
    $('.add-success').toggleClass('d-none')
  })

// Visa/dölj ny inmatning för ingrediensmängder
$(document).on('click', '.btn-add-ingredient-info', function () {
  $('.added-ingredient-info').toggleClass('d-none');
  $('.btn-add-ingredient-info').toggleClass('fa-plus');
  $('.btn-add-ingredient-info').toggleClass('fa-minus');
  $('.add-reference').toggleClass('d-none');
  $('.hide-reference').toggleClass('d-none');
})
  
// Lägg till ny instruktion
$(document).on('click', '.btn-add-instruction', function () {
  if ($('.add-instruction').val()) {
    $('.added-instructions').append(`
    <p class="btn-sub-instruction mt-2 ml-3 instruction-item"><i class="fas fa-minus" role="button"></i> ${$('.add-instruction').val()}</p>
  `)
  }
  $('.add-instruction').val('')
})

// Lägg till ingredienser
$(document).on('click', '.btn-add-ingredient', function () {
  if(!formCheck()){
    return;
  }
  $('.added-ingredient').append(`
    <p class="btn-sub-ingredient mt-2 ml-3 ingredient-item"><i class="fas fa-minus" role="button"></i> ${$('.typeahead-ingredients').val()} ${$(
    '.add-volume').val()} ${$('#add-unit').val()}/ ${$('.add-weight').val()}g</p>
  `)
  $('.typeahead-ingredients, .add-volume, .add-weight').val('')
  
})

// Kontrollera inmatning av ingredienser
function formCheck(){

// Kontroll av ingredienslängd
  let ingredientCheck = $('.typeahead-ingredients').val();
    if(ingredientCheck.length < 2){
      $('.typeahead-ingredients').val('');
      $('.typeahead-ingredients').attr('placeholder', 'Fyll i minst 2 bokstäver');
      $('.typeahead-ingredients').addClass('bg-danger');
      return false;
    }

  // Kontroll av antal
  let volumeCheck = $('.add-volume').val();
    if(volumeCheck.length < 1){
      $('.add-volume').val('');
      $('.add-volume').attr('placeholder', 'Fyll i minst 1 siffra');
      $('.add-volume').addClass('bg-danger');
      return false;
  } 

  // Kontroll av enhet
  let unitCheck = $('#add-unit').val();
  if(unitCheck == 'enhet'){
    $('#add-unit').addClass('bg-danger');
    return false;
  }

  // Kontroll av vikt
  let weightCheck = $('.add-weight').val();
    if(weightCheck.length < 1){
      $('.add-weight').val('');
      $('.add-weight').addClass('darkFont');
      $('.add-weight').attr('placeholder', 'Fyll i minst 1 siffra');
      $('.add-weight').addClass('bg-danger');
      return false;
  } 
  return true;
}


// Ta bort felmeddelande från inmatning
$('.typeahead-ingredients').focus(function(){
  $('.typeahead-ingredients').removeClass('bg-danger');
  $('.typeahead-ingredients').attr('placeholder', 'Ingrediens');
});

$('.add-volume').focus(function(){
  $('.add-volume').removeClass('bg-danger');
  $('.add-volume').attr('placeholder', ' Antal');
});

$('.add-weight').focus(function(){
  $('.add-weight').removeClass('bg-danger');
  $('.add-weight').attr('placeholder', ' Vikt i g');
});

$('#add-unit').focus(function(){
  $('#add-unit').removeClass('bg-danger');
})

// Ta bort från ingrediens- eller instruktions-lista
$(document).on('click', '.btn-sub-ingredient, .btn-sub-instruction', function(){
  $(this).remove();
})