# Reporting Table 
The reporting table is a style-specific wrapper component built around skeleton table components (also usable through podium-charts). It is recommended to use these skeleton components for any specific styling needs on the table itself. 

This story is an example of a simple and basic text-only table. 

## Props 

- data (array, required) 
- headers (array of objects, required) 
- dataComponents (object)
- loading (bool)

## Configuration

### Data 
Data should be structured as an array of objects, with each object being the data for an entire row. The key values need to match the `id` field of the header config. As we will see with the `dataComponents` option below, the value of the data can be fairly customized. For example, you may have a data object that looks like this: 

```js
[{
	name: { first: "John", last: "Doe" },
	review: 5
}] 
``` 
This format allows you to grab the nested data to build out more complex cell data. 


### Headers
**Header Object**

Headers are created as an array of objects. Each object represent attributes of that particular header. These are the accessable keys in each header object:

```js
{
	id: String (required)  // key to associate with data object key
	content: [String | React Component] (required) // data to display in the header cell
	width: String // set a fixed width on the entire column (px or % value)
	tooltip: [String | React Component] // adds a help icon in the header with a tooltip containing this content 
}
```

_Example:_

**Header Definition**

```js
const headers = [
	{
		id: 'name', // key to associate with data
		content: "Contact Name", // display value of the header cell
	},
	{
		id: 'review',
		content: 'Review Received'
	}
]
```

**Data Definition**

The `id` key must match whatever key will be associated with the data.

```js
const data = [
	{
		name: 'Beyonce',
		review: 5
	},
	{
		name: 'Jay-Z',
		review: 4.5
	}
]
```

This will produce the following result: 

|Contact Name|Review Received|
|------------|:-------------:|
|Beyonce|5|
|Jay-Z|4.5|

### Data Components _optional_
If you would like to display a react component inside of a table data cell, you will need to pass in a `dataComponents` prop, which is an object mapping each data key (ie. `name` in the previous examples) to a custom built component. Let's use this data as an example: 

```js
[{
	name: { first: "John", last: "Doe" },
	review: 5
}] 
``` 
Let's say you would like to have the cell Display the first and last names on a separate line inside the same cell, you would start by building a component that looks something like this:

```jsx
const ContactNameDisplayCell = ({ rowData }) => (
	<div style={styles}>
		<div>{rowData.name.first}</div>
		<div>{rowData.name.last}</div>
	</div>
)
```
Notice the `rowData` prop that is automatically passed into the component. This gives you access to the entire data object for the specific row, allowing you full customization to build your cell how you'd like. 

Now that you have your component built, create the `dataComponents` object like so:

```js
const dataComponents = {
	name: <ContactNameDisplayCell />
}
```
Once this prop is passed in, the table will know to map all cells associated with the `name` key to the provided component (passing in the data along the way). 

### Loading
The table currently has a ghosting state which is automatically applied by passing in the `loading` prop. This is not required. 

### Putting It All Together
Once you have created your configuration objects, simply put the data together into the `ReportingTable` component:

```js
<ReportingTable
	loading={false}
	data={data}
	headers={headers}
	dataComponents={dataComponents}
/>
```
