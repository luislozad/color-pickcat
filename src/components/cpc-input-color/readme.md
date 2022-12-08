# cpc-input-color



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type       | Default     |
| -------- | --------- | ----------- | ---------- | ----------- |
| `colors` | --        |             | `string[]` | `[]`        |
| `value`  | `value`   |             | `string`   | `'#FFFFFF'` |


## Events

| Event           | Description | Type                                     |
| --------------- | ----------- | ---------------------------------------- |
| `inputChange`   |             | `CustomEvent<InputEvent>`                |
| `selectedColor` |             | `CustomEvent<{ currentColor: string; }>` |


## Dependencies

### Used by

 - [color-pickcat](../color-pickcat)

### Depends on

- [cpc-container-v3](../cpc-container-v3)
- [cpc-input-v1](../cpc-input-v1)
- [cpc-menu-v1](../cpc-menu-v1)

### Graph
```mermaid
graph TD;
  cpc-input-color --> cpc-container-v3
  cpc-input-color --> cpc-input-v1
  cpc-input-color --> cpc-menu-v1
  cpc-menu-v1 --> cpc-button-v3
  cpc-menu-v1 --> cpc-divisor-v1
  cpc-menu-v1 --> cpc-popup-v1
  color-pickcat --> cpc-input-color
  style cpc-input-color fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
