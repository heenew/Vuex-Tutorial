import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 저장소
  state: {
    // component의 data 역할을 함
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR",
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9",
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD",
      },
    ],
  },
  // component의 computed와 같이 함수가 들어감
  // computed와 다르게 함수에게 그 값을 사용하겠다는 것을 알려줘야함
  getters: {
    allUsersCount: function (state) {
      return state.allUsers.length;
    },
    countOfSeoul: (state) => {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    // state를 앞에 써야 getters를 받을 수 있음
    percentOfSeoul: (state, getters) => {
      // Math.round: 소수점 뒷자리를 반올림
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    },
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    },
  },
  actions: {
    // mutations와 actions는 사용하는 방법이 다르기 때문에 이름이 겹쳐도 무방함
    addUsers: ({ commit }, payload) => {
      // function({commit})
      commit("addUsers", payload); // mutation의 addUsers를 커밋
    },
  },
});
