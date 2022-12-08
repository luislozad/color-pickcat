# cpc-eye-dropper



<!-- Auto Generated Below -->


## Events

| Event             | Description | Type                                |
| ----------------- | ----------- | ----------------------------------- |
| `closeEyeDropper` |             | `CustomEvent<{ state: boolean; }>`  |
| `getColor`        |             | `CustomEvent<{ sRGBHex: string; }>` |
| `openEyeDropper`  |             | `CustomEvent<{ state: boolean; }>`  |


## Dependencies

### Used by

 - [color-pickcat](../color-pickcat)

### Depends on

- [cpc-container-v3](../cpc-container-v3)

### Graph
```mermaid
graph TD;
  cpc-eye-dropper --> cpc-container-v3
  color-pickcat --> cpc-eye-dropper
  style cpc-eye-dropper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
