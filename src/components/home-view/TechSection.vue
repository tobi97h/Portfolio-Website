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
      title: t('blog.heading'),
      text: 'Angewandt im Bereich der Materialbedarfsplanung (MRP=Material Requirements Planning), im Verbund mit SAP, und für einen Asset Rebalancing Prototypen (fintech, Aktien).',
      percentage: 90
    },
    {
      id: 2,
      title: 'C#',
      text: 'Businesslogiken und Utilities in einem industriellem Produktionsunternehmen, komplexe Web APIs im Finanz und Social Media Sektor.',
      percentage: 95
    },
    {
      id: 3,
      title: 'Go',
      text: 'Hauptsächlich benutzt für REST Dienste, die gleichzeitig auch großer Last ausgesetzt sein können.',
      percentage: 60
    },
    {
      id: 4,
      title: 'SQL (jede Art)',
      text: 'Umfangreiche Auswertungen von Betriebsdaten in Form von Reporting, als Grundlage für ORMs wie Hibernate und EFCore.',
      percentage: 90
    },
    {
      id: 5,
      title: 'Python',
      text: 'Schweizer Taschenmesser, hauptsächlich für Skripts und Command-Line Utilities, die den Entwicklungsprozess unterstützen.',
      percentage: 80
    },
    {
      id: 6,
      title: 'Bash',
      text: 'Defacto scripting language für alles was pipelines und deployments im Bereich Infrastruktur angeht. Umfassende Erfahrung mit Github, Bitbucket bishin zu on Premise Pipelines wie Drone.',
      percentage: 80
    }
  ]
})

const frameworks: ComputedRef<Framework[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Spring',
      text: 'Als basis für einen Asset Rebalancing Dienst im Finanz und als Micro Service zum Bereitstellen diverser Dienste zum Verarbeiten von Dokumenten.',
      percentage: 85
    },
    {
      id: 2,
      title: 'ASP.NET Core',
      text: 'Benutzt für ein komplexes Backend einer fintech App, die sich auf das automatische Wechseln von Verträgen konzentriert.',
      percentage: 85
    },
    {
      id: 3,
      title: 'JavaFx',
      text: 'Apps für Management in einem Industriebetrieb, die der Verwaltung und Kontrolle des Materialwertschöpfungsprozesses dienen.',
      percentage: 70
    },
    {
      id: 4,
      title: 'WPF',
      text: 'Wie JavaFX nur von Windows. Bisher in Projekten verwendet, die außschließlich in Windows Umgebungen existieren und dementsprechende Abhängigkeiten haben.',
      percentage: 80
    },
    {
      id: 5,
      title: 'NodeJS',
      text: 'Für lightweight Webserver/APIs.',
      percentage: 75
    }
  ]
})

const devOps: ComputedRef<DevOps[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Docker',
      text: 'Um Test-, Build- und Deploymentprozesse zu automatisieren - Infrastructure as Code.',
      percentage: 95
    },
    {
      id: 2,
      title: 'Kubernetes',
      text: 'Bare metal und hosted cluster für grundlegende Firmeninfrastruktur.',
      percentage: 50
    },
    {
      id: 3,
      title: 'Terraform (Terragrunt)',
      text: 'Infrastructure as Code auf Ebene von Clouddiensten wie AWS, Azure und hosted Kubernetes Lösungen. Hauptsächlich Erfahrung mit dem AWS Provider.',
      percentage: 40
    }
  ]
})

const softSkills: ComputedRef<SoftSkills[]> = computed(() => {
  return [
    {
      id: 1,
      title: 'Schreiben',
      text: 'Neben dem Programmieren schreibe ich gerne alles von Essays bis hin zu Songtexten. Seine Ideen einfach und direkt ausdrücken zu können ist unbezahlbar.',
      percentage: 99
    },
    {
      id: 2,
      title: 'Didaktik',
      text: 'Wissen kann unbegrenzt kopiert werden. Sein Wissen Anderen vermitteln zu können, sodass sie eigenständig in der Lage sind es anzuwenden, ist einer der leichtesten Wege den eigenen Wert zu erhöhen.',
      percentage: 85
    },
    {
      id: 3,
      title: 'Management',
      text: 'Gerade für unerfahrenere Entwickler ist eine vorrausschauende, erfahrungsgegründete Leitung essenziell, damit sie ihre Zeit sinnvoll nutzen können. In meinen Jahren als IT`ler habe ich stehts danach gestrebt über den Tellerand zu schauen und habe mir so etliches an fachübergreifendem Wissen angeignet.',
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

