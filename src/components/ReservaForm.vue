<template>
  <div class="container formulario">
    <h2 class="text-center animate__animated animate__slideInLeft">
      Formulario de Reserva de Vuelo
    </h2>
    <form @submit.prevent="handleSubmit" class="mt-4">
      <!-- Paso actual del formulario -->
      <component
        :is="currentComponent"
        @next="nextStep"
        @previous="previousStep"
        :form-data="formData"
        @update="updateFormData"
      />

      <!-- Botones de navegación -->
      <div class="d-flex justify-content-between mt-4">
        <button
          type="button"
          class="btn btn-secondary"
          v-if="currentStep > 1"
          @click="previousStep"
        >
          Anterior
        </button>
        <button
          type="button"
          class="btn btn-primary"
          v-if="currentStep < 3"
          @click="nextStep"
        >
          Siguiente
        </button>
        <button
          type="submit"
          class="btn btn-success"
          v-if="currentStep === 3"
          :disabled="!isFormValid"
        >
          Reservar Vuelo
        </button>
      </div>
      <div v-if="!isFormValid && showError" class="text-danger mt-2">
        Por favor, complete todos los campos correctamente.
      </div>
      <div v-if="isFormValid && showSuccess" class="text-success mt-2">
        ¡Reserva completada con éxito!
      </div>
    </form>
    <div v-if="mostrarResumen" class="row mt-4">
      <div class="col-md-12">
        <p>
          <strong>Nombre: {{ formData.nombre }}</strong>
        </p>
        <p>
          <strong>Pasaporte: {{ formData.pasaporte }}</strong>
        </p>
        <p>
          <strong>Fecha de Nacimiento: {{ formData.fechaNacimiento }}</strong>
        </p>
        <p>
          <strong>Nacionalidad: {{ formData.nacionalidad }}</strong>
        </p>
        <p>
          <strong>Ciudad de Origen: {{ formData.ciudadOrigen }}</strong>
        </p>
        <p>
          <strong>Ciudad de Destino: {{ formData.ciudadDestino }}</strong>
        </p>
        <p>
          <strong>Fecha de Salida: {{ formData.fechaSalida }}</strong>
        </p>
        <p>
          <strong>Fecha de Regreso: {{ formData.fechaRegreso }}</strong>
        </p>
        <p>
          <strong>Clase de Vuelo: {{ formData.claseVuelo }}</strong>
        </p>
        <p>
          <strong>Número de Boletos: {{ formData.numBoletos }}</strong>
        </p>
        <p>
          <strong>Precio Total: ${{ precioTotal }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PasajeroStep from "./PasajeroStep.vue";
import VueloStep from "./VueloStep.vue";
import PagoStep from "./PagoStep.vue";

export default {
  name: "ReservaForm",
  components: {
    PasajeroStep,
    VueloStep,
    PagoStep,
  },
  data() {
    return {
      currentStep: 1,
      formData: {
        nombre: "",
        pasaporte: "",
        fechaNacimiento: "",
        nacionalidad: "",
        ciudadOrigen: "",
        ciudadDestino: "",
        fechaSalida: "",
        fechaRegreso: "",
        claseVuelo: "",
        numBoletos: 1,
        tarjeta: "",
        vencimiento: "",
        cvv: "",
        nombreTarjeta: "",
      },
      errors: {},
      mostrarResumen: false, // Para controlar cuándo mostrar el resumen
      showError: false, // Para controlar cuándo mostrar el mensaje de error
      showSuccess: false, // Para controlar cuándo mostrar el mensaje de éxito
    };
  },
  computed: {
    currentComponent() {
      return this.currentStep === 1
        ? "PasajeroStep"
        : this.currentStep === 2
        ? "VueloStep"
        : "PagoStep";
    },
    isFormValid() {
      return (
        Object.keys(this.errors).length === 0 &&
        this.formData.nombre &&
        this.formData.pasaporte &&
        this.formData.fechaNacimiento &&
        this.formData.nacionalidad &&
        this.formData.ciudadOrigen &&
        this.formData.ciudadDestino &&
        this.formData.fechaSalida &&
        this.formData.fechaRegreso &&
        this.formData.claseVuelo &&
        this.formData.numBoletos &&
        this.formData.tarjeta &&
        this.formData.vencimiento &&
        this.formData.cvv &&
        this.formData.nombreTarjeta
      );
    },
    precioTotal() {
      const precios = {
        Economica: 10000,
        Ejecutiva: 20000,
        Primera: 30000,
      };
      return precios[this.formData.claseVuelo] * this.formData.numBoletos;
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) this.currentStep++;
    },
    previousStep() {
      if (this.currentStep > 1) this.currentStep--;
    },
    updateFormData(updatedData) {
      this.formData = { ...this.formData, ...updatedData };
    },
    handleSubmit() {
      if (this.isFormValid) {
        this.mostrarResumen = true;
        this.showSuccess = true;
        this.showError = false;
        alert("¡Reserva completada con éxito!");
      } else {
        this.showError = true;
        this.showSuccess = false;
        alert("Por favor, complete todos los campos correctamente.");
      }
    },
  },
  mounted() {
    document.body.classList.add("reserva-form");
  },
  beforeDestroy() {
    document.body.classList.remove("reserva-form");
  },
};
</script>

<style src="../assets/css/reservacion.css"></style>
<style src="../assets/css/all.min.css"></style>
<style src="../assets/css/animate.min.css"></style>

<style scoped>
.text-danger {
  color: #ff0000;
  font-weight: bold;
}
.text-success {
  color: #28a745;
  font-weight: bold;
}
.resumen-reserva {
  color: #000;
  font-weight: bold;
}
</style>
