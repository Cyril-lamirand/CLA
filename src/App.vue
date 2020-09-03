<template>
  <div id="app">
    <BgParticles></BgParticles>

    <div id="nav" class="container-fluid">
      <div class="row">
        <div id="nav-left" class="col-6">
          <div class="text-center">
            <router-link to="/">Home</router-link>
          </div>
        </div>
        <div id="nav-right" class="col-6">
          <div class="text-center">
            <router-link to="/portfolio">About</router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<style>

body{ background-color: #131313!important; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}

#nav {
  position: absolute; top: 0;
  height: 70px;
  border-bottom: 2px solid white;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav-left{ padding-top: 22px; padding-bottom: 22px; background-color: rgba(52, 73, 94, 0.8); }

#nav-right{ padding-top: 22px; padding-bottom: 22px; background-color: rgba(65, 184, 131, 0.8); }

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import BgParticles from "@/components/BgParticles";
export default {
  components: {BgParticles}
}
</script>