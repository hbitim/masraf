<template>
  <div class="projects-page">
      <ProjectList :posts="loadedProjects"/>
  </div>
</template>

<script>
    import projects from "@/assets/data/projects.json";
    console.log(projects);

    export default {
         layout: 'admin',
         middleware: ['auth'], 
         data () {
          return {
            loadedProjects : projects
          }
        }
    }
</script>

<style scoped>
  .projects-page {
     display: flex;
     justify-content : center;
     align-items : center;
  }
</style>