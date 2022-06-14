Vue.createApp({
  data() {
    return {
      goals: [],
      added: "",
    };
  },
  methods: {
    add() {
      this.goals.push(this.added);
      this.added = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
