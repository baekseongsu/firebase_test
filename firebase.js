console.log("firebase file");

const firebaseConfig = {
  apiKey: "AIzaSyD6UAobw23oGcVve9XnZNT7vZsF_IAXkT4",
  authDomain: "friebase-test-84456.firebaseapp.com",
  databaseURL: "https://friebase-test-84456-default-rtdb.firebaseio.com",
  projectId: "friebase-test-84456",
  storageBucket: "friebase-test-84456.appspot.com",
  messagingSenderId: "114126489228",
  appId: "1:114126489228:web:a5d812eaaefb6020e15da9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// firebase에 데이터 쓰기
const writeUserData = (userId, name, email) => {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      name: name,
      email: email,
    });
};

// firebase에 있는 데이터 읽기
const readUserData = (userId) => {
  const userRef = firebase.database().ref("users/"); // 'users/' 라는 경로의 참조를 가져옴
  userRef.once("value").then((res) => {
    const data = res.val();
    console.log(data);
  });
};

/* Mission!
1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
2. 사용자가 input에 입력한 3개의 데이터를 각각 console에 찍어보기*/

let addUserBtn = document.getElementById("addUserBtn");
let frm = document.frm.elements;

addUserBtn.addEventListener("click", () => {
  //   for (let i = 0; i < frm.length; i++) {
  //     console.log(frm[i].value);
  //   }
  console.log(frm[0].value);
  console.log(frm[1].value);
  console.log(frm[2].value);

  writeUserData(frm[0].value, frm[2].value, frm[1].value);
});

let getUserBtn = document.getElementById("getUserBtn");
getUserBtn.addEventListener("click", () => {
  console.log("유저가져오기");
  readUserData("100seongsu");
});
