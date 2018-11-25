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
