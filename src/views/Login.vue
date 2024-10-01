<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Navbar from '../components/Navbar.vue';
</script>

<template>
    <Navbar />
    <div class="container py-5 flex justify-end">
        <div class="w-full flex max-w-sm p-4 rounded-lg sm:p-6 md:p-8 bg-primary">
            <form class="space-y-6 w-full">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Bienvenido a SALUD-PLUS
                </h5>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-white">Correo Electronico</label>
                    <input type="email" name="email" id="email" class="inputs-bg" placeholder="test@gmail.com" required />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-white">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="inputs-bg" required />
                </div>
                <div>
                    <div class="text-sm text-yellow-400 hover:underline cursor-pointer ">
                        <router-view to="/recovery-password">¿Olvidaste la contraseña?</router-view>
                    </div>
                </div>
                <button type="submit" class="w-full btn-bg">Inicia Sesion</button>
                <div class="text-sm font-medium text-white">
                    No estas Registrado? <a href="#" class="text-yellow-400 hover:underline dark:text-yellow-400">Crea una cuenta</a>
                </div>
            </form>
        </div>
    </div>
</template>

