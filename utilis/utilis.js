const fs = require('fs/promises')
const path = require('path')

const dbPath = path.resolve('db', 'user.json')

exports.readfileUser = async () => {
    const data = await fs.readFile(dbPath)
    return JSON.parse(data)
}

exports.writeFileUser = async (data) => {
    await fs.writeFile(dbPath, JSON.stringify(data))
}


exports.readfile = async (filePath) => {
    const data = await fs.readFile(filePath)
    return JSON.parse(data)
}

exports.writeFile = async (filePath, data) => {
    await fs.writeFile(filePath, JSON.stringify(data))
}
