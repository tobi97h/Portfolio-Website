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





// TODO: rename to plaforms
const devOps: ComputedRef<DevOps[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Kubernetes',
      text: t("ops.kubernetes"),
      percentage: 90
    },
    {
      id: 2,
      title: 'AWS',
      text: t("ops.aws"),
      percentage: 75
    },
    {
      id: 3,
      title: 'Proxmox',
      text: t("ops.proxmox"),
      percentage: 80
    },
    {
      id: 4,
      title: 'Ceph',
      text: t("ops.ceph"),
      percentage: 70
    },
    {
      id: 5,
      title: 'Containers and VMs',
      text: t("ops.vms"),
      percentage: 95
    },
    {
      id: 6,
      title: 'Gitlab CI/CD',
      text: t("ops.gitlab"),
      percentage: 90
    },
  ]
})

// todo: rename to languages & frameworks
const techStack: ComputedRef<Tech[]> = computed(() => {
  return [
    {
      id: 1,
      title: "Terraform",
      text: t("tech.tf"),
      percentage: 90
    },
    {
      id: 2,
      title: 'Helm',
      text: t("tech.helm"),
      percentage: 85
    },
    {
      id: 3,
      title: 'Go',
      text: t("tech.go"),
      percentage: 70
    },
    {
      id: 4,
      title: 'Ansible',
      text: t("tech.ansible"),
      percentage: 90
    },
    {
      id: 5,
      title: 'Python',
      text: t("tech.python"),
      percentage: 100
    },
    {
      id: 6,
      title: 'Flask',
      text: t("tech.flask"),
      percentage: 90
    },
    {
      id: 7,
      title: 'Bash',
      text: t("tech.bash"),
      percentage: 85
    },
    {
      id: 8,
      title: 'C#',
      text: t("tech.cs"),
      percentage: 90
    },
    {
      id: 9,
      title: 'ASP.NET Core',
      text: t("tech.asp"),
      percentage: 80
    },
    {
      id: 10,
      title: 'Java',
      text: t("tech.java"),
      percentage: 75
    },
    {
      id: 12,
      title: t("tech.sql.heading"),
      text: t("tech.sql.text"),
      percentage: 90
    },
  ]
})

// TODO: change to services & concepts
const frameworks: ComputedRef<Framework[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Linux Services',
      text: t("frameworks.linux-services"),
      percentage: 70
    },
    {
      id: 2,
      title: 'Linux Networking',
      text: t("frameworks.linux-networking"),
      percentage: 60
    },
    {
      id: 3,
      title: 'Keycloak & OIDC',
      text: t("frameworks.keycloak"),
      percentage: 70
    },
    {
      id: 4,
      title: 'Hashicorp Vault',
      text: t("frameworks.vault"),
      percentage: 70
    },
    {
      id: 5,
      title: 'Artifactories',
      text: t("frameworks.artifactories"),
      percentage: 85
    },
    {
      id: 6,
      title: 'Argo CD',
      text: t("frameworks.argo"),
      percentage: 90
    },
    {
      id: 7,
      title: 'S3',
      text: t("frameworks.s3"),
      percentage: 80
    },
    {
      id: 8,
      title: 'Prometheus',
      text: t("frameworks.prom"),
      percentage: 70
    },
    {
      id: 9,
      title: 'ELK',
      text: t("frameworks.elk"),
      percentage: 65
    },
    {
      id: 10,
      title: 'VPN',
      text: t("frameworks.vpn"),
      percentage: 60
    },
    {
      id: 11,
      title: 'Certificates (TLS)',
      text: t("frameworks.certs"),
      percentage: 50
    },
  ]
})



</script>

<template>
  <section id="tech-section">
    <div class="container">
      <TechHeading />

      <h3>Platforms</h3>
      <div class="tech-wrapper">
        <TechSkill
            v-for="devOp in devOps"
            :key="devOp.id"
            :title="devOp.title"
            :text="devOp.text"
            :percentage="devOp.percentage"
        />
      </div>


      <h3>Languages & Frameworks</h3>
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



    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/tech-section.scss";
</style>

