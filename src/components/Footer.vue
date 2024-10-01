<script setup>
const scrollTop =()=>{
  if(typeof window !== 'undefined') {
    window.scrollTo({
      top=0,
      behavior= 'instant'
    });
  }
};
</script>


<template>
  <footer class="bg-primary p-3 md:px-5 flex flex-col md:flex-row items-center justify-between mt-auto">
    <div>
      <img src="/src/img/care.png" alt="logo-salud" class="hidden md:block" width="48">
    </div>
    <div class="text-center mt-4 space-x-10 md:mt-0 text-white">
			<a target="_blank" href="https://github.com/Alejandro-Montepeque" title="github">
        <i class="fa-brands fa-github"></i>
			</a>
			<a target="_blank" href="linkedin.com/in/alejandro-montepeque" title="linkedin">
        <i class="fa-brands fa-linkedin"></i>
			</a>
		</div>
    <button @click="scrollTop">
			<span class="text-white">Volver arriba</span>
      <i class="fa-solid fa-arrow-up ms-2" style="color: #fcfcfc;"></i>
		</button>
  </footer>
</template>