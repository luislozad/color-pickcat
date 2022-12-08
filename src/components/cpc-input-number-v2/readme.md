# cpc-input-number-v2



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type               | Default     |
| -------- | --------- | ----------- | ------------------ | ----------- |
| `label`  | `label`   |             | `string`           | `undefined` |
| `value`  | `value`   |             | `number \| string` | `0`         |


## Events

| Event       | Description | Type                              |
| ----------- | ----------- | --------------------------------- |
| `decrement` |             | `CustomEvent<{ value: number; }>` |
| `increment` |             | `CustomEvent<{ value: number; }>` |


## Dependencies

### Used by

 - [color-pickcat](../color-pickcat)

### Depends on

- [cpc-input-v1](../cpc-input-v1)

### Graph
```mermaid
graph TD;
  cpc-input-number-v2 --> cpc-input-v1
  color-pickcat --> cpc-input-number-v2
  style cpc-input-number-v2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
