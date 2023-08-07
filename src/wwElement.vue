<template>
  <div class="my-element">
    <v-chip-group
        v-model="internalStateModel"
        column
        multiple
        :max="limitRef"
      >
        <v-chip
          v-for="(option, i) in initialOptions"
          :key="i"
          :value="option.value"
          selected-class="selected-chip"
          size="large"
          filter
          filter-icon="custom:CustomIconCheckmark"
          variant="outlined"
        >
          {{option.label.en}}
        </v-chip>
      </v-chip-group>
  </div>
</template>

<script>
import { ref, computed, getCurrentInstance, watch, toRefs } from 'vue';
import { customSVGs } from './customSvgs'
import { VChip } from 'vuetify/components/VChip';
import { VChipGroup } from 'vuetify/components/VChipGroup';
import { createVuetify } from 'vuetify'
import { Ripple } from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiCheckCircleOutline } from '@mdi/js';
import 'vuetify/styles';

export default {
  props: {
    content: { type: Object, required: true },
  },
  emits: ['trigger-event'],
  setup(props, { emit }) {
    const { options: optionsRef, limit: limitRef } = toRefs(props.content);
    const app = getCurrentInstance()

    const vuetify = createVuetify({
      components: {
        VChipGroup,
        VChip,
      },
      directives: {
        Ripple,
      },
      icons: {
        defaultSet: 'mdi',
        aliases: {
          ...aliases,
          account: mdiCheckCircleOutline,
        },
        sets: {
          mdi,
          custom: customSVGs,
        },
      },
    })
    app.appContext.app.use(vuetify);
    
    const initialOptions = ref(Array.isArray(props.content.options) ? [...props.content.options] : []);
    watch(optionsRef, async (newOptions, oldOptions) => {
        initialOptions.value = Array.isArray(newOptions) ? [...newOptions] : [];
    })

    const emitChangeEvent = (newValue) => {
      const eventPayload = { name: 'change', event: { domEvent: {}, value: newValue } };
      emit('trigger-event', eventPayload);
    };

    const internalState = ref([]);

    // Create a computed property with a getter and setter
    const internalStateModel = computed({
      get() {
        // Additional processing when getting the value
        return internalState.value;
      },
      set(newValue) {
        // Additional processing before setting the value
        internalState.value = newValue;
        emitChangeEvent(newValue);
      },
    });

    return {
      initialOptions,
      internalStateModel,
      limitRef
    };
  },
};
</script>

<style lang="scss" scoped>
.selected-chip {
  border: 0;
  color: white;
  background: linear-gradient(90deg,#ef407c, #f2736c);
}
.v-chip:not(.selected-chip) {
  border: 0;
  color: black;
  background: white;
}
</style>
