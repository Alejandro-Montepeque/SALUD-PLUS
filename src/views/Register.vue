<script setup>
    import { ref } from 'vue';
    import Navbar  from '../components/Navbar.vue';
</script>

<template>
    <Navbar />
    <div class="grid content-center justify-center w-full h-screen bg-background-img-register bg-cover bg-fixed">
        <div>
            <h1 class="text-xl">Completa tu registro para acceder a todas las funciones de SALUD-PLUS</h1>
        </div>
            <div class="card bg-primary max-w-xl">
            <form class="space-y-10 w-full">
                <div>
                    <label for="userName" class="block mb-2 text-sm font-medium text-white">Ingrese su usuario</label>
                    <input type="text" name="userName" id="userName" class="inputs-bg" placeholder="Jonh Smith" required />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-white">Ingrese su correo electronico</label>
                    <input type="email" name="email" id="email" class="inputs-bg" placeholder="test@gmail.com" required />
                </div>
                <div>
                    <label for="address" class="block mb-2 text-sm font-medium text-white">Ingrese su direccion</label>
                    <input type="text" name="address" id="address" class="inputs-bg" placeholder="José Ortega y Gasset, 40 - loc." required />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-white">Ingrese su contraseña</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="inputs-bg" required />
                </div>
                <div>
                    <label for="confirmPassword" class="block mb-2 text-sm font-medium text-white">Confirme su contraseña</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" class="inputs-bg" required />
                </div>
                <div>
                    <div class="text-sm text-white">
                        ¿Ya tienes cuenta?<router-link to="/"> <span class="text-yellow-400 hover:underline cursor-pointer "> Inicia sesion </span></router-link>
                    </div>
                </div>
                <button type="submit" class="w-full btn-bg">Registrate! </button>
            </form>
        </div>
    </div>

</template>