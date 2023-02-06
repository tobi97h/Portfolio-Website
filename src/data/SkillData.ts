import type { Tech } from "@/models/Tech";
import type { Framework } from "@/models/Framework";
import type { DevOps } from "@/models/DevOps";
import type { SoftSkills } from "@/models/SoftSkills";

export const techStack: Tech[] = [
    {
        id: 1,
        title: 'Java',
        text: 'Angewandt im Bereich der Materialbedarfsplanung (MRP=Material Requirements Planning), im Verbund mit SAP, und für einen Asset Rebalancing dienst (fintech, Aktien).',
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
        text: 'Hauptsächlich benutzt für komplexere REST Dienste, die gleichzeitig auch großer Last ausgesetzt sein können.',
        percentage: 60
    },
    {
        id: 4,
        title: 'SQL (jede Art)',
        text: 'Umfangreiche Auswertungen von Betriebsdaten in Form von Reporting, debugging von ORM Frameworks wie Hibernate und EFCore.',
        percentage: 90
    },
    {
        id: 5,
        title: 'Python',
        text: 'Schweizer Taschenmesser, hauptsächlich für Skripts und Command-Line Utilities, die den Entwicklungsprozess unterstützen.',
        percentage: 80
    }
]

export const frameworks: Framework[] = [
    {
        id: 1,
        title: 'Spring',
        text: 'Benutzt als interner Microservice der die Library Vielfalt von Java bereit stellt. Ich schreibe ungerne alles in Java, da es mittlerweile weit aus modernere Sprachen gibt.',
        percentage: 85
    },
    {
        id: 2,
        title: 'ASP.NET Core',
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
        text: 'Um Test-, Build- und Deploymentprozesse zu automatisieren - Infrastructure as Code.',
        percentage: 99
    },
    {
        id: 2,
        title: 'Kubernetes',
        text: 'Bare metal und hosted cluster für grundlegende Firmendienstleistungen.',
        percentage: 50
    },
    {
        id: 3,
        title: 'Terraform',
        text: 'Hauptsächlich Erfahrung mit dem AWS Provider.',
        percentage: 35
    }
]

export const softSkills: SoftSkills[] = [
    {
        id: 1,
        title: 'Schreiben',
        text: 'Wenn man nur selbst mit seinen Systemen und Programmen arbeiten kann, sind diese wertlos. Sie müssen für Andere nachvollziehbar sein.',
        percentage: 99
    },
    {
        id: 2,
        title: 'Didaktik',
        text: 'Wissen kann unbegrenzt kopiert werden. Sein Wissen Anderen vermitteln zu können ist einer der leichtesten Wege den eigenen Wert zu erhöhen.',
        percentage: 85
    },
    {
        id: 3,
        title: 'Management',
        text: 'Gerade für unerfahrenere Entwickler ist eine vorrausschauende, erfahrungsgegründete Leitung essenziell, damit sie ihre Zeit sinnvoll verwenden.',
        percentage: 40
    }
]
