import "./styles.css";

import UseEffect from "./component/Useeffect";

export default function App() {
  //const [UserList, setUserList] = useState([]);
  //const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="App">
        <UseEffect />
      </div>
    </>
  );
}

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

//button js
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.button'),
      loader = document.querySelector('.loader'),
      check = document.querySelector('.check');
  
  btn.addEventListener('click', function () {
    loader.classList.add('active');    
  });
 
  loader.addEventListener('animationend', function() {
    check.classList.add('active'); 
  });
});
