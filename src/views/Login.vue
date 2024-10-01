<script setup>

</script>

<template>
  <div class="w-full flex mt max-w-sm p-4 bg rounded-lg sm:p-6 md:p-8 bg-primary">
      <form class="space-y-6 w-full">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">Bienvenido a SALUD-PLUS
          </h5>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Correo Electronico</label>
              <input type="email" name="email" id="email" class="inputs-bg" placeholder="name@company.com" required />
          </div>
          <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="inputs-bg" required />
          </div>
          <div class="flex items-start">
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-white rounded focus:ring-3 focus:ring-white" required />
                  </div>
                  <label for="remember" class="ms-2 text-sm font-medium text-white">Recordarme</label>
              </div>
              <a href="#" class="ms-20 text-sm text-blue-700 hover:underline dark:text-blue-500">Olvidaste la contraseña?</a>
          </div>
          <button type="submit" class="w-full btn-bg">Inicia Sesion</button>
          <div class="text-sm font-medium text-white">
              No estas Registrado? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Crea una cuenta</a>
          </div>
      </form>
  </div>
</template>

