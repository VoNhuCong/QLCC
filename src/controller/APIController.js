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
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getAllFamily = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getAllCars = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let getPhoneNumber = async (req, res) => {
    let member_id = req.params.id;
    if (!member_id) {
        return res.status(200).json({
            message: 'missing member_id'
        })
    }

    const [rows, fields] = await pool.execute('SELECT * FROM phone_numbers WHERE member_id = ?', [member_id]);

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let genData = async (req, res) => {

    // define data for members table
    let member_id = 0;
    let name = 'vonhucong';
    let sex = 'nam';
    let date_of_birth = '1999-8-11';
    let identitycard = 187777709;

    // define data for phone_numbers table
    let phone_number = '0962941';

    // define data for cars table
    let car_id = 0;
    let car_type = 'xe máy';
    let car_number = 'xxx';

    // define data for apartments
    let apartment_id = 0;
    let floot = 0;
    let area = 0;

    // define data for familys
    let family_id = 0;

    for (let i = 0; i < 500; i++) {
        member_id = i;
        // insert to members table
        await pool.execute('insert into members(member_id, name, sex, date_of_birth, identitycard, car_id, apartment_id) values (?, ?, ?, ?, ?, ?, ?)',
            [member_id, name, sex, date_of_birth, identitycard, car_id, apartment_id]);

        // insert to phone_numbers table
        await pool.execute('insert into phone_numbers(member_id, phone_number) values (?, ?)',
            [member_id, phone_number + i]);

        // insert to cars table
        await pool.execute('insert into cars(car_id, car_type, car_number) values (?, ?, ?)',
            [car_id, car_type, car_number + i]);

        // insert to apartments table
        await pool.execute('insert into apartments(apartment_id, floot, area) values (?, ?, ?)',
            [apartment_id, floot, area]);

        // insert to familys table
        await pool.execute('insert into familys(family_id) values (?)',
            [family_id]);

        family_id++;
        car_id++;
        apartment_id++;
        floot++;
        area++;
    }
    return res.status(200).json({
        message: 'ok'
    })
}

let delAllData = async (req, res) => {
    await pool.execute('truncate apartments');
    await pool.execute('truncate cars');
    await pool.execute('truncate familys');
    await pool.execute('truncate members');
    await pool.execute('truncate owns');
    await pool.execute('truncate phone_numbers');

    return res.status(200).json({
        message: 'delete ok'
    })
}
module.exports = {
    // user
    getAllUsers, createNewUser, updateUser, deleteUser,

    // member of apartment
    getAllMembers, getAllFamily, getAllApartments, getAllCars, getPhoneNumber,

    // gen data for database
    genData, delAllData
}