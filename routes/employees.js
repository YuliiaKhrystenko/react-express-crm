const express = require("express")
const router = express.Router()
const { auth } = require("../middleware/auth")
const { all, add, edit, remove, employee } = require("../controllers/employees")

// /api/employees
router.get('/', auth, all)

// /api/employees/:id
router.get('/:id', auth, employee)

// /api/emplyees/add
router.post('/add', auth, add)

// /api/emplyees/edit
router.put('/edit/:id', auth, edit)

// /api/emplyees/remove
router.post('/remove/:id', auth, remove)

module.exports = router;