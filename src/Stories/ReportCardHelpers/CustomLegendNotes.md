# Custom Formatted Legend
We provide a few options for adding custom formatting to the legend component. 

## Disabled Datakey Item 
This is primarily used for upsells or to show datakeys that have no direct data attached to them. When defining your datakeys in the legend, specify a key of `disabled: true` to receive the default styling that appears in this story: 

```jsx
<Legend
	...
	displayOptions={[
		{
			name: 'Webchat',
			dataKey: 'webchat',
			color: colors.cobaltBlue,
			disabled: true
		},
		{ 
			name: 'Organic', 
			dataKey: 'organic', 
			color: colors.cobaltBlue 
		},
		{
			name: 'Text Message',
			dataKey: 'sms',
			color: colors.poppyRed,
		}
	]}
/>
``` 

**Note:** All of the disabled keys will appear at the bottom of the legend.

## Custom Component For Value  
If you would like to replace the displayed value in the legend with a custom component, you can define a custom formatter function that takes `dataKey` and `value`. This should handle the conditional logic to display either your custom component/formatter or a default formatter for keys that don't meet the direct condition:

```js
const customFormatter = (value, dataKey) => {
  if (dataKey === 'yelp') {
    return (
      <a href="//yelp.com" target="_blank" rel="noopener noreferrer">
        View In Yelp
      </a>
    );
  }
  return formatters.roundToPlaces(1)(value);
};  
```

You can then provide this formatter to the Legend component:

```jsx
<Legend
	formatter={customFormatter}
	...
/>
``` 

