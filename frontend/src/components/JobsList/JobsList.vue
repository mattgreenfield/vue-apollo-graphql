<template>  
    <span>
      <h2>Jobs</h2>
        <ul>
            <li v-for="job in jobs" v-bind:key="job.id">
              <h2>{{job.title}}</h2>
              <span>{{job.description}}</span>
            </li>
        </ul>
    </span>
</template>

<script>
import { JOB_QUERY } from "./query";

export default {
  name: "JobsList",
  data() {
    return {
      jobs: []
    };
  },
  apollo: {
    // Simple query that will update the 'jobs' vue property
    jobs: {
      query: JOB_QUERY
    }
  }
};
</script>
