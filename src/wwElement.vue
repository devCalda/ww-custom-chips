<template>
  <div class="my-element">
    <v-chip-group
        v-model="internalStateModel"
        column
        :multiple="isMultipleAllowed"
        :max="limitRef"
      >
        <v-chip
          v-for="(option, i) in chipOptions"
          :key="i"
          :disabled="isReadOnly"
          :value="option.value"
          selected-class="selected-chip"
          size="large"
          :filter="showSelectedIcon"
          filter-icon="custom:CustomIconCheckmark"
          variant="outlined"
        >
          {{option.label.en}}
        </v-chip>

        <v-chip
          v-if="extraOptions && extraOptions.length>0"
          selected-class="selected-chip"
          :filter="showSelectedIcon"
          :disabled="isReadOnly"
          :value="selectValue"
          variant="outlined"
          size="large"
          >
          <div>
            <v-select
                id="customSelect"
                v-model="selectValueModel"
                :flat="true"
                bg-color="transparent"
                :menu-icon="showDropdownIcon ? '$expand' : 'none'"
                :items="selectItems"
                item-title="label.en"
                item-value="value"
                variant="solo"
                :value-comparator="(a,b) => false"
                @update:menu="menuOpenedChange"
              >
              </v-select>
          </div>
        </v-chip>
      </v-chip-group>
  </div>
</template>

<script>
import { ref, computed, getCurrentInstance, watch, toRefs } from 'vue';
import { customSVGs } from './customSvgs'
import { VChip } from 'vuetify/components/VChip';
import { VChipGroup } from 'vuetify/components/VChipGroup';
import { VSelect } from 'vuetify/components/VSelect';
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
    const { 
      options: optionsRef,
      initialValue: initialValueRef,
      limit: limitRef,
      gradientColor1,
      gradientColor2,
      backgroundColor,
      colorText,
      colorTextSelected,
      showSelectedIcon,
      isMultipleAllowed,
      isReadOnly,
      extraOptions,
      showDropdownIcon
       } = toRefs(props.content);
    const app = getCurrentInstance()

    const vuetify = createVuetify({
      components: {
        VChipGroup,
        VChip,
        VSelect
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
    
    //const chipOptions = ref(Array.isArray(props.content.options) ? [...props.content.options] : []);
    const chipOptions = computed(() => Array.isArray(optionsRef.value) ? [...optionsRef.value] : []);

    watch(optionsRef, async (newOptions, oldOptions) => {
        console.log("New chip options:");
        console.log(newOptions);
        chipOptions.value = Array.isArray(newOptions) ? [...newOptions] : [];
    })
    /*watch(extraOptions, async (newOptions, oldOptions) => {
      console.log(newOptions);
      /*selectItems.value = [];
      selectItems.value = Array.isArray(newOptions) ? [...newOptions] : [];
    })*/
    watch(initialValueRef, async (newInitValue, oldOptions) => {
        internalState.value = newInitValue;
    })

    const emitChangeEvent = (newValue) => {
      console.log("emit: ", newValue);
      const eventPayload = { name: 'change', event: { domEvent: {}, value: newValue } };
      emit('trigger-event', eventPayload);
    };

    const internalState = ref(initialValueRef.value);
    const selectItems=computed(() => extraOptions.value);//ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'])

    const selectValue = ref('Category');
    const selectValueModel = computed({
      get() {
        return selectValue.value;
      },
      set(newValue) {
        selectValue.value = newValue;
      },
    });

    // Create a computed property with a getter and setter
    const internalStateModel = computed({
      get() {
        // Additional processing when getting the value
        return internalState.value;
      },
      set(newValue) {
        // Additional processing before setting the value
        if(!newValue || newValue == "Category" || selectItems.value.map(obj => obj.value ?? "").includes(newValue)) return;
        internalState.value = newValue;
        selectValue.value =  "Category"
        emitChangeEvent(newValue);
      },
    });

    function menuOpenedChange(isOpened) {
      if(selectValueModel.value == "Category") return;
      if(!isOpened) {
        console.log("closed modal");
        console.log(selectValueModel.value);
        internalStateModel.value = selectValueModel.value;

        selectValue.value = selectValueModel.value;
        internalState.value = selectValueModel.value;
        emitChangeEvent(selectValueModel.value);
        
        /*console.log(selectItems.value.indexOf(newValue));
        if(!selectItems.value.map(obj => obj.value ?? "").includes(newValue.)) {
          console.log("true");
          console.log(newValue);
          selectValueModel.value = { value: 'category', label: { en: 'Category' } }   // When item that not in dropdown selected, display Category
        } else {
          console.log("false");
          console.log(newValue);
          selectValueModel.value = newValue;
        }
        */
      }
    }

    const showDropdownIconStyleDisplay = computed(() => showDropdownIcon ? "flex" : "none");


    return {
      chipOptions,
      internalStateModel,
      limitRef,
      gradientColor1,
      gradientColor2,
      backgroundColor,
      colorTextSelected,
      colorText,
      showSelectedIcon,
      isMultipleAllowed,
      isReadOnly,
      selectValue,
      selectValueModel,
      selectItems,
      extraOptions,
      menuOpenedChange,
      showDropdownIcon,
      showDropdownIconStyleDisplay
    };
  },
};
</script>

<style lang="scss">
.selected-chip {
  border: 0 !important;
  color: v-bind(colorTextSelected) !important;
  background: linear-gradient(90deg,v-bind(gradientColor1), v-bind(gradientColor2)) !important;
}
.v-chip:not(.selected-chip) {
  border: 0;
  color: v-bind(colorText);
  background: v-bind(backgroundColor);
}
#customSelect {
  border: none;
}
.v-chip--disabled {
  opacity: 1 !important;
}
/*.v-field--variant-solo {
  box-shadow: none;
  background: none;
  //padding-inline-end: 0 !important;
}*/
.v-input__details {
  display: none !important;
}
.v-field--appended {
  padding: 0;
}
.v-field__append-inner {
  display: flex !important;
}
.v-field__input {
  padding-inline-start: 0;
  padding-inline-end: 0;
}
.v-menu > .v-overlay__content {
  border-radius: 16px;
}
</style>
