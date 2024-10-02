<script setup>
    import { ref } from 'vue';
    import Navbar from '../components/Navbar.vue';
</script>
<template>
    <Navbar />
    <div class="grid content-center justify-center w-full h-screen bg-background-img bg-cover bg-fixed">
        <div class="card bg-primary max-w-lg">
            <form class="space-y-10 w-full">
                <h5 class="text-xl font-medium text-white">Ingrese el correo electronico asociado a su cuenta para recuperar su contraseña</h5>
                <div>
                    <label for="recoveryEmail" class="block mb-2 text-sm font-medium text-white">Ingrese su correo electronico</label>
                    <input type="text" name="emailRecovery" id="emailRecovery" class="inputs-bg" placeholder="test@gmail.com" required>
                </div>
                <button type="submit" class="w-full btn-bg">
                    Enviar correo
                </button>
            </form>
        </div>
    </div>

</template>