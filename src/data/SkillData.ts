import type { Tech } from "@/models/Tech";
import type { Framework } from "@/models/Framework";
import type { DevOps } from "@/models/DevOps";
import type { SoftSkills } from "@/models/SoftSkills";

export const techStack: Tech[] = [
    {
        id: 1,
        title: 'Java',
        text: 'Angewandt in großen Projekten im Bereich der Materialbedarfsplanung (MRP=Material Requirements Planning), im Verbund mit SAP.',
        percentage: 90
    },
    {
        id: 2,
        title: 'C#',
        text: 'Businesslogiken und Utilities in einem industriellem Produktionsunternehmen.',
        percentage: 70
    },
    {
        id: 3,
        title: 'Go',
        text: 'Hauptsächlich benutzt für komplexere REST Dienste, die gleichzeitig auch großer Last ausgesetzt sein können.',
        percentage: 60
    },
    {
        id: 4,
        title: 'SQL (jede Art)',
        text: 'Umfangreiche Auswertungen von Betriebsdaten in Form von Reporting, die mehrschichtige SQL Abfragen, als Basis für Datenbeschaffung und Kalkulation, verwenden.',
        percentage: 80
    },
    {
        id: 5,
        title: 'Python',
        text: 'Schweizer Taschenmesser, hauptsächlich für Skripts und Command-Line Utilities, die den Entwicklungsprozess unterstützen.',
        percentage: 70
    }
]

export const frameworks: Framework[] = [
    {
        id: 1,
        title: 'Spring',
        text: 'Benutzt als interner Microservice der die Library Vielfalt von Java bereit stellt. Ich schreibe ungerne alles in Java, da es mittlerweile weit aus modernere Sprachen gibt.',
        percentage: 100
    },
    {
        id: 2,
        title: '.NET Core',
        text: 'Benutzt für ein komplexes Backend einer fintech App, die auf der AWS Lambda Architektur basiert.',
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
        text: 'Für lightweight Webserver/APIs, als Middleware zwischen Webendnutzer und aufwendigen Mircoservices.',
        percentage: 75
    }
]

export const devOps: DevOps[] = [
    {
        id: 1,
        title: 'Docker',
        text: 'Um Test-, Build- und Deploymentprozesse zu automatisieren. Environment aware code war noch nie einfacher.',
        percentage: 100
    },
    {
        id: 2,
        title: 'Kubernetes',
        text: 'Je nach Skalierungsbedarf ist dieser Orchestrierungsdienst sinnvoll. Hiermit können docker basierende Apps ins unendliche skaliert werden.',
        percentage: 85
    }
]

export const softSkills: SoftSkills[] = [
    {
        id: 1,
        title: 'Schreiben',
        text: 'Wenn man nur selbst mit seinen Systemen und Programmen arbeiten kann, sind diese wertlos. Sie müssen für Andere nachvollziehbar sein.',
        percentage: 100
    },
    {
        id: 2,
        title: 'Didaktik',
        text: 'Wissen kann unbegrenzt kopiert werden. Sein Wissen Anderen vermitteln zu können ist einer der leichtesten Wege den eigenen Wert zu erhöhen.',
        percentage: 85
    }
]
