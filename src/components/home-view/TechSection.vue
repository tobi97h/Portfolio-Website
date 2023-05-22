<script setup lang="ts">
import type {ComputedRef, Ref} from 'vue'
import {computed, ref} from 'vue'
import TechHeading from "@/components/home-view/TechHeading.vue";
import TechSkill from "@/components/home-view/TechSkill.vue";
import type { Tech } from "@/models/Tech"
import { useI18n } from 'vue-i18n'
import type { Framework } from "@/models/Framework";
import type { DevOps } from "@/models/DevOps";
import type { SoftSkills } from "@/models/SoftSkills";

const { t } = useI18n()

const techStack: ComputedRef<Tech[]> = computed(() => {
  return [
    {
      id: 1,
      title: "Java",
      text: t("tech.java"),
      percentage: 90
    },
    {
      id: 2,
      title: 'C#',
      text: t("tech.cs"),
      percentage: 95
    },
    {
      id: 3,
      title: 'Go',
      text: t("tech.go"),
      percentage: 60
    },
    {
      id: 4,
      title: t("tech.sql.heading"),
      text: t("tech.sql.text"),
      percentage: 90
    },
    {
      id: 5,
      title: 'Python',
      text: t("tech.python"),
      percentage: 80
    },
    {
      id: 6,
      title: 'Bash',
      text: t("tech.bash"),
      percentage: 65
    }
  ]
})

const frameworks: ComputedRef<Framework[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Spring',
      text: t("frameworks.spring"),
      percentage: 75
    },
    {
      id: 2,
      title: 'ASP.NET Core',
      text: t("frameworks.asp"),
      percentage: 90
    },
    {
      id: 3,
      title: 'JavaFx',
      text: t("frameworks.javafx"),
      percentage: 65
    },
    {
      id: 4,
      title: 'WPF',
      text: t("frameworks.wpf"),
      percentage: 60
    },
    {
      id: 5,
      title: 'NodeJS',
      text: t("frameworks.node"),
      percentage: 75
    }
  ]
})

const devOps: ComputedRef<DevOps[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Docker',
      text: t("ops.docker"),
      percentage: 95
    },
    {
      id: 2,
      title: 'Kubernetes',
      text: t("ops.k8s"),
      percentage: 40
    },
    {
      id: 3,
      title: 'Terraform (Terragrunt)',
      text: t("ops.terraform"),
      percentage: 35
    }
  ]
})

const softSkills: ComputedRef<SoftSkills[]> = computed(() => {
  return [
    {
      id: 1,
      title: t("softSkills.writing.heading"),
      text: t("softSkills.writing.text"),
      percentage: 99
    },
    {
      id: 2,
      title: t("softSkills.didactics.heading"),
      text: t("softSkills.didactics.text"),
      percentage: 85
    },
    {
      id: 3,
      title: 'Management',
      text: t("softSkills.management"),
      percentage: 40
    }
  ]
})


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
            v-for="devOp in devOps"
            :key="devOp.id"
            :title="devOp.title"
            :text="devOp.text"
            :percentage="devOp.percentage"
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

