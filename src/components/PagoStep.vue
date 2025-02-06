<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <h4>Datos de Pago</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="tarjeta">Número de Tarjeta:</label>
          <input type="text" v-model="localData.tarjeta" @input="validateTarjeta" maxlength="16" :class="{ 'is-valid': localData.tarjeta.length === 16 && !errors.tarjeta }"
          />
          <img :src="cardImage" alt="Tipo de tarjeta" v-if="cardImage" />
          <p v-if="errors.tarjeta">{{ errors.tarjeta }}</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="vencimiento">Fecha de Vencimiento:</label>
          <input
            type="text"
            id="vencimiento"
            class="form-control"
            :class="{
              'is-valid': !errors.vencimiento && localData.vencimiento,
            }"
            v-model="localData.vencimiento"
            @input="validateVencimiento"
            required
          />
          <span v-if="errors.vencimiento" class="text-danger">{{
            errors.vencimiento
          }}</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            class="form-control"
            :class="{ 'is-valid': !errors.cvv && localData.cvv }"
            v-model="localData.cvv"
            @input="validateCVV"
            required
          />
          <span v-if="errors.cvv" class="text-danger">{{ errors.cvv }}</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="nombreTarjeta">Nombre en la Tarjeta:</label>
          <input
            type="text"
            id="nombreTarjeta"
            class="form-control"
            :class="{
              'is-valid': !errors.nombreTarjeta && localData.nombreTarjeta,
            }"
            v-model="localData.nombreTarjeta"
            @input="validateNombreTarjeta"
            required
          />
          <span v-if="errors.nombreTarjeta" class="text-danger">{{
            errors.nombreTarjeta
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "PagoStep",
  props: ["formData"],
  data() {
    return {
      localData: {
        tarjeta: '""',
      },
      errors: {},
      cardImage: null,
    };
  },
  methods: {
    emitChanges() {
      this.$emit("update", this.localData);
    },
    validateTarjeta() {
      const regex = /^[0-9]{16}$/;
      if (!regex.test(this.localData.tarjeta)) {
        this.errors.tarjeta = "Número de tarjeta inválido.";
      } else {
        delete this.errors.tarjeta;
      }
      this.emitChanges();
    },
    detectCardType() {
      const tarjeta = this.localData.tarjeta;
      if (/^4/.test(tarjeta)) {
        this.cardImage = require('@/assets/images/visa.png');
      } else if (/^5[1-5]/.test(tarjeta)) {
        this.cardImage = require('@/assets/images/mastercard.png');
      } else if (/^3[47]/.test(tarjeta)) {
        this.cardImage = require('@/assets/images/amex.png');
      } else {
        this.cardImage = null;
      }
    },
    validateVencimiento() {
      const fechaVencimiento = new Date(this.localData.vencimiento);
      const hoy = new Date();
      if (fechaVencimiento <= hoy) {
        this.errors.vencimiento =
          "La fecha de vencimiento debe ser posterior a la fecha actual.";
      } else {
        delete this.errors.vencimiento;
      }
      this.emitChanges();
    },
    validateCVV() {
      const regex = /^[0-9]{3,4}$/;
      if (!regex.test(this.localData.cvv)) {
        this.errors.cvv = "CVV inválido.";
      } else {
        delete this.errors.cvv;
      }
      this.emitChanges();
    },
    validateNombreTarjeta() {
      const regex = /^[a-zA-Z\s]{3,}$/;
      if (!regex.test(this.localData.nombreTarjeta)) {
        this.errors.nombreTarjeta =
          "Nombre debe tener al menos 3 caracteres y solo letras y espacios.";
      } else {
        delete this.errors.nombreTarjeta;
      }
      this.emitChanges();
    },
  },
  watch: {
    'localData.tarjeta': function() {
      this.detectCardType();
    }
  }
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
