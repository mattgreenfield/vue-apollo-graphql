<template>
  <div id="app">
    <Heading text="Jobs for All" />
    <JobsList/>
  </div>
</template>

<script>
import Heading from "./components/Heading/Heading.vue";
import JobsList from "./components/JobsList/JobsList.vue";

export default {
  name: "App",
  props: {
    msg: String
  },
  components: {
    Heading,
    JobsList
  }
};
</script>
