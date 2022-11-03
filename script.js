const a = document.getElementById("judul");
a.innerHTML = "<a href='#'>Dean Andhika Ramadhan</a>";

const c = document.createElement("h3");
const d = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit et eum deleniti odio non hic placeat consequuntur quod. Deleniti vero minima, vel debitis ipsa fugit optio sunt magnam soluta harum nihil itaque similique libero error, nam reiciendis, molestiae molestias tempora a rem neque sit dicta. Sed mollitia, quos, maiores eos, minus similique nostrum optio natus magni totam magnam enim placeat inventore ipsum nulla expedita voluptate amet consectetur veritatis. Nobis."
);

const foto = document.querySelector("div", "img");

const video = document.querySelector("div", "iframe");

c.appendChild(d);

const e = document.getElementById("body");

e.appendChild(c);

function tombol() {
  const b = document.getElementById("subjudul");
  b.innerHTML = "120140155";

  const f = document.querySelector(".dean");
  f.innerHTML = "Mahasiswa Teknik Informatika ITERA";

  foto.innerHTML =
    "<img src='https://media-exp1.licdn.com/dms/image/C5603AQEH-oAAS6950Q/profile-displayphoto-shrink_200_200/0/1637291870397?e=1672876800&v=beta&t=FGhrh_M6Evh2Jg-l1Lr8gX9PhF43c9RMNfKr4Rk5mOo' alt='foto dean' />";
}

function button() {
  var x = document.createElement("figure");
  x.setAttribute("id", "myFigure");
  x.setAttribute("class", "center");
  document.body.appendChild(x);

  var y = document.createElement("iframe");
  y.setAttribute("src", "https://www.youtube.com/embed/jg-09GOjyBA");
  y.setAttribute("width", "400");
  y.setAttribute("height", "200");
  y.setAttribute("alt", "Video Saya");
  x.appendChild(y);
}

function tampilan() {
  var styles = `html{margin: 0;padding: 0;}
    body    {
    background-color: khaki;
    } .center {
        display: flex;
        justify-content: center;
        align-items: center;
      } h3{
        text-align:center;
        font-size:x-large;
      }`;

  var styleSheet = document.querySelector("style");
  styleSheet.innerText = styles;

  document.head.appendChild(styleSheet);
}
