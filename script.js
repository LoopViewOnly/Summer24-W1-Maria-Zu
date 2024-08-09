const fake = document.getElementById("fake");
const real = (el = document.getElementById("real"));
const streak_element = document.getElementById("streak");
let streak = 0;

function game() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  const fake_link = "https://thispersondoesnotexist.com/";
  const real_link = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
  const random_num = Math.floor(Math.random() * 40);
  if (random_num <= 20) {
    real.src = real_link;
    real.onclick = real_alert;
    fake.src = fake_link;
    fake.onclick = fake_alert;
  } else {
    real.src = fake_link;
    real.onclick = fake_alert;
    fake.src = real_link;
    fake.onclick = real_alert;
  }
}


function real_alert() {
  alert("correct!");
  streak++;
  streak_element.innerText = "your streak is " + streak;
  game();
}
  
  function fake_alert() {
  alert("incorrect!");
  streak = 0; 
  streak++;
  streak_element.innerText = "your streak is " + streak;
  game();
}
game();