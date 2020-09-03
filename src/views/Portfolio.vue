<template>
  <div class="portfolio">
    <PortfolioComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioComponent from "@/components/PortfolioComponent.vue";

export default {
  name: 'Portfolio',
  components: { PortfolioComponent }
}
</script>