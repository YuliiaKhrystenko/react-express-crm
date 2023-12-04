const { prisma } = require("../prisma/prisma-client")

// @route GET /api/employees
// @access Private
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany()

    res.status(200).json(employees)
  } catch(error) {
    res.status(500).json({ message: "Could not find employees" })
  }
}

// @route GET /api/employees/:id
// @access Private
const employee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id
      }
    })
    res.status(200).json(employee)
  } catch {
    res.status(500).json({ message: "Failed to get employee" })
  }
}

// @route POST /api/employees/add
// @access Private
const add = async (req, res) => {
  try {
    const data = req.body

    if (!data.firstName || !data.lastName || !data.age || !data.address) {
      return res
        .status(400)
        .json({ message: "Please, fill in the required fields" })
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id
      }
    })

    return res.status(201).json(employee)

  } catch {
    res.status(500).json({ message: "Something went wrong" })
  }
}

// @route POST /api/employees/remove
// @access Private
const remove = async (req, res) => {
  const { id } = req.body
  try{
    await prisma.employee.delete({
      where: {
        id
      }
    })
    res.status(204).json('OK')
  } catch {
    res.status(500).json({ message: "Failed to delete employee" })
  }
}

// @route PUT /api/employees/edit
// @access Private
const edit = async (req, res) => {
  const data = req.body
  const id = data.id
  try {
    await prisma.employee.update({
      where: {
        id
      },
      data
    })
    res.status(204).json('OK')
  } catch {
    res.status(500).json({ message: "Failed to edit employee" })
  }
}

module.exports = { all, add, remove, edit, employee }