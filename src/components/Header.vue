<!-- eslint-disable prettier/prettier -->
<!-- src/components/Header.vue -->
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark fondo fixed-top w-100 animate__animated animate__fadeInDownBig">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/viajar1.png" alt="Icono Avión">
           Travel Explore
          <h4></h4>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link p-3" aria-current="page"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/#about" class="nav-link p-3"
                >Acerca de</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/#services" class="nav-link p-3"
                >Nuestros Servicios</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/#contact" class="nav-link p-3"
                >Contacto</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/reservas" class="nav-link p-3" target="_blank"
                >Reservas</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style src="../assets/css/estilos-index.css"></style>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
