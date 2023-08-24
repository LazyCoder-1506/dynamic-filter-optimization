## Hosted at [https://pranayan-dynamic-filter.netlify.app/](https://pranayan-dynamic-filter.netlify.app/)

- Used large dataset and converted it to an array of JS objects for ease of import
- Things work as expected when filter options are selected. However when filter options are unselected, the filter options don't always work optimally
- Used simple brute force approach to update data and filter options. Explored ideas like sorting, segmenting but none were extendable and brute force is taking very short time to update changes
- Stored all global state variables in a single place to resolve circular dependency issue
- Unit tests and stories are very basic since they were new topics and I faced some difficulties with dependency innjection of redux provider