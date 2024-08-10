// function to submit the kuisioner
function saveKuisioner(mks_dosen) {
  // Split the value of the dosen_pengampu element
  // into an array of two elements
  // The first element is the id_mks
  // The second element is the id_dosen
  var mks_dosen = mks_dosen;
  mks_dosen = mks_dosen.split("|");
  let id_dosen = mks_dosen[1];
  let id_mks = mks_dosen[0];
  let jawaban = [];
  let name_input = [];
  let data_jawaban = new Object();
  data_jawaban.nim = $("#nim").val();
  data_jawaban.id_dosen = id_dosen;
  data_jawaban.id_mks = id_mks;

  // Loop through each input element
  // If the input element is a radio button, see if it is checked
  // If it is checked, add it to the jawaban array
  $("input,select").each(function (index) {
    var input = $(this);
    if (input.attr("type") == "radio") {
      if (name_input.indexOf(input.attr("name")) < 0) {
        name_input.push(input.attr("name"));
      }
      if (input.is(":checked")) {
        jawaban.push(input.attr("name") + "|" + input.val());
      }
    }
  });

  // Check if all the inputs have been filled
  // If they have, send the data to the server
  // If they haven't, display an error message
  if (name_input.length == jawaban.length) {
    data_jawaban.list_jawaban = jawaban;
    $.ajax({
      type: "POST",
      url: "https://siap.undip.ac.id/evaluasi_perkuliahan/mhs/evaluasi/ajax/simpan-kuisioner",
      data: { data_jawaban: JSON.stringify(data_jawaban) },
      success: function (data) {
        Swal.fire({ icon: "success", title: "Jawaban berhasil disimpan" });
        swal("Good job!", "You clicked the button!", "success");
      },
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Wadidaaw..",
      text: "Semua pertanyaan wajib diisi!",
    });
  }
}

// Loop through each option in the select dosen element
$("#dosen_pengampu option").each(function () {
  // Select all radio input elements with type="radio" and value="Ada"
  document
    .querySelectorAll('input[type="radio"][value="Ada"]')
    .forEach(function (radio) {
      // Set the 'checked' property of each radio button to true, selecting it
      radio.checked = true;
    });

  // Select all radio input elements with type="radio" and value="Ya"
  document
    .querySelectorAll('input[type="radio"][value="Ya"]')
    .forEach(function (radio) {
      // Set the 'checked' property of each radio button to true, selecting it
      radio.checked = true;
    });

  // Select all radio input elements with type="radio" and value="Wifi Kampus"
  document
    .querySelectorAll('input[type="radio"][value="Wifi Kampus"]')
    .forEach(function (radio) {
      // Set the 'checked' property of each radio button to true, selecting it
      radio.checked = true;
    });

  // Select all radio input elements with type="radio" and value="Laptop"
  document
    .querySelectorAll('input[type="radio"][value="Laptop"]')
    .forEach(function (radio) {
      // Set the 'checked' property of each radio button to true, selecting it
      radio.checked = true;
    });

  // Select all radio input elements with type="radio" and value="Tatap Muka"
  document
    .querySelectorAll('input[type="radio"][value="Tatap Muka"]')
    .forEach(function (radio) {
      // Set the 'checked' property of each radio button to true, selecting it
      radio.checked = true;
    });

  // Select all radio input elements with type="radio" and value="Ms Teams"
  document
    .querySelectorAll('input[type="radio"][value="Ms Teams"]')
    .forEach(function (radio) {
      // Set the 'checked' property of each radio button to true, selecting it
      radio.checked = true;
    });

  // Get the value of the option
  var optionValue = $(this).val();
  // Call saveKuisioner function with optionValue as the argument
  saveKuisioner(optionValue);
});
