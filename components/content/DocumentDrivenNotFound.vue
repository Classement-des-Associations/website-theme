<template>
  <BaseSection class="py-32 flex flex-col items-center">
    <h1 class="text-center text-transparent bg-clip-text bg-classement font-bold text-5xl">
      Vous cherchez votre chemin ?
    </h1>
    <p class="mt-16 text-center text-xl text-black">
      Nous n'avons pas trouvé cette page. <br>
      Heureusement nous pouvons vous ramener sur la page d'accueil.
    </p>
    <div class="mt-8 flex flex-col md:flex-row justify-center gap-8">
      <ClassementLink button-link="/" button-text="Accueil" part="classement" />
      <NewsletterLink button-text="Newsletter" part="classement" />
    </div>
  </BaseSection>
</template>
