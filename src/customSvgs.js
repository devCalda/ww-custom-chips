//customSvgs.ts
import { h } from "vue";
//import type { IconSet, IconProps } from "vuetify";
import CustomIconCheckmark from './CustomIconCheckmark.vue'

const customSvgNameToComponent = {
  CustomIconCheckmark,
};

const customSVGs = {
  component: (props) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs };