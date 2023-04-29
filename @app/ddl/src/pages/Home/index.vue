<script setup>
import { LayoutsContent, LayoutsHeader } from "@/components/Layouts"
</script>

<script>
export default {
  name: "PageHome"
}
</script>

<template>
  <div class="main">
    <layouts-header class="sticky top-0"/>

    <layouts-content class="p-4">
      <router-view></router-view>
    </layouts-content>
  </div>
</template>