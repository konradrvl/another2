/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1579384326",
        "max": 0,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3578368839",
        "max": 0,
        "min": 0,
        "name": "display_name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1843675174",
        "max": 0,
        "min": 0,
        "name": "description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select105650625",
        "maxSelect": 2,
        "name": "category",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "cognition",
          "language-literacy",
          "music",
          "gross-motor",
          "fine-motor",
          "arts-culture",
          "nature-environment",
          "math"
        ]
      },
      {
        "hidden": false,
        "id": "number1095698904",
        "max": null,
        "min": null,
        "name": "min_age_months",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number4167668393",
        "max": null,
        "min": null,
        "name": "max_age_months",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number1959778203",
        "max": null,
        "min": null,
        "name": "min_group_size",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number3454618858",
        "max": null,
        "min": null,
        "name": "max_group_size",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select1587448267",
        "maxSelect": 2,
        "name": "location",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "indoors",
          "outdoors",
          "gymnasium",
          "playground"
        ]
      },
      {
        "hidden": false,
        "id": "select1288754030",
        "maxSelect": 1,
        "name": "weather",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "sunny",
          "cloudy",
          "rainy",
          "windy",
          "snowy"
        ]
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1262591861",
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tvvyNRTw3V` ON `activities` (`name`)"
    ],
    "listRule": null,
    "name": "activities",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1262591861");

  return app.delete(collection);
})
