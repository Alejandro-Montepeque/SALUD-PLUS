<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Navbar from '../components/Navbar.vue';
    // import { zod } from "zod";


</script>

<template>
    <Navbar />
    <div class="flex md:justify-end sm:justify-center items-center w-full h-screen bg-background-img bg-cover bg-fixed">
        <div class="card bg-primary md:mr-20 md:max-w-sm">
            <form class="space-y-10 w-full">
                <h5 class="text-xl font-medium text-gray-900 text-white">Bienvenido a SALUD-PLUS
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
                        <router-link to="/recovery-password">¿Olvidaste la contraseña?</router-link>
                    </div>
                </div>
                <button type="submit" class="w-full btn-bg">Inicia Sesion</button>
                <div class="text-sm font-medium text-white">
                    No estás registrado?
                    <router-link to="/register" class="text-yellow-400 hover:underline dark:text-yellow-400 cursor-pointer">
                        Crea una cuenta
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

