import pool from '../configs/connectDB';

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    console.log('check create new user: ', req.params);
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update users set firstName= ?, lastName = ? , email = ? , address= ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from users where id = ?', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}

let getAllMembers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM members');

    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllApartments = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM apartments');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getAllFamily = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM familys');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getAllCars = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM cars');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

// working for member
let getMember = async (req, res) => {
    console.log("check param: ", req.body);
    let { member_id } = req.body;
    console.log("check memberId: ", member_id);
    const [rows, fields] = await pool.execute('SELECT * FROM members where member_id = ?', [member_id]);
    return res.status(200).json({
        message: 'getMember ok',
        data: rows
    })
}

let createMember = async (req, res) => {

    console.log('check create new member: ', req.body);
    let { name, sex, date_of_birth, identitycard, apartment_id, family_id } = req.body;

    if (!name || !sex || !date_of_birth || !identitycard || !apartment_id || !family_id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into members(name, sex, date_of_birth, identitycard, apartment_id, family_id) values (?, ?, ?, ?, ?, ?)',
        [name, sex, date_of_birth, identitycard, apartment_id, family_id]);
    return res.status(200).json({
        message: 'createMember ok'
    })
}

let updateMember = async (req, res) => {
    console.log("check param: ", req.body);
    let { member_id, name, sex, date_of_birth, identitycard, apartment_id, family_id } = req.body;

    if (!member_id || !name || !sex || !date_of_birth || !identitycard || !apartment_id || !family_id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update members set name= ?, sex = ? , date_of_birth = ? , identitycard= ?, apartment_id= ?, family_id= ? where member_id = ?',
        [name, sex, date_of_birth, identitycard, apartment_id, family_id, member_id]);

    return res.status(200).json({
        message: 'updateMember ok'
    })
}

let deleteMember = async (req, res) => {
    let member_id = req.body;

    await pool.execute('delete from members where member_id = ?', [member_id]);

    return res.status(200).json({
        message: 'deleteMember ok'
    })
}

// working for apartment
let getApartment = async (req, res) => {

    return res.status(200).json({
        message: 'getApartment ok'
    })
}

let createApartment = async (req, res) => {

    return res.status(200).json({
        message: 'createApartment ok'
    })
}

let updateApartment = async (req, res) => {

    return res.status(200).json({
        message: 'updateApartment ok'
    })
}

let deleteApartment = async (req, res) => {

    return res.status(200).json({
        message: 'deleteApartment ok'
    })
}

// working for family
let getFamily = async (req, res) => {

    return res.status(200).json({
        message: 'getFamily ok'
    })
}

let createFamily = async (req, res) => {

    return res.status(200).json({
        message: 'createFamily ok'
    })
}

let updateFamily = async (req, res) => {

    return res.status(200).json({
        message: 'updateFamily ok'
    })
}

let deleteFamily = async (req, res) => {

    return res.status(200).json({
        message: 'deleteFamily ok'
    })
}

// working for car
let getCar = async (req, res) => {

    return res.status(200).json({
        message: 'getCar ok'
    })
}

let createCar = async (req, res) => {

    return res.status(200).json({
        message: 'createCar ok'
    })
}

let updateCar = async (req, res) => {

    return res.status(200).json({
        message: 'updateCar ok'
    })
}

let deleteCar = async (req, res) => {

    return res.status(200).json({
        message: 'deleteCar ok'
    })
}

// working for phone-number
let getPhoneNumber = async (req, res) => {

    return res.status(200).json({
        message: 'getPhoneNumber ok'
    })
}

let createPhoneNumber = async (req, res) => {

    return res.status(200).json({
        message: 'createPhoneNumber ok'
    })
}

let updatePhoneNumber = async (req, res) => {

    return res.status(200).json({
        message: 'updatePhoneNumber ok'
    })
}

let deletePhoneNumber = async (req, res) => {

    return res.status(200).json({
        message: 'deletePhoneNumber ok'
    })
}

module.exports = {
    // user
    getAllUsers, createNewUser, updateUser, deleteUser,

    // members
    getAllMembers,
    //getMember,


    // familys
    getAllFamily,
    //getFamily,

    getAllApartments, getAllCars, getPhoneNumber,

    // member
    getMember,
    createMember,
    updateMember,
    deleteMember,

    // car
    getCar,
    createCar,
    updateCar,
    deleteCar,

    // apartment
    getApartment,
    createApartment,
    updateApartment,
    deleteApartment,

    // phone-number
    getPhoneNumber,
    createPhoneNumber,
    updatePhoneNumber,
    deletePhoneNumber,

    // family
    getFamily,
    createFamily,
    updateFamily,
    deleteFamily
}