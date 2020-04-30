module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "app/db/dev.sqlite3",
    "logging": false,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true
    }
  },
  "test": {
    "dialect": "sqlite",
    "storage": "__test__/db/test.sqlite3",
    "logging": false,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true
    }
  }
}
