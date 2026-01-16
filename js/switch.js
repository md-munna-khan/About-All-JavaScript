// switch statement when you need exact output and dont need  comparison to other that time use switch case

const day = 20;

switch (day) {
  case 0:
    console.log("friday");
    break;
  case 1:
    console.log("saturday");
    break;
  case 2:
    console.log("sunday");
    break;
  case 3:
    console.log("monday");
    break;
  case 4:
    console.log("tuesday");
    break;
  case 5:
    console.log("wednesday");
    break;
  case 6:
    console.log("thursday");
    break;
  default:
    throw new Error("invalid input");
}
