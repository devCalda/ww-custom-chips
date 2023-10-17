export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  triggerEvents: [
    { name: 'change', label: { en: 'On change' }, event: { value: [] }, default: true },
],
properties: {
    options: {
        label: { en: 'Options', fr: 'Options' },
        type: 'Array',
        section: 'settings',
        options: {
            item: {
                type: 'Object',
                defaultValue: { label: 'New option', value: '' },
                options: {
                    item: {
                        label: {
                            label: { en: 'Label' },
                            type: 'Text',
                            options: { placeholder: 'Label' },
                            multiLang: true,
                        },
                        value: {
                            label: { en: 'Value' },
                            type: 'Text',
                            options: { placeholder: 'Value' },
                        },
                    },
                },
            },
        },
        defaultValue: [
            { value: 'option', label: { en: 'option - 1' } },
            { value: 'option2', label: { en: 'option - 2' } },
        ],
        bindable: true,
        /* wwEditor:start */
        bindingValidation: {
            type: 'array',
            tooltip:
                'A collection of data in array format: \n\n `[{}, {}, ...] || ["string1", "string2", ...] || [1, 2, ...]`',
        },
        /* wwEditor:end */
    },
    initialValue: {
        label: { en: 'Initial value', fr: 'Initial value' },
        type: 'Array',
        section: 'settings',
        options: {
            item: {
                type: 'Text',
                defaultValue: "",
            },
        },
        defaultValue: [],
        bindable: true,
        /* wwEditor:start */
        bindingValidation: {
            type: 'array',
            tooltip:
                'A collection of data in array format: \n\n `[{}, {}, ...] || ["string1", "string2", ...] || [1, 2, ...]`',
        },
        /* wwEditor:end */
    },
    limit: {
        type: 'Number',
        label: {
            en: 'Limit',
            fr: 'Limite',
        },
        options: {
            min: 0,
            step: 1,
        },
        defaultValue: 5,
        section: 'settings',
    },
    gradientColor1: {
        label: {
            en: 'Gradient color 1',
        },
        type: 'Color',
        section: 'settings',
        defaultValue: '#ef407c',
    },
    gradientColor2: {
        label: {
            en: 'Gradient color 2',
        },
        type: 'Color',
        section: 'settings',
        defaultValue: '#f2736c',
    },
    backgroundColor: {
        label: {
            en: 'Background color unselected',
        },
        type: 'Color',
        section: 'settings',
        defaultValue: '#ffffff',
    },
    colorText: {
        label: {
            en: 'Text color unselected',
        },
        type: 'Color',
        section: 'settings',
        defaultValue: '#000000',
    },
    colorTextSelected: {
        label: {
            en: 'Text color selected',
        },
        type: 'Color',
        section: 'settings',
        defaultValue: '#ffffff',
    },
},
};
