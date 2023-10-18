<template>
  <div
    class="flex min-h-screen flex-col bg-zinc-200 transition-colors duration-300 dark:bg-slate-800"
  >
    <NuxtLoadingIndicator />
    <AppHeader />
    <main class="flex-grow">
      <div class="container">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>
