# cpc-container-v3



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default |
| -------- | --------- | ----------- | --------- | ------- |
| `active` | `active`  |             | `boolean` | `false` |


## Events

| Event          | Description | Type                               |
| -------------- | ----------- | ---------------------------------- |
| `restoreState` |             | `CustomEvent<{ state: boolean; }>` |


## Dependencies

### Used by

 - [cpc-eye-dropper](../cpc-eye-dropper)
 - [cpc-input-alpha](../cpc-input-alpha)
 - [cpc-input-color](../cpc-input-color)

### Graph
```mermaid
graph TD;
  cpc-eye-dropper --> cpc-container-v3
  cpc-input-alpha --> cpc-container-v3
  cpc-input-color --> cpc-container-v3
  style cpc-container-v3 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
