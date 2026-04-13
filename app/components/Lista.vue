<template>
    <div class="bg-rosequartz p-2 rounded-xl text-nowrap" v-for="f in valores" :key="f.id">
        <p class="font-serif text-sm">{{ f.name }}</p>
    </div>
</template>

<script lang="ts">
export default{
    name: "frameworks",
    props: [
        "valores"
    ]
}
</script>