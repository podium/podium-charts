# Pagination
This component makes it easy to control paginating large sets of data. 

All state management should be done from the parent as this is a dumb component. 

## Props
- currentPage (number)
- onPageChange (function, required)
- totalPages (number, required)

## onPageChange
This function receives the next page as a callback argument, depending on if the user clicks 'Next' or 'Previous'.

For Example:

```jsx
	handlePageChange = newPage => {
		this.setState({currentPage: newPage});
	}
```
