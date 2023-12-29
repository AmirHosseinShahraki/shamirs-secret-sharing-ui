<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-electron-drag">
      <q-bar dark class="bg-dark text-white">
        <q-icon name="key" />
        <div class="text-h1">Shamir's Secret Sharing</div>
        <q-space />
        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="maximize" />
        <q-btn dense flat icon="close" @click="close" />
      </q-bar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const minimize = () => window.electronAPI.minimize();
    const maximize = () => window.electronAPI.toggleMaximize();
    const close = () => window.electronAPI.close();

    return { minimize, maximize, close };
  },
});
</script>
