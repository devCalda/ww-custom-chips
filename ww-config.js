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
    extraOptions: {
        label: { en: 'Extra options for dropdown' },
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
            /*{ value: 'option3', label: { en: 'option - 3' } },
            { value: 'option4', label: { en: 'option - 4' } },*/
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
    showSelectedIcon:{
        type: "OnOff",
        section: 'settings',
        label: {
            en: "Show selected icon",
            fr: "Show selected icon"
        }
    },
    initialDropdownText:{
        type: "Text",
        section: 'settings',
        defaultValue: "Other",
        label: {
            en: "initialDropdownText",
            fr: "initialDropdownText"
        }
    },
    showDropdownIcon:{
        type: "OnOff",
        section: 'settings',
        label: {
            en: "Show dropdown icon",
            fr: "Show dropdown icon"
        }
    },
    isReadOnly:{
        type: "OnOff",
        section: 'settings',
        label: {
            en: "Is read only?",
            fr: "Is read only"
        }
    },
    isMultipleAllowed:{
        type: "OnOff",
        section: 'settings',
        label: {
            en: "Allow multiple selection",
            fr: "Allow multiple selection"
        }
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
