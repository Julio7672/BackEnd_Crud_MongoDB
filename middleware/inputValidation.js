const checkName = (req, res, next) => {
    const { name } = req.body;
    if (!name ) {
        return res.status(400).json({ message: 'Name is required' });
    }
    if (name.length < 2) {
        return res.status(400).json({ message: 'Name must be at least 2 characters' });
    }
    next();
}
const checkValue = (req, res, next) => {
    const { value } = req.body;
    if (value === "") {
        return res.status(400).json({ message: 'Value is required' });
    }
    if (value <= 0) {
        return res.status(400).json({ message: 'Value must be a number greater than 0' });
    }
    next();
}

const checkStock = (req, res, next) => {
    const { stock } = req.body;
    if (stock === "") {
        return res.status(400).json({ message: 'Stock is required' });
    }
    if (stock < 0) {
        return res.status(400).json({ message: 'Stock must be a positive number' });
    }
    next();
}

const checkDescription = (req, res, next) => {
    const { description } = req.body;
    if (description.length > 0 && description.length < 10) {
        return res.status(400).json({ message: 'Description must be at least 10 characters' });
    }
    next();
}

module.exports = {
    checkName,
    checkValue,
    checkStock,
    checkDescription
}