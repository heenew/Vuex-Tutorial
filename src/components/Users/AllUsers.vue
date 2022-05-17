<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <h3>Seoul Users: {{ seouls }}({{ percent }}%)</h3>
    <v-list two-line>
      <!-- main.js에 있는 것들을 불러올 때는 $표시 -->
      <v-list-tile v-for="(user, index) in allUsers" :key="index" avatar>
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title
            >id:#{{ index }} / {{ user.address }} 거주</v-list-tile-sub-title
          >
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
// mapGatters: getters를 가져올때 중복되는 경로를 쉽게 함
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      // 이 컴퍼넌트 안에선 다른 값으로 받고 싶을때
      count: "allUsersCount",
      seouls: "countOfSeoul",
      percent: "percentOfSeoul",
    }),
    ...mapState(["allUsers"]),
    // ...mapGetters(["allUsersCount", "countOfSeoul", "percentOfSeoul"]),
  },
  mounted() {
    EventBus.$on("signUp", (users) => {
      this.$store.state.allUsers.push(users);
    });
  },
};
</script>
