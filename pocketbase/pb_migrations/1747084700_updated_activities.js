/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1262591861")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 8,
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
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1587448267",
    "maxSelect": 4,
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
  }))

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select1288754030",
    "maxSelect": 5,
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
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1262591861")

  // update field
  collection.fields.addAt(4, new Field({
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
  }))

  // update field
  collection.fields.addAt(9, new Field({
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
  }))

  // update field
  collection.fields.addAt(10, new Field({
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
  }))

  return app.save(collection)
})
