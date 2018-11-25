<template>
  <div class="hello">
    <Heading :text=msg />
    <JobsList/>
  </div>
</template>

<script>
import Heading from "./Heading/Heading.vue";
import JobsList from "./JobsList/JobsList.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Heading,
    JobsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  font-size: 1.2em;
}
</style>
