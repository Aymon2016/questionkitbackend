const fs = require('fs/promises')
const path = require('path')

exports.readfile = async (filePath) => {
    const data = await fs.readFile(filePath)
    return JSON.parse(data)
}

exports.writeFile = async (filePath, data) => {
    await fs.writeFile(filePath, JSON.stringify(data))
}
