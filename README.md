# K6 performance testing

This is a performance testing exercise using postman collections

## API source: https://petstore.swagger.io/#/
- K6 Built-in metrics https://grafana.com/docs/k6/latest/using-k6/metrics/reference/

##tool used for performance:

- https://grafana.com/docs/k6/latest/get-started/running-k6/
- https://fakerjs.dev/api/number.html

## BLOG that was referenced:

- https://medium.com/10ms-technology-blog/load-testing-made-easy-with-k6-using-faker-library-and-csv-files-c997d48fb6e2

## How to setup repo
```bash
    npm install
```


## How to run the test/s

```bash
  k6 run ./tests/petstore_k6.js
```

