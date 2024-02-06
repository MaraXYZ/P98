function addUser()
{
  player1_name_input= document.getElementById("nombre_usario").Value;
  player2_name_input= document.getElementById("nombre_usario").Value;

  localStorage.setItem("player1_name_input" ,player1_name_input)
  localStorage.setItem("player2_name_input" ,player2_name_input)

  window.location = "game_page.html";
}

function send()
{
  number1 = document.getElementById("number1").Value;
  number2 = document.getElementById("number2").Value;
  actual_answer = parseInt(number1) * parseInt(number2);
  question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
  input_box = "<br>Respuesta : <input type='text' id=input_check_box'>";
  check_button = "<br><br><button class='btn btn_info' onclick='check()'>Comprobar</button>";
  row = question_number + input_box + check_button ;
}

document.getElementById("output").innerHTML = row;
document.getElementById("number1").Value = "";
document.getElementById("number2").Value = "";