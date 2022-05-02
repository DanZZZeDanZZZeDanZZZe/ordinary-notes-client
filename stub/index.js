const fs = require("fs")

const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")

const PORT = 3002
const DATA_PATH = "data"

const readJSON = async (fileName) => {
  const file = `${fileName}.json`
  const path = `${__dirname}/${DATA_PATH}/${file}`

  try {
    const buf = await fs.promises.readFile(path)
    const data = JSON.parse(buf.toString())

    console.log("\n\n", file, "was readed", "\n\n", data)

    return data
  } catch (err) {
    console.log("\n\n", file, "wasn't readed", "\n\n", err)
  }

  return null
}

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan("tiny"))
app.use(cors()) // Enable All CORS Requests

app.get("/api/notes/1", async (req, res) => {
  const data = await readJSON("note-1")

  if (!data) {
    return res.status(404).send({
      message: "Data not found",
    })
  }

  res.json(data)
})

app.get("/api/notes/4", async (req, res) => {
  const data = await readJSON("todo-4")

  if (!data) {
    return res.status(404).send({
      message: "Data not found",
    })
  }

  res.json(data)
})

app.get("/api/notes/all", async (req, res) => {
  console.log("sedsdfdsfs")
  const data = await readJSON("notes-preview")

  if (!data) {
    return res.status(404).send({
      message: "Data not found",
    })
  }

  res.json(data)
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
