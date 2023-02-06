<script setup lang="ts">
import TechHeading from "@/components/home-view/TechHeading.vue";
import TechSkill from "@/components/home-view/TechSkill.vue";
import { techStack, frameworks, devOps, softSkills } from "@/data/SkillData";

</script>

<template>
  <section id="tech-section">
    <div class="container">
      <TechHeading />

      <h3>Mein Tech Stack</h3>
      <div class="tech-wrapper">
        <TechSkill
            v-for="skill in techStack"
            :key="skill.id"
            :title="skill.title"
            :text="skill.text"
            :percentage="skill.percentage"
        />
      </div>


      <h3>Frameworks</h3>
      <div class="tech-wrapper">
        <TechSkill
            v-for="framework in frameworks"
            :key="framework.id"
            :title="framework.title"
            :text="framework.text"
            :percentage="framework.percentage"
        />
      </div>

      <h3>DevOps</h3>
      <div class="tech-wrapper">
        <TechSkill
            v-for="devOps in devOps"
            :key="devOps.id"
            :title="devOps.title"
            :text="devOps.text"
            :percentage="devOps.percentage"
        />
      </div>

      <h3>Soft Skills</h3>
      <div class="tech-wrapper">
        <TechSkill
            v-for="softSkill in softSkills"
            :key="softSkill.id"
            :title="softSkill.title"
            :text="softSkill.text"
            :percentage="softSkill.percentage"
        />
      </div>

    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/tech-section.scss";
</style>

