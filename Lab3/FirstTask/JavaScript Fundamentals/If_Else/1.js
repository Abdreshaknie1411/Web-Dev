

let age = prompt("Сколько лет? ")

if(age<18){
    console.log("Доступ закрытый")
}
else if(age==18){
    console.log("Можно удастак")
}

let age1 = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );


let message1 = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';