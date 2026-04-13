<template>
    <div class="bg-rosequartz p-2 rounded-xl text-nowrap flex flex-col items-center" v-for="val in valores" :key="val.id">
        <p class="font-serif text-lg">{{  val.name  }}</p>
        <Line></Line>
        <p class="font-serif text-md">{{ val.desc }}</p>
        <p class="font-serif text-md">Fecha: {{ val.date }}</p>
    </div>
</template>

<script lang="ts">
export default{
    name: "Proyectos",
    props: [
        "valores"
    ]
}
</script>