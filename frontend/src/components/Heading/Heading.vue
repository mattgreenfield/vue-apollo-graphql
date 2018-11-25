<template>
    <h1 class="heading">{{ text }}</h1>
</template>

<script>
import "./Heading.scss";

export default {
  name: "Heading",
  props: {
    text: String
  }
};
</script>
