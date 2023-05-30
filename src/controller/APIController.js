import pool from '../configs/connectDB';

// working for member
let getAllMembers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM members');

    return res.status(200).json({
        message: 'getAllMembers',
        data: rows
    });
}

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
let getAllApartments = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM apartments');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
let getApartment = async (req, res) => {
    console.log('check param: ', req.body);
    let { apartment_id } = req.body;
    if (!apartment_id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    const [rows, fields] = await pool.execute('select * from apartments where apartment_id = ?', [apartment_id]);

    return res.status(200).json({
        message: 'getApartment ok',
        data: rows
    })
}

let createApartment = async (req, res) => {
    console.log('check param: ', req.body);
    let { apartment_id, floot, area } = req.body;
    if (!apartment_id || !floot || !area) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into apartments (apartment_id, floot, area) values (?, ?, ?)',
        [apartment_id, floot, area]);

    return res.status(200).json({
        message: 'createApartment ok'
    })
}

let updateApartment = async (req, res) => {
    console.log('check param: ', req.body);
    let [apartment_id, floot, area, owner_id, time_start, status] = req.body;
    if (!apartment_id || !floot || !area) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    if (!owner_id) owner_id = 0;
    if (!time_start) time_start = '1975-4-30';
    if (!status) status = '';

    await pool.execute('update apartments set floot= ?, area = ? , owner_id = ?, time_start = ? , status= ? where apartment_id = ?',
        [floot, area, owner_id, time_start, status, apartment_id]);

    return res.status(200).json({
        message: 'updateApartment ok'
    })
}

let deleteApartment = async (req, res) => {
    let [apartment_id] = req.body;
    if (!apartment_id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from apartments where apartment_id = ?', [apartment_id])
    return res.status(200).json({
        message: 'deleteApartment ok'
    })
}

// working for family
let getAllFamilys = async (req, res) => {
    const [rows, fields] = await pool.execute('select * from familys');
    return res.status(200).json({
        message: 'getAllFamilys',
        data: rows
    })
}
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
let getAllCars = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM cars');

    return res.status(200).json({
        message: 'getAllcars',
        data: rows
    })
}

let getCar = async (req, res) => {
    let { car_id } = req.body;
    if (!car_id) {
        res.status(200).json({
            message: 'thiếu thông tin car_id'
        })
    }

    const [rows, fields] = await pool.execute('select * from cars where car_id = ?', [car_id]);

    return res.status(200).json({
        message: 'getCar ok',
        data: rows
    })
}

let createCar = async (req, res) => {

    let { car_type, car_number, member_id } = req.body;
    if (!car_type || !car_number || !member_id) {
        res.status(200).json({
            message: 'thiếu thông tin'
        })
    }

    const [row, fields] = await pool.execute('insert into cars (car_type, car_number, member_id) values (?, ?, ?)',
        [car_type, car_number, member_id]);

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
let getAllPhoneNumber = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM phone_numbers');

    return res.status(200).json({
        message: 'getAllPhone',
        data: rows
    })
}
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
    // member
    getAllMembers,
    getMember,
    createMember,
    updateMember,
    deleteMember,

    // car
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,

    // apartment
    getAllApartments,
    getApartment,
    createApartment,
    updateApartment,
    deleteApartment,

    // phone-number
    getAllPhoneNumber,
    getPhoneNumber,
    createPhoneNumber,
    updatePhoneNumber,
    deletePhoneNumber,

    // family
    getAllFamilys,
    getFamily,
    createFamily,
    updateFamily,
    deleteFamily
}