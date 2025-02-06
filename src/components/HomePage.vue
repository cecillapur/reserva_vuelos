<!-- eslint-disable  -->
<!-- src/components/HomePage.vue -->
<template>
  <div>
    <main>
      <div class="hero">
        <div class="">
          <div class="card1">
            <h2 class="animate__animated animate__backInLeft">
              Bienvenidos a Travel Explore
            </h2>
            <h3 class="animate__animated animate__backInRight">
              Explora el mundo y crea memorias inolvidables.
            </h3>
            <router-link to="/reservas" target="_blank">
              <button class="btn animate__animated animate__fadeInBottomRight">
                Reserva tu Vuelo
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <section id="about" class="section mt-2 animate__animated animate__backInUp animate__slow 2s">
  <div class="container">
    <h2 class="text-center mb-4">Acerca de nosotros</h2>
    <p class="text-center mb-5">Travel Explore es una agencia de viajes líder que ofrece experiencias de viaje únicas y personalizadas.</p>
    <div class="about-grid mt-5 row">
      <!-- Card 1 -->
      <div class="col-md-4 text-center mb-4">
        <!-- Destinos -->
        <div class="card">
          <img src="../assets/images/destinos_globales.png" class="card-img-top" alt="Destinos globales">
          <div class="card-body">
            <h3 class="card-title">Destinos globales</h3>
            <p class="card-text">Descubra una amplia gama de destinos en todo el mundo.</p>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col-md-4 text-center mb-4">
        <!-- Guias -->
        <div class="card">
          <img src="../assets/images/guias.png" class="card-img-top" alt="Guías expertos">
          <div class="card-body">
            <h3 class="card-title">Guías expertos</h3>
            <p class="card-text">Nuestros guías expertos le garantizarán una experiencia de viaje enriquecedora.</p>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="col-md-4 text-center mb-4">
        <div class="card">
          <!-- paquetes -->
          <img src="../assets/images/viajes-personalizados.jpg" class="card-img-top" alt="Paquetes personalizados">
          <div class="card-body">
            <h3 class="card-title">Paquetes personalizados</h3>
            <p class="card-text">Ofrecemos paquetes de viaje personalizados adaptados a sus preferencias.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="services" class="section animate__animated animate__backInUp animate__slower 3s">
  <div class="container">
    <h2 class="text-center mb-4">Nuestros servicios</h2>
    <p class="text-center mb-5">Elija entre una variedad de servicios para que su viaje sea sin complicaciones.</p>
    <div class="services-grid mt-5 row">
      <!-- Card de Reserva de Vuelos -->
      <div class="col-md-4 text-center mb-4">
        <div class="card">
          <img src="../assets/images/reserva_vuelos.jpg" class="card-img-top" alt="Reserva de vuelos">
          <div class="card-body">
            <h3 class="card-title">Reserva de vuelos</h3>
            <p class="card-text">Reserve sus vuelos a cualquier destino con facilidad.</p>
          </div>
        </div>
      </div>
      <!-- Card de Reserva de Hoteles -->
      <div class="col-md-4 text-center mb-4">
        <div class="card">
          <img src="../assets/images/reserva_hotel.jpeg" class="card-img-top" alt="Reserva de hoteles">
          <div class="card-body">
            <h3 class="card-title">Reserva de hoteles</h3>
            <p class="card-text">Encuentre y reserve el alojamiento perfecto para su estadía.</p>
          </div>
        </div>
      </div>
      <!-- Card de Alquiler de Autos -->
      <div class="col-md-4 text-center mb-4">
        <div class="card">
          <img src="../assets/images/autos.jpg" class="card-img-top" alt="Alquiler de autos">
          <div class="card-body">
            <h3 class="card-title">Alquiler de autos</h3>
            <p class="card-text">Alquile un auto y explore su destino a su propio ritmo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section
        id="contact"
        class="section animate__animated animate__backInUp animate__delay-2s 2s"
      >
        <div class="container mb-3">
          <h2>Contáctanos</h2>
          <p>
            Ponte en contacto con nuestro equipo para cualquier consulta o
            asistencia.
          </p>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit" class="boton">Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style src="../assets/css/estilos-index.css"></style>
<style src="../assets/css/all.min.css"></style>
<style src="../assets/css/animate.min.css"></style>

<style scoped>
.section {
  padding: 20px 0;
}
.card {
  border: none;
  overflow: hidden;
  transition: transform 0.3s;
}

.card1 {
  background: rgb(252 250 250 / 34%);
  color: white;
  padding: 20px;
  text-align: center;
}
.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.5rem;
  color: #007bff;
}

.card-text {
  color: #6c757d;
  font-size: 1rem;
}
</style>
