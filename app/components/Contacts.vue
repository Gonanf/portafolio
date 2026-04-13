<template>
   <div class="flex min-h-screen">
      <header class="w-100 bg-midnightgreen p-10">
         <div class="text-center flex flex-col content-center items-center">
         <img src="/img/selfie.jpg" alt="" class="w-48 clip-circle"  >
         <h1 class="font-serif text-3xl">Gabriel Solotorevsky</h1>
         <h3 class="font-serif text-sm">Desarrollador de software</h3>
         </div>
         <br>
         <hr class="color-white w-full">
         <br>
         <p class="font-serif">Contacto</p>
         <ul>
         <li class="gap-3 flex items-center"><UIcon name="i-grommet-icons-github" /><a class="font-serif" href="https://github.com/Gonanf">https://github.com/Gonanf</a></li>
         <li class="gap-3 flex items-center"><UIcon name="i-material-symbols-alternate-email" /><a class="font-serif" href="mailto:solotorevskygabrieltrabajo@gmail.com">solotorevskygabrieltrabajo@gmail.com</a></li>
         <li class="gap-3 flex items-center"><UIcon name="i-material-symbols-alternate-email" /><a class="font-serif" href="mailto:solotorevskygabriel@gmail.com">solotorevskygabriel@gmail.com</a></li>
         <li class="gap-3 flex items-center"><UIcon name="i-material-symbols-call-outline" /><a class="font-serif" href="tel:+5491134021451">+54 9 11 3402-1451</a></li>
         </ul>
      </header>
      <img src="~/assets/img/wave.svg" alt="" srcset="" class="wave">
      <slot></slot>
</div>
</template>