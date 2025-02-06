<template>
  <div>
    <h4>Datos del Vuelo</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="ciudadOrigen">Ciudad de Origen:</label>
          <select
            id="ciudadOrigen"
            class="form-control"
            :class="{
              'is-valid': !errors.ciudadOrigen && localData.ciudadOrigen,
            }"
            v-model="localData.ciudadOrigen"
            @change="validateCiudadOrigen"
            required
          >
            <option
              v-for="aeropuerto in aeropuertos"
              :key="aeropuerto.code"
              :value="aeropuerto.city"
            >
              {{ aeropuerto.city }}
            </option>
          </select>
          <span v-if="errors.ciudadOrigen" class="text-danger">{{
            errors.ciudadOrigen
          }}</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="ciudadDestino">Ciudad de Destino:</label>
          <select
            id="ciudadDestino"
            class="form-control"
            :class="{
              'is-valid': !errors.ciudadDestino && localData.ciudadDestino,
            }"
            v-model="localData.ciudadDestino"
            @change="validateCiudadDestino"
            required
          >
            <option
              v-for="aeropuerto in aeropuertos"
              :key="aeropuerto.code"
              :value="aeropuerto.city"
            >
              {{ aeropuerto.city }}
            </option>
          </select>
          <span v-if="errors.ciudadDestino" class="text-danger">{{
            errors.ciudadDestino
          }}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="fechaSalida">Fecha de Salida:</label>
          <input
            type="date"
            id="fechaSalida"
            class="form-control"
            :class="{
              'is-valid': !errors.fechaSalida && localData.fechaSalida,
            }"
            v-model="localData.fechaSalida"
            @input="validateFechaSalida"
            required
          />
          <span v-if="errors.fechaSalida" class="text-danger">{{
            errors.fechaSalida
          }}</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="fechaRegreso">Fecha de Regreso:</label>
          <input
            type="date"
            id="fechaRegreso"
            class="form-control"
            :class="{
              'is-valid': !errors.fechaRegreso && localData.fechaRegreso,
            }"
            v-model="localData.fechaRegreso"
            @input="validateFechaRegreso"
          />
          <span v-if="errors.fechaRegreso" class="text-danger">{{
            errors.fechaRegreso
          }}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="claseVuelo">Clase de Vuelo:</label>
          <select
            id="claseVuelo"
            class="form-control"
            :class="{ 'is-valid': !errors.claseVuelo && localData.claseVuelo }"
            v-model="localData.claseVuelo"
            @change="emitChanges"
            required
          >
            <option value="Economica">Económica</option>
            <option value="Ejecutiva">Ejecutiva</option>
            <option value="Primera">Primera Clase</option>
          </select>
          <span v-if="errors.claseVuelo" class="text-danger">{{
            errors.claseVuelo
          }}</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="numBoletos">Número de Boletos:</label>
          <input
            type="number"
            id="numBoletos"
            class="form-control"
            :class="{ 'is-valid': !errors.numBoletos && localData.numBoletos }"
            v-model="localData.numBoletos"
            @input="validateNumBoletos"
            min="1"
            max="10"
            required
          />
          <span v-if="errors.numBoletos" class="text-danger">{{
            errors.numBoletos
          }}</span>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-12">
        <p>
          <strong>Precio Total: ${{ precioTotal }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import aeropuertosData from "@/assets/airports.json";

export default {
  name: "VueloStep",
  props: ["formData"],
  data() {
    return {
      localData: { ...this.formData },
      aeropuertos: Array.isArray(aeropuertosData) ? aeropuertosData : [], // Asegurarse de que aeropuertosData sea un array
      errors: {},
    };
  },
  computed: {
    precioTotal() {
      const precios = {
        Economica: 10000,
        Ejecutiva: 20000,
        Primera: 30000,
      };
      return precios[this.localData.claseVuelo] * this.localData.numBoletos;
    },
  },
  methods: {
    emitChanges() {
      this.$emit("update", this.localData);
    },
    validateCiudadOrigen() {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(this.localData.ciudadOrigen)) {
        this.errors.ciudadOrigen = "Ciudad de origen inválida. Solo letras.";
      } else if (
        !this.aeropuertos.some((a) => a.city === this.localData.ciudadOrigen)
      ) {
        this.errors.ciudadOrigen =
          "Ciudad de origen no coincide con la lista de aeropuertos válidos.";
      } else {
        delete this.errors.ciudadOrigen;
      }
      this.emitChanges();
    },
    validateCiudadDestino() {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(this.localData.ciudadDestino)) {
        this.errors.ciudadDestino = "Ciudad de destino inválida. Solo letras.";
      } else if (this.localData.ciudadDestino === this.localData.ciudadOrigen) {
        this.errors.ciudadDestino =
          "La ciudad de destino debe ser diferente de la ciudad de origen.";
      } else if (
        !this.aeropuertos.some((a) => a.city === this.localData.ciudadDestino)
      ) {
        this.errors.ciudadDestino =
          "Ciudad de destino no coincide con la lista de aeropuertos válidos.";
      } else {
        delete this.errors.ciudadDestino;
      }
      this.emitChanges();
    },
    validateFechaSalida() {
      const fechaSalida = new Date(this.localData.fechaSalida);
      const hoy = new Date();
      if (fechaSalida <= hoy) {
        this.errors.fechaSalida =
          "La fecha de salida debe ser posterior a la fecha actual.";
      } else {
        delete this.errors.fechaSalida;
      }
      this.emitChanges();
    },
    validateFechaRegreso() {
      const fechaSalida = new Date(this.localData.fechaSalida);
      const fechaRegreso = new Date(this.localData.fechaRegreso);
      if (fechaRegreso <= fechaSalida) {
        this.errors.fechaRegreso =
          "La fecha de regreso debe ser posterior a la fecha de salida.";
      } else {
        delete this.errors.fechaRegreso;
      }
      this.emitChanges();
    },
    validateNumBoletos() {
      if (this.localData.numBoletos < 1 || this.localData.numBoletos > 10) {
        this.errors.numBoletos = "El número de boletos debe ser entre 1 y 10.";
      } else {
        delete this.errors.numBoletos;
      }
      this.emitChanges();
    },
  },
};
</script>

<style scoped>
.text-danger {
  color: #ff0000;
  font-weight: bold;
}
.is-valid {
  border-color: #28a745;
}
</style>
