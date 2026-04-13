<template>
    <div class="w-full pt-10">
        <div>
            <p class="text-xl font-serif">Perfil</p>
            <Line />
            <p class="text-md font-serif">Estudiante de Desarrollo de Software, me especializo en la programacion de
                bajo nivel y
                desarrollos de APIs.<br>
                Me considero una persona adaptable a cualquier tecnologia con un enfoque en la investigacion y
                optimizacion mis metodos de programacion.<br>
                Me interesa profundizar de manera autodidacta en el desarrollo de sistemas de bajo nivel, sistemas
                operativos y graficos por
                computadoras.<br>
                Siempre busco contribuir a la comunidad de software libre con mis proyectos personales.</p>
        </div>
        <br>
        <div>
            <p class="text-xl font-serif">Educacion</p>
            <Line />
            <ul>
                <li class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">Nuevo Colegio Glew (2012-2018)</p>
                </li>
                <li class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">E.E.S.T N°2 Ceferino Namuncura (2018-2025)<br></br> Tecnicatura en
                        programacion</p>
                </li>
            </ul>
        </div>
        <br>
        <div>
            <p class="text-xl font-serif">Habilidades</p>
            <Line />
            <div>
                <p class="text-md font-serif">Lenguajes</p>
                <div class="flex flex-wrap gap-2">
                    <Lista :valores="lenguajes" />
                </div>
            </div>
            <br>
            <div>
                <p class="text-md font-serif">Frameworks</p>
                <div class="flex flex-wrap gap-2">
                    <Lista :valores="frameworks" />
                </div>

            </div>
            <br>
            <div>
                <p class="text-md font-serif">Paradigmas</p>
                <div class="flex flex-wrap gap-2">
                    <Lista :valores="paradigmas" />
                </div>

            </div>
            <br>
            <div>
                <p class="text-md font-serif">Herramientas</p>
                <div class="flex flex-wrap gap-2">
                    <Lista :valores="herramientas" />
                </div>

            </div>
        </div>
        <br>
        <div>
            <p class="text-xl font-serif">Nivel de ingles</p>
            <Line />
            <p class="text-md font-serif">Intermedio</p>
        </div>
        <br>
        <div>
            <p class="text-xl font-serif">Actividades escolares</p>
            <Line />
            <ul>
                <li class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">Presentacion de Gabinator en la UNAB</p>
                </li>
                <li class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">Organizador del equipo de desarrollo de software del club de robotica de la Escuela Tecnica N°2 </p>
                </li>
                <li class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">Participacion en las olimpiadas de INET 2025 </p>
                </li>
                <li class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">Mantenimiento y actualizacion de computadoras </p>
                </li>
            </ul>
        </div>
        <br>
        <div>
            <p class="text-xl font-serif">Proyectos</p>
            <Line />
            <div class="flex flex-wrap gap-2">
                <Proyectos :valores="proyectos"/>
            </div>
        </div>
        <br>
        <div>
            <p class="text-xl font-serif">Certificados</p>
            <Line />
                <div class="gap-3 flex items-center">
                    <UIcon name="i-material-symbols-arrow-right-rounded" />
                    <p class="font-serif">Grasshopper</p>
                </div>
                <div class="flex flex-wrap">
                    <img v-for="img in certificados" :key="img.id" :src="img.url" alt="" class="w-48">

                </div>
            </div>
    </div>
</template>

<script lang="ts">
import Lista from './Lista.vue';

export default {
    name: "Info",
    data() {
        return {
            frameworks: [
                { id: 1, name: "Django" },
                { id: 2, name: "Nuxt" }
            ],

            lenguajes: [
                { id: 1, name: "C" },
                { id: 2, name: "C++" },
                { id: 3, name: "Javascript" },
                { id: 4, name: "Typescript" },
                { id: 5, name: "Rust" },
                { id: 6, name: "Python" },
                { id: 7, name: "PHP" },
                { id: 8, name: "HTML" },
                { id: 9, name: "CSS" },
            ],

            paradigmas: [
                { id: 1, name: "Programacion imperativa" },
                { id: 2, name: "Programacion funcional" },
                { id: 3, name: "Programacion orientado a objetos" },
                { id: 4, name: "Programacion embedida" },
            ],

            herramientas: [
                { id: 1, name: "Linux" },
                { id: 2, name: "Git" },
                { id: 3, name: "Github" },
                { id: 4, name: "CLI" },
                { id: 5, name: "Figma" },
            ],

            proyectos: [
                { id: 1, name: "A2C", desc: "Lenguaje de programacion interpretado o compilado hecho con C#", date: "9 de agosto de 2023" },
                { id: 2, name: "Gabinator", desc: "Screensharing entre una computadora con Windows/Linux y un celular Android", date: "25 de marzo de 2024" },
                { id: 3, name: "PNShell", desc: "Kit de herramientas de spyware para Windows", date: "18 de mayo de 2024" },
                { id: 4, name: "Ocicat", desc: "Servicio para almacenar contenido educativo", date: "3 de octubre de 2024" },
                { id: 5, name: "Ocicat Bella (En desarrollo)", desc: "Sistema para el ambito educativo que busca solventar los problemas de la disponibilidad de informacion", date: "17 de julio de 2025"},
                { id: 6, name: "Van Turco (En desarrollo)", desc: "Sistema operativo basado en la teoria del microkernel para la Raspberry Pi Pico", date: "17 de diciembre de 2025"},
                { id: 7, name: "Cornish Git (En desarrollo)", desc: "Servidor libre y privado para almacenar repositorios de git, enviar modificaciones, contribuir a proyectos,etc", date: "20 de marzo de 2025"},
                { id: 8, name: "Donskoy (En desarrollo)", desc: "Proposicion y especificaciones de una arquitectura modular para dispositivos mobiles", date: "26 de julio de 2025"},
            ],

            certificados: [
                { id: 1, url: "/img/1. Cert.png"},
                { id: 2, url: "/img/2. Cert.png"},
                { id: 3, url: "/img/3. Cert.png"},
                { id: 4, url: "/img/4. Cert.png"},
                { id: 5, url: "/img/5. Cert.png"},
                { id: 6, url: "/img/6. Cert.png"},
                { id: 7, url: "/img/7. Cert.png"},
            ],
        }

    },
    components: Lista,
}
</script>