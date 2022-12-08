# color-pickcat



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute    | Description | Type     | Default                        |
| ------------- | ------------ | ----------- | -------- | ------------------------------ |
| `colorArea`   | `color-area` |             | `string` | `this.getColorArea('#a200ff')` |
| `colorMarker` | `color`      |             | `string` | `'#703493'`                    |


## Events

| Event   | Description | Type                      |
| ------- | ----------- | ------------------------- |
| `color` |             | `CustomEvent<ColorEvent>` |


## Dependencies

### Depends on

- [cpc-color-area](../cpc-color-area)
- [cpc-hue-control](../cpc-hue-control)
- [cpc-alpha-control](../cpc-alpha-control)
- [cpc-input-color](../cpc-input-color)
- [cpc-eye-dropper](../cpc-eye-dropper)
- [cpc-container-v3](../cpc-container-v3)
- [cpc-input-number-v2](../cpc-input-number-v2)

### Graph
```mermaid
graph TD;
  color-pickcat --> cpc-color-area
  color-pickcat --> cpc-hue-control
  color-pickcat --> cpc-alpha-control
  color-pickcat --> cpc-input-color
  color-pickcat --> cpc-eye-dropper
  color-pickcat --> cpc-container-v3
  color-pickcat --> cpc-input-number-v2
  cpc-input-color --> cpc-container-v3
  cpc-input-color --> cpc-input-v1
  cpc-input-color --> cpc-menu-v1
  cpc-menu-v1 --> cpc-button-v3
  cpc-menu-v1 --> cpc-divisor-v1
  cpc-menu-v1 --> cpc-popup-v1
  cpc-eye-dropper --> cpc-container-v3
  cpc-input-number-v2 --> cpc-input-v1
  style color-pickcat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
