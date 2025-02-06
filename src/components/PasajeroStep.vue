<template>
  <div>
    <h4>Datos del Pasajero</h4>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-valid': !errors.nombre && localData.nombre }"
            v-model="localData.nombre"
            @input="validateNombre"
            required
          />
          <span v-if="errors.nombre" class="text-danger">{{
            errors.nombre
          }}</span>
        </div>
        <div class="form-group">
          <label for="pasaporte">Pasaporte:</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-valid': !errors.pasaporte && localData.pasaporte }"
            v-model="localData.pasaporte"
            @input="validatePasaporte"
            required
          />
          <span v-if="errors.pasaporte" class="text-danger">{{
            errors.pasaporte
          }}</span>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            class="form-control"
            :class="{
              'is-valid': !errors.fechaNacimiento && localData.fechaNacimiento,
            }"
            v-model="localData.fechaNacimiento"
            @input="validateFechaNacimiento"
            required
          />
          <span v-if="errors.fechaNacimiento" class="text-danger">{{
            errors.fechaNacimiento
          }}</span>
        </div>
        <div class="form-group">
          <label for="nacionalidad">Nacionalidad:</label>
          <select
            class="form-control"
            :class="{
              'is-valid': !errors.nacionalidad && localData.nacionalidad,
            }"
            v-model="localData.nacionalidad"
            @change="emitChanges"
            required
          >
            <option
              v-for="pais in paises"
              :key="pais.iso2"
              :value="pais.nameES"
            >
              {{ pais.nameES }}
            </option>
          </select>
          <span v-if="errors.nacionalidad" class="text-danger">{{
            errors.nacionalidad
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paisesData from "@/assets/countries.json";

export default {
  name: "PasajeroStep",
  props: ["formData"],
  data() {
    return {
      localData: { ...this.formData },
      errors: {},
      paises: paisesData,
    };
  },
  methods: {
    emitChanges() {
      this.$emit("update", this.localData);
    },
    validateNombre() {
      const regex = /^[a-zA-Z\s]{3,}$/;
      if (!regex.test(this.localData.nombre)) {
        this.errors.nombre =
          "Nombre debe tener al menos 3 caracteres y solo letras y espacios.";
      } else {
        delete this.errors.nombre;
      }
      this.emitChanges();
    },
    validatePasaporte() {
      const regex = /^[a-zA-Z0-9]{6,9}$/; // Ajusta según el patrón de pasaporte argentino
      if (!regex.test(this.localData.pasaporte)) {
        this.errors.pasaporte = "Número de pasaporte inválido.";
      } else {
        delete this.errors.pasaporte;
      }
      this.emitChanges();
    },
    validateFechaNacimiento() {
      const fechaNacimiento = new Date(this.localData.fechaNacimiento);
      const hoy = new Date();
      const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      if (edad < 18) {
        this.errors.fechaNacimiento = "Debes ser mayor de 18 años.";
      } else {
        delete this.errors.fechaNacimiento;
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
