<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()
</script>

<template>
  <div
    class="relative gradient-border bg-white rounded-lg flex flex-col md:flex-row gap-8 md:gap-20 items-center px-10 py-14"
  >
    <div class="flex flex-col gap-5">
      <h2 class="text-2xl md:text-3xl font-bold">
        <slot name="title" />
      </h2>
      <p class="text-lg md:text-xl text-zinc-600">
        <slot name="subtitle" />
      </p>
    </div>
    <div class="z-10">
      <NewsletterLink :button-text="buttonText" />
    </div>
  </div>
</template>

<style scoped>
.gradient-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2px;
  width: theme('width.full');
  opacity: theme('opacity.30');
  border-radius: theme('borderRadius.lg');
  background-image: theme("backgroundImage.classement");
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
